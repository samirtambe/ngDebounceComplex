'use strict';

var app = angular.module('ngDebounceBetter', []);

app.directive('resize', function($window) {
    return {
        link: function(scope) {

            function onResize(e) {
                console.log('onresize called.');
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

app.directive('elasticDiv', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        link: function(scope, element) {
            scope.$on('resize::resize', function() {
                console.log('Hearing a resize::resize...'+'co_nt');
            });
        }
    };
});
