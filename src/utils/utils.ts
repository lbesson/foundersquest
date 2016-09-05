import * as angular from 'angular';

import {richContentFilter} from './filters/rich.content';

export const utilsModule = 'utils';

/* tslint:disable:no-var-requires */
angular
  .module(utilsModule, [require('angular-sanitize')])
  .filter('richContent', richContentFilter);
/* tslint:enable:no-var-requires */
