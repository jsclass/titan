import angular from 'angular';
import from 'ngComponent';
import _ from 'lodash';

let template = '<div>';
template += '<h1>the color is {{ color }}</h1>';
template += '</div>';

export var CommonModule = angular.module('App.common', [
  'ngComponent'
])
.factory('Card', function(Component){
  class Card extends Component {
    constructor(config){
      super(config);

      this.template = '<div class="card">';
      this.template += '<h3>ima a card {{ name }}</h3>';
      this.template += '</div>';
    }
  }

  return Card;
})
.directive('card', Card => {
  let card = new Card();

  card.on('click', () => {
    console.log('clicked');
  })
  .ready(scope => {
    scope.name = 'First card';
  });

  return card;
});
