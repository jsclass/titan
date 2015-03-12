import from 'angular';
import from 'angular-mocks';
import {AuthModule} from 'app/auth/auth';

describe('app.auth', () => {
  beforeEach(angular.mock.module(AuthModule.name));

  let Gatekeeper;

  beforeEach(inject(_Gatekeeper_ => {
    Gatekeeper = _Gatekeeper_;
  }));

  describe('Gatekeeper', () => {
    it('should exist', () => {
      expect(Gatekeeper).to.be.a('object');
    });
    
    it('should let us check if user is logged in', () => {
      expect(Gatekeeper.isAuth).to.be.a('function');
      expect(Gatekeeper.isAuth()).to.be.false;
    });
    
    it('should have an oauth methoud', () => {
      expect(Gatekeeper.oauth).to.be.a('function');
    });
    
    it('should have local signup', () => {
      expect(Gatekeeper.local.signUp).to.be.a('function');
    });
    
    it('should have local signin', () => {
      expect(Gatekeeper.local.signIn).to.be.a('function');
    });
  });
});
