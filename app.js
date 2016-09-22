'use strict';

var app = angular.module('ngDebounceBetter', []);

angular.module('ngDebounceBetter').directive('resize', function($window) {
    return {
        link: function(scope) {

            function onResize(e) {
                console.log('onresize called.\n\n');
// Namespacing events with name of directive + event to avoid collisions
                scope.$broadcast('resize::resize');
            }

            function cleanUp() {
                console.log('cleanup called...now calling onResize');
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);

            scope.$on('$destroy', cleanUp);
        }
    }
});

angular.module('ngDebounceBetter').directive('elasticDiv', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        link: function(scope, element) {
            scope.$on('resize::resize', function() {
                console.log('Hearing a resize::resize...'+count+'\n\n');
            });
        }
    };
});
