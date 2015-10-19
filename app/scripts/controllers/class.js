(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

            console.log($routeParams.id);
            $scope.id = $routeParams.id;


            // fill these from class's service request
            $scope.name = 'History';

            // fill these from evals service request
            $scope.evaluations = [
            {
                name: "Some eval",
                scale: "3"
            },
            {
                name: "Another eval",
                scale: "100"
            },
            {
                name: "Attendance",
                scale: "1"
            }
            ];

            $scope.students = [
            {
                name: "Paul Darragh",
                average: "88"
            },
            {
                name: "Josh Woodward",
                average: "91"
            },
            {
                name: "Zack Downs",
                average: "46"
            }];

            // do a GET on the class here
            // check if the class exists
            // build out the array with class data
            // otherwise throw 404

        }]);
})();