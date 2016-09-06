import {IRow} from '../interfaces/row';

export class TableController {

  private sortType: string;
  private sortReverse: boolean = false;
  private labelType: string;
  private addressType: string;
  private latitudeType: string;
  private longitudeType: string;
  private data: Array<IRow>;
  /* tslint:disable:no-unused-variable */
  private searchText: string = '';
  /* tslint:enable:no-unused-variable */

  public predicate = (input: IRow): string => {
    return input[this.sortType];
  }

  public sort = (header: string): void => {
    this.sortType = header;
    this.sortReverse = !this.sortReverse;
  }

  public setLabel = (): void => {
    for (let row of this.data) {
      row.$$label = row[this.labelType];
    }
  }

  public setAddress = (): void => {
    if (!this.addressType) {
      return;
    }

    for (let row of this.data) {
      row.$$position = row[this.addressType];
    }
  }

  public setCoordinates = (): void => {
    if (!this.latitudeType || !this.longitudeType) {
      return;
    }

    for (let row of this.data) {
      row.$$position = [parseFloat(row[this.latitudeType]), parseFloat(row[this.longitudeType])];
    }
  }

}
