import angular from 'angular';

class Auth {
  constructor(){
  }
}

export var AuthModule = angular.module('App.auth', [

])
  .config(function($stateProvider) {
    $stateProvider.state('app.auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController as Auth'
    });
  })
  .controller('AuthController', Auth)
  .factory('Gatekeeper', function($http){
    let isAuth = () => {
      return true;
    };
    
    let oauth = () => {
    };
    
    let local = {
      signIn: () => {
        
      },
      
      signUp: () => {
        
      }
    };
    
    let signOut = () => {
      
    };
    
    
    return {
      isAuth: isAuth,
      oauth: oauth,
      local: local,
      signOut: signOut
    };
  })
