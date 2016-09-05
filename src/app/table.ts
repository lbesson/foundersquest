import {TableController} from './table.controller';

export const table: angular.IComponentOptions = {
  template: require('./table.html'),
  controller: TableController,
  bindings: {
    data: '='
  }
};
