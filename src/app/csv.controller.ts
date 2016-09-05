import * as Papa from 'papaparse';

interface IRow {
  $$visible: boolean;
}

export class CsvController {

  private delimiter: string = '';
  private input: string;
  private data: Array<IRow>;

  public parseCsv(input: string) {
    const results = Papa.parse(this.input, {
      header: true,
      delimiter: this.delimiter
    });

    if (results.errors.length) {
      alert('Unable to parse csv input => ' + results.errors[0].message);
      return;
    }

    // by defaults all rows are visible
    for (let row of results.data) {
      row.$$visible = true;
    }
    this.data = results.data;
  }

}
