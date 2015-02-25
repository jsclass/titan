import angular from 'angular';
import from 'ui-router';

class Auth {
  constructor(Gatekeeper){
    angular.extend(this, Gatekeeper);
  }
}

export var AuthModule = angular.module('App.auth', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider.state('app.auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController as Auth'
    });
  })
  .controller('AuthController', Auth)
  .factory('Gatekeeper', function($http, $state, $window, $interval){
    let openAuthWindow = (url) => {
      let opts = 'location=0,status0,modal=yes,alwaysRaised=yes,width=500,height=500';
      return $window.open(url, '_blank', opts);
    };
    
    let mapsToUrls = {
      'github': 'https://github.com',
      'facebook': 'https://facebook.com'
    };
    
    let isAuth = () => {
      return true;
    };
    
    let oauth = (provider) => {
      let win = openAuthWindow(mapsToUrls[provider]);
      let timer = $interval(() =>{
        if (win.closed) {
          $state.go('app.main');
          $interval.cancel(timer);
        }
      },500);
    };
    
    let local = {
      signIn: () => {
        
      },
      
      signUp: () => {
        
      }
    };
    
    let logout = () => {
      $state.go('app.auth');
    };
    
    
    return {
      isAuth: isAuth,
      oauth: oauth,
      local: local,
      logout: logout
    };
  })
