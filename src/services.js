/**
 * Upstage
 *
 * Upstage <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

'use strict';

angular.module('ng-loading')
.factory('loadingService', ['$rootScope', function($rootScope) {

  var show = function() {
    $rootScope.$broadcast('ng-loading:show');
  };

  var hide = function() {
    $rootScope.$broadcast('ng-loading:hide');
  };

  var onShow = function($scope, callback) {
    $scope.$on('ng-loading:show', function(event) {
      callback();
    });
  };

  var onHide = function($scope, callback) {
    $scope.$on('ng-loading:hide', function(event) {
      callback();
    });
  };

  return {
    show: show,
    hide: hide,
    onShow: onShow,
    onHide: onHide
  };

}]);