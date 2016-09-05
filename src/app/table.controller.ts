import {IRow} from '../interfaces/row';

export class TableController {

  private sortType: string;
  private sortReverse: boolean = false;
  /* tslint:disable:no-unused-variable */
  private searchText: string = '';
  /* tslint:enable:no-unused-variable */

  public predicate = (input: IRow): string => {
    return input[this.sortType];
  }

  public sort(header: string): void {
    this.sortType = header;
    this.sortReverse = !this.sortReverse;
  }

}
