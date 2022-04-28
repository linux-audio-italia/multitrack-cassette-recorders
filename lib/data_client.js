import { promises as fs } from "fs";
import path from "path";
import slugify from "../lib/slugify";
import uniqBy from "lodash.uniqby";

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

export async function fetchRecorders() {
  const dataFile = path.join(process.cwd(), "data", "models.csv");
  const fileContents = await fs.readFile(dataFile, "utf8");
  const recorders = csvToArray(fileContents);
  return withSlugs(recorders);
}

export async function fetchUniqueBrands() {
  const recorders = await fetchRecorders();
  return uniqBy(recorders, "Brand").map((recorder) => ({
    Brand: recorder.Brand,
    BrandSlug: recorder.BrandSlug,
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
