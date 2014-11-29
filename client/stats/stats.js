angular.module('tmmApp')

.controller('tmmStatsController', function($scope, tmmFactory) {
  $scope.ratings = tmmFactory.getRatings();
  $scope.average = tmmFactory.getAverageRating();
})

.directive('tmmStats', function() {
  return {
    templateUrl: 'stats/stats.view.html'
  };
})

.factory('tmmStatsService', function() {
  // should retrieve user data,
  // then calculate averages and other stats
  var stats = {
  };

  return stats;
});
