/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('fountainFooter', ['app/footer.html'])
      .component('fountainFooter', footer);
    angular.mock.module('fountainFooter');
  });

  it('should render footer\'s text', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    expect(element.text().trim()).toEqual('Built quickly by Lionel Besson');
  }));
});
