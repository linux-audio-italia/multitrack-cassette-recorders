import fs from "fs";
import { promises as afs } from "fs";
import path from "path";
import slugify from "../lib/slugify";
import orderBy from "lodash.orderby";
import YAML from "yaml";

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const parseYaml = async (filename) => {
  const dataFile = path.join(process.cwd(), "data", filename);
  try {
    const fileContents = await afs.readFile(dataFile, "utf8");
    return [null, YAML.parse(fileContents)];
  } catch (error) {
    return ["ERROR", []];
  }
};

const getImagePath = (slug) => {
  const imagesDir = path.join(process.cwd(), "public", "images", "brands");
  const imageFilePath = path.join(imagesDir, `${slug}.png`);
  const img = `/images/brands/${slug}.png`;
  const placeholder = `/images/brands/placeholder.png`;
  return fs.existsSync(imageFilePath) ? img : placeholder;
};

const modelNamesToString = (records) =>
  records.map((r) => ({ ...r, models: r.models.map((m) => `${m}`) }));

const modelsToObject = (records) =>
  records.map((r) => ({ ...r, models: r.models.map((m) => ({ name: m })) }));

const addSlugs = (records) =>
  records.map((r) => ({
    ...r,
    slug: slugify(r.brand),
    models: r.models.map((m) => ({ ...m, slug: slugify(m.name) })),
  }));

const addUrls = (records) =>
  records.map((r) => ({
    ...r,
    href: `/${r.slug}`,
    models: r.models.map((m) => ({ ...m, href: `/${r.slug}/${m.slug}` })),
  }));

const addBrandsImages = (records) =>
  records.map((r) => ({
    ...r,
    image: getImagePath(r.slug),
  }));

const addBrandsToModels = (records) =>
  records.map((r) => ({
    ...r,
    models: r.models.map((m) => ({ ...m, name: `${r.brand} ${m.name}` })),
  }));

const orderByModelName = (records) => orderBy(records, "name");

const orderByModelBrand = (records) => orderBy(records, "brand");

const extractModels = (records) =>
  records.reduce((acc, curr) => [...acc, ...curr.models], []);

export const fetchRecorders = async () => {
  const [_, records] = await parseYaml("list.yml");
  return pipe(
    modelNamesToString,
    modelsToObject,
    addSlugs,
    addUrls,
    addBrandsImages,
    addBrandsToModels,
    orderByModelName,
    orderByModelBrand
  )(records);
};

export const fetchOnlyModels = async () => {
  const recorders = await fetchRecorders();
  return pipe(extractModels)(recorders);
};

export const fetchRecordersBy = async (brandSlug) => {
  const recorders = await fetchRecorders();
  return recorders.find((r) => r.slug === brandSlug);
};

export const fetchRecorderBy = async (brandSlug, modelSlug) => {
  const recorders = await fetchRecordersBy(brandSlug);
  const model = recorders.models.find((m) => m.slug === modelSlug);
  return { ...model, brandSlug: recorders.slug };
};

export const fetchRecorderDetails = async (brandSlug, modelSlug) => {
  const dataFile = path.join(brandSlug, `${modelSlug}.yml`);
  const res = await parseYaml(dataFile);
  return res;
};
