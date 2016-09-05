import {IRow} from '../interfaces/row';

export class TableController {

  private sortType: string;
  private sortReverse: boolean = false;
  /* tslint:disable:no-unused-variable */
  private searchText: string = '';
  /* tslint:enable:no-unused-variable */

  public sort(header: string) {
    this.sortType = header;
    this.sortReverse = !this.sortReverse;
  }

  public predicate(input: IRow) {
  	return input[this.sortType];
  }
}
