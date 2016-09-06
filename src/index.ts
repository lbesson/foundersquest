/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import './utils/utils';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';
import {csv} from './app/csv';
import {table} from './app/table';
import {map} from './app/map';

import './index.scss';

angular
  /* tslint:disable:no-var-requires */
  .module('app', ['utils', require('ngmap')])
  /* tslint:enable:no-var-requires */
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('csvInput', csv)
  .component('startupsTable', table)
  .component('startupsMap', map);
