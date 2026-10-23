import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {
  static getTestDataFromJson(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  }

  static getTestDataFromCsv(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
  }
}

export default DataProvider;