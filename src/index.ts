/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import './utils/utils';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';
import {csv} from './app/csv';

import './index.scss';

angular
  .module('app', ['utils'])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('csv', csv);
