import angular from 'angular';
import {MainModule} from 'app/main/main';
import {CommonModule} from 'app/common/common';
import {AuthModule} from 'app/auth/auth';
import from 'ui-router';
import from 'angular-material';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  MainModule.name,
  CommonModule.name,
  AuthModule.name
])
.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider){
  $urlRouterProvider.otherwise('/dash');

  $stateProvider.state('app', {
    url: '',
    template: '<ui-view/>',
    abstract: true
  });
  
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red');
  
  $mdThemingProvider.theme('lua')
    .primaryPalette('indigo')
    .accentPalette('pink');
    
  $mdThemingProvider.theme('freshly')
    .primaryPalette('teal')
    .accentPalette('yellow');
    
  $mdThemingProvider.theme('razi')
    .primaryPalette('deep-purple')
    .accentPalette('red');
    
  $mdThemingProvider.theme('citrus')
    .primaryPalette('deep-orange')
    .accentPalette('amber');
    
  $mdThemingProvider.theme('frosty')
    .primaryPalette('blue')
    .accentPalette('cyan');
  
  $mdThemingProvider.alwaysWatchTheme(true);
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
})
.run(($rootScope, $state, Gatekeeper) =>{
  $rootScope.$on('$stateChangeStart', (e, toState) =>{
    if (toState.auth && !Gatekeeper.isAuth()) {
      e.preventDefault();
      $state.go('app.auth');
    }
  });
});
