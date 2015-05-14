  'use strict';
  angular.module('vincentApp').directive('paintingLoadDirective', ['paintingService', function(paintingService) {
    return {
        restrict: 'A',
        scope: '@',
        link: function(scope, element, attrs) {

          element.bind('load', function() {
            // Not a raw DOM references, element is
            // wrapped with jQuery or jqLite; 
            // bind  Does not support namespaces, selectors or eventData
            console.log('loaded');
            element.css("opacity", "1.0");
            element.css("filter", "alpha(opacity=100)");
            });

        }
    };
}]);