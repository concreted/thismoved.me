angular.module('tmmApp', [])

.controller('tmmController', function($scope) {

});

// controllers
angular.module('tmmApp')
.controller('tmmTimelineController', function($scope, tmmTimelineService) {
  $scope.movies = tmmTimelineService.movies;
});

angular.module('tmmApp')
.controller('tmmStatsController', function($scope, tmmStatsService) {
  $scope.stats = tmmStatsService;
  $scope.ratings = $scope.stats.ratings;
  console.log($scope.stats);
});

angular.module('tmmApp')
.controller('tmmInfoController', function($scope) {

});

// directives
angular.module('tmmApp')
.directive('tmmTimeline', function() {
  return {
    templateUrl: 'timeline/timeline.view.html'
  };
});

angular.module('tmmApp')
.directive('tmmStats', function() {
  return {
    templateUrl: 'stats/stats.view.html'
  };
});

angular.module('tmmApp')
.directive('tmmInfo', function() {
  return {
    template: '<div ng-controller="tmmInfoController">Info</div>'
  };
});

// services
angular.module('tmmApp')
.factory('tmmTimelineService', function() {
  var timeline = {
    movies: {
      'batman': {
        rating: 8,
        director: 'that one guy'
      },
      'batman two': {
        rating: 9,
        director: 'that one guy'
      }
    }
  };
  return timeline;
});

angular.module('tmmApp')
.factory('tmmStatsService', function() {
  // should retrieve user data,
  // then calculate averages and other stats
  var stats = {
    ratings: [1,2,3,4,5,6],
    average: 1,
  };

  // refactor to functional
  stats.getAverageRating = function() {
    var average = 0;
    stats.ratings.forEach(function(value) {
      average += value;
    });
    stats.average = average/stats.ratings.length;
  };

  return stats;
});
