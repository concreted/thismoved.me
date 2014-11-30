angular.module('tmmApp')

.controller('authController', function($scope, $http, $window, $state, authFactory) {
  $scope.user = authFactory.user;
  $scope.login = function() {
    return $http({
      method: 'POST',
      url: '/login',
      data: $scope.user
    })
    .then(function (res) {
      console.log('received token');
      return res.data.token;
    })
    .then(function(token) {
      $window.localStorage.setItem('com.tmm', token);
      $state.go('main');
    });
  };

})

.factory('authFactory', function($window) {
  var isAuthenticated = function() {
    return !!$window.localStorage.getItem('com.tmm');
  };



  return {
    user: {},
    isAuthenticated: isAuthenticated
  };
});
