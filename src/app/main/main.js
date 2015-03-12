import angular from 'angular';
import from 'ui-router';
import {ProgressModule} from 'app/main/progress/progress';

class Main {
  constructor($mdSidenav, Gatekeeper, $mdMedia){
    
    this.toggleSideNav = () =>{
      let leftMenu = $mdSidenav('left');
      leftMenu.toggle();
    };
    
    this.$mdMedia = $mdMedia;
    
    this.logout = () => {
      Gatekeeper.logout();
    };
    
    this.theme = {
      active: 'default',
      all: ['default', 'razi', 'lua', 'freshly', 'citrus', 'frosty']
    };
  }

  setTitle(title){
    this.title = title;
  }
}

export var MainModule = angular.module('app.main', [
  'ui.router',
  ProgressModule.name
])
  .config(function($stateProvider) {
    $stateProvider.state('app.main', {
      url: '',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      auth: true,
      abstract: true
      
    });
  })
  .controller('MainController', Main)
  .directive('loadCss', () =>{
    return (scope, ele) =>{
      let head = angular.element(document.querySelector('head'));
      let link = document.querySelector('link[href="style.css"]');
      
      if (!link){
        head.append('<link href="style.css" rel="stylesheet">');
      }
    };
  });
