import * as Papa from 'papaparse';

export class CsvController {

  static $inject = ['$scope'];

  private delimiter: string = '';
  private input: string;
  private data: Array<Array<string>>;

  private parseCsv(input: string) {
    const results = Papa.parse(this.input, {
      header: true,
      delimiter: this.delimiter
    });

    if (results.errors.length) {
      alert('Unable to parse csv input => ' + results.errors[0].message);
      return;
    }

    this.data = results.data;
  }

}
