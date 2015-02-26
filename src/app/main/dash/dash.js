import angular from 'angular';
import dashTemplate from 'app/main/dash/dash.html!text';

class Dash {
  constructor(){
    this.title = 'Dash';
  }
}

export var DashModule = angular.module('app.main.dash', [

])
  .config(function($stateProvider) {
    $stateProvider.state('app.main.dash', {
      url: 'dash',
      template: dashTemplate,
      controller: 'DashController as Dash',
      auth: true
    });
  })
  .controller('DashController', Dash);
