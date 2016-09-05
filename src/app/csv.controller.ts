import * as Papa from 'papaparse';

interface IRow {
  $$visible: boolean;
  [field: string]: string;
}

export class CsvController {

  static $inject = ['$scope'];

  private delimiter: string = '';
  private input: string;
  private data: Array<IRow>;

  private parseCsv(input: string) {
    const results = Papa.parse(this.input, {
      header: true,
      delimiter: this.delimiter
    });

    if (results.errors.length) {
      alert('Unable to parse csv input => ' + results.errors[0].message);
      return;
    }

    // by defaults all row are visible
    for (let row of results.data) {
      row.$$visible = true;
    }
    this.data = results.data;
  }

}
