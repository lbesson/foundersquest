import * as angular from 'angular';

import {richContentFilter} from './filters/rich.content';

export const utilsModule = 'utils';

angular
  .module(utilsModule, [require('angular-sanitize')])
  .filter('richContent', richContentFilter);
