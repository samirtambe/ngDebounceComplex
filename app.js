'use strict';

var app = angular.module('AngDbcng', []);

app.directive('disp', ['$window', function ($window) {
    return {
        link: link,
        restrict: 'E',
        template: '<div>window size: {{width}}px</div>'
    };

    function link(scope, element, attrs){
        scope.width = $window.innerWidth;
        var timeout=false, delay=650;
        angular.element($window).bind('resize', function() {
            scope.width = $window.innerWidth;
            clearTimeout(timeout);
// start timing for event "completion"
            timeout = setTimeout(someFunc, delay);

            function someFunc() {
// manuall $digest required as resize event
// is outside of angular
                scope.$digest();
                /*
                Put what you want to happen once the window is finished resizing
                HERE

                */
            }
        });

     }//link function

 }]);
