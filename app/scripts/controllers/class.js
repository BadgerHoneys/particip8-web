(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

            $scope.id = $routeParams.id;


            // fill these from class's service request
            $scope.name = 'History';

            // fill these from evals service request
            $scope.evaluations = [
            {
                id: 1,
                name: "Some eval",
                scale: "3"
            },
            {
                id: 2,
                name: "Another eval",
                scale: "100"
            },
            {
                id: 3,
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

            $scope.makeReport = function() {
                // add a service request to a domain level function
                // create an excel sheet or something?
            }

            $scope.newEvaluation = function() {
                // how does it know which class these should be related to?
                // probably through cookies or something
                $location.path('/new_evaluation/' + $scope.id);
            }

            $scope.editEvaluation = function(evaluation) {
                $location.path('/edit_evaluation/' + $scope.id + '/' + evaluation.id);
            }

        }]);
})();