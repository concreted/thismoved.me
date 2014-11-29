angular.module('tmmApp')

.controller('tmmTimelineController', function($scope, tmmFactory) {
  $scope.movies = tmmFactory.getMovies();
})

.directive('tmmTimeline', function() {
  return {
    templateUrl: 'timeline/timeline.view.html'
  };
})

.factory('tmmTimelineService', function() {
  var timeline = {};
  return timeline;
});
