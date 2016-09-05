export class TableController {

  private sortType: string;
  private sortReverse: boolean = false;
  private searchText: string = '';

  public sort(header: string) {
    this.sortType = header;
    this.sortReverse = !this.sortReverse;
  }
}
