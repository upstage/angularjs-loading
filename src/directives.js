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
.directive('loading', ['loadingService', function(loadingService) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.hide();

      var show = function() { element.show(); };
      var hide = function() { element.hide(); };

      loadingService.onShow(scope, show);
      loadingService.onHide(scope, hide);

    }
  };
}]);