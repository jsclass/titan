import angular from 'angular';

class Main {
  constructor($mdSidenav, Gatekeeper){
    
    this.isSideNavLockedOpen = true;
    this.nums = [1,2,3,4,5,6,7,8,9,10,11];
    
    this.logout = () => {
      Gatekeeper.logout();
    };
  }

  setTitle(title){
    this.title = title;
  }
}

export var MainModule = angular.module('app.main', [

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
