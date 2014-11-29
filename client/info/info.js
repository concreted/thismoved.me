angular.module('tmmApp')

.controller('tmmInfoController', function($scope) {

})

.directive('tmmInfo', function() {
  return {
    template: '<div ng-controller="tmmInfoController">Info</div>'
  };
});
