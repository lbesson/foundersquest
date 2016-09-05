/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
