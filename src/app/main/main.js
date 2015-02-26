import angular from 'angular';
import from 'ui-router';
import {DashModule} from 'app/main/dash/dash';

class Main {
  constructor($mdSidenav, Gatekeeper){
    
    this.isSideNavLockedOpen = true;
    
    this.logout = () => {
      Gatekeeper.logout();
    };
  }

  setTitle(title){
    this.title = title;
  }
}

export var MainModule = angular.module('app.main', [
  'ui.router',
  DashModule.name
])
  .config(function($stateProvider) {
    $stateProvider.state('app.main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      auth: true
    });
  })
  .controller('MainController', Main);
