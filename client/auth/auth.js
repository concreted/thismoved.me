angular.module('tmmApp')

.controller('authController', function($scope, $http, $window, authFactory) {
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
    });
  };
})

.factory('authFactory', function() {
  var af = {
    user: {}
  };

  return af;
});
