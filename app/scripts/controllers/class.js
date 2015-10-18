(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

            console.log($routeParams.id);
            $scope.id = $routeParams.id;

            // do a GET on the class here
            // check if the class exists
            // build out the array with class data
            // otherwise throw 404

        }]);
})();