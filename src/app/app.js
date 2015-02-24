import angular from 'angular';
import {MainModule} from 'app/main/main';
import {CommonModule} from 'app/common/common';
import {AuthModule} from 'app/auth/auth';
import from 'ui-router';
import from 'angular-material';

angular.module('App', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  MainModule.name,
  CommonModule.name,
  AuthModule.name
])
.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '',
    template: '<ui-view/>',
    abstract: true
  });
  
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red');
})
.run(($rootScope, $state, Gatekeeper) =>{
  $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromState) =>{
    if (toState.auth && !Gatekeeper.isAuth()) {
      e.preventDefault();
      $state.go('app.auth');
    }
  });
})
