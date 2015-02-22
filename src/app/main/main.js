import angular from 'angular';

class Main {
  constructor(){
    this.title = 'Yuuup';
  }

  setTitle(title){
    this.title = title;
  }
}

export var MainModule = angular.module('App.main', [

])
  .config(function($stateProvider) {
    $stateProvider.state('app.main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main'
    });
  })
  .controller('MainController', Main);
