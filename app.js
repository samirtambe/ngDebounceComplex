'use strict';

var app = angular.module('ngDebounceBetter', []);

app.directive('resize', function($window) {
    return {
        link: function(scope) {

            var timeout=false, delay=650;

            function onResize(e) {

                clearTimeout(timeout);

                timeout = setTimeout(sendBroadcast, delay);

                function sendBroadcast() {

                    scope.$broadcast('resize::resize');

                }
            }

            function cleanUp() {
                console.log('cleanup called...');
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);

            scope.$on('$destroy', cleanUp);
        }
    }
});

app.directive('elasticDiv', function() {
    return {
        restrict: 'A',
        //template: '<div></div>',
        link: function(scope, element) {
            scope.$on('resize::resize', function() {
                console.log('Receiving broadcast signal...');
            });
        }
    };
});
