import from 'angular';
import from 'angular-mocks';
import {CommonModule} from 'app/common/common';

describe('app.common', () => {
  beforeEach(angular.mock.module(CommonModule.name));

  let Urls, Card;

  beforeEach(inject((_Urls_, _Card_) => {
    Urls = _Urls_;
    Card = _Card_;
  }));

  describe('Urls', () => {
    expect(Urls.api).to.be('/api/v1');
  });
});
