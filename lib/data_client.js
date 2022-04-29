import { promises as fs } from "fs";
import path from "path";
import slugify from "../lib/slugify";
import uniqBy from "lodash.uniqby";
import orderBy from "lodash.orderby";

const csvToArray = (str, delimiter = ",") => {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  rows.pop();
  const arr = rows.map((row) => {
    const values = row.split(delimiter);
    const el = headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
  return arr;
};

const withSlugs = (recorders) =>
  recorders.reduce(
    (acc, curr) => [
      ...acc,
      {
        ...curr,
        BrandSlug: slugify(curr.Brand),
        ModelSlug: slugify(curr.Model),
      },
    ],
    []
  );

const withUrls = (recorders) =>
  recorders.reduce(
    (acc, curr) => [
      ...acc,
      {
        ...curr,
        BrandUrl: `/${curr.BrandSlug}`,
        ModelUrl: `/${curr.BrandSlug}/${curr.ModelSlug}`,
      },
    ],
    []
  );

export async function fetchRecorders() {
  const dataFile = path.join(process.cwd(), "data", "models.csv");
  const fileContents = await fs.readFile(dataFile, "utf8");
  const recorders = csvToArray(fileContents);
  const sorted = orderBy(recorders, ["Brand", "Model"], ["asc", "asc"]);
  return withUrls(withSlugs(sorted));
}

export async function fetchUniqueBrands() {
  const recorders = await fetchRecorders();
  return uniqBy(recorders, "Brand").map((recorder) => ({
    Brand: recorder.Brand,
    BrandSlug: recorder.BrandSlug,
    BrandUrl: recorder.BrandUrl,
  }));
}

export async function fetchRecordersBy(brandSlug) {
  const recorders = await fetchRecorders();
  return recorders.filter((recorder) => recorder.BrandSlug === brandSlug);
}

export async function fetchRecorder(brandSlug, modelSlug) {
  const recorders = await fetchRecordersBy(brandSlug);
  return recorders.find((recorder) => recorder.ModelSlug === modelSlug);
}
