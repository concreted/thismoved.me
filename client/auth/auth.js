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
      return res.data.token;
    })
    .then(function(token) {
      if (token) {
        console.log('received token');
        $window.localStorage.setItem('com.tmm', token);
        $state.go('main');
      }
      else {
        console.log('authentication failed');
        //$state.go('login');
      }
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
