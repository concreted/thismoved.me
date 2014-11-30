var app = angular.module('tmmApp', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'auth/login.html',
      controller: 'authController'
    })
    .state('main', {
      url: '/',
      templateUrl: 'main/main.html',
      controller: 'tmmController'
    });
});

app.factory('tmmFactory', function(){
  // dummy data
  var movies = {
    'batman': {
      rating: 8,
      director: 'that one guy'
    },
    'batman two': {
      rating: 9,
      director: 'that one guy'
    }
  };

  var tmm = {
    getMovies: function() {
      // dummy function - replace with ajax call to tmdb
      return movies;
    },
    getRatings: function() {
      // dummy function - should get
      return [0, 1];

    },
    getAverageRating: function() {
      return 0;
    }
  };

  return tmm;
});

app.controller('tmmController', ['tmmFactory', function($scope, tmmFactory) {

}]);
