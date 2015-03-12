import angular from 'angular';
import progressTemplate from 'app/main/progress/progress.html!text';
import from 'progress';

class ProgressController {
  constructor(){
    this.title = 'Progress';
    this.courses = [
      { score: 33, title: 'ng6'},
      { score: 45, title: 'Reacting'},
      { score: 89, title: 'Polymer'}
    ];
    
  }
}

export var ProgressModule = angular.module('app.main.progress', [
  'angular-svg-round-progress'
])
  .config(function($stateProvider) {
    $stateProvider.state('app.main.progress', {
      url: '/progress',
      template: progressTemplate,
      controller: 'ProgressController as Progress',
      auth: true
    });
  })
  .controller('ProgressController', ProgressController)
  .factory('ProgressViz', function(Component){
    class ProgressViz extends Component {
      constructor(config){
        super(config);

        this.template = `<div class="card progress-card" layout="column" layout-padding layout-fill layout-align="start center">
          <div flex><h3>{{ course.title }}</h3></div>
          <h4>{{ course.score }}%</h4>
          <div flex round-progress current="course.score" max="max" radius="40" rounded="true"></div>
        `;
      }
    }

    return ProgressViz;
  })
  .directive('progressViz', ProgressViz =>{
    return new ProgressViz({
      replace: true,
    })
    .scopeOptions({
      'course': 'two-way'
    })
    .ready(function(scope){
      scope.max = 100;
    });
  });
