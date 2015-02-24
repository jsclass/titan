import angular from 'angular';
import from 'ngComponent';
import _ from 'lodash';
import cardTemplate from 'app/common/card-template.html!text';
import from '../../style.css!';

export var CommonModule = angular.module('App.common', [
  'ngComponent'
])
.factory('Card', function(Component){
  class Card extends Component {
    constructor(config){
      super(config);

      this.template = cardTemplate;
    }
  }

  return Card;
})
.directive('card', Card => {
  let card = new Card({ replace: true });

  card.on('click', (e, scope) => {
    console.log('clicked');
  })
  .ready(scope => {
    scope.title = 'First card';
  })
  .beforeReady( ()=> {
    console.log('before ready');
  })
  .scopeOptions({
    'numbers': 'two-way'
  })

  return card;
});
