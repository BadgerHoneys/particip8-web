(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('NewEvaluationCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
            $scope.class_id = $routeParams.class_id;
            // maybe get the class from this routeParam.id so that we can display the class's name

            $scope.eval = {
                name: "",
                scale: ""
            }

            // take the form and do shit with it
            $scope.createEvaluation = function() {
                // build out the array from the evaluation template's form
                // send POST or PUT depending on if the evaluation was new or edited

                $location.path('/class/' + $scope.class_id);
            }
        }]);
})();