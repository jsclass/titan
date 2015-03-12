import angular from 'angular';
import progressTemplate from 'app/main/profile/profile.html!text';

class ProfileController {
  constructor(){
    this.title = 'Profile';
  }
}

export var ProfileModule = angular.module('app.main.profile', [])
  .config(function($stateProvider) {
    $stateProvider.state('app.main.profile', {
      url: '/profile',
      template: progressTemplate,
      controller: 'ProfileController as Progress',
      auth: true
    });
  })
  .controller('ProfileController', ProfileController);
