import { promises as fs } from 'fs';
import path from 'path';
import slugify from '../lib/slugify';

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
}

export async function fetchRecorders() {
  const dataFile = path.join(process.cwd(), "data", "models.csv");
  const fileContents = await fs.readFile(dataFile, "utf8")
  return csvToArray(fileContents);
}

export async function fetchUniqueBrands() {
  const models = await fetchRecorders();
  return Array.from(new Set(models.map(model => model.Brand)));
}

export async function fetchRecordersBy(brand) {
  const models = await fetchRecorders();
  return models.filter(model => slugify(model.Brand) === brand);
}

export async function fetchRecorder(brand, model) {
  const models = await fetchRecordersBy(slugify(brand));
  return models.find(recorder => slugify(recorder.Model) === model);
}
