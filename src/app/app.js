import angular from 'angular';
import {MainModule} from 'app/main/main';
import {CommonModule} from 'app/common/common';
import from 'ui-router';

angular.module('App', [
  'ui.router',
  MainModule.name,
  CommonModule.name
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '',
    template: '<ui-view/>',
    abstract: true
  });
});
