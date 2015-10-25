(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('EvaluationTemplateCtrl', ['$scope', '$location', '$cookies', '$http', '$routeParams', 
            function ($scope, $location, $cookies, $http, $routeParams) {
            
            //TODO: Find out how to globalize this
            //replicate this across all controllers
            $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

            console.log("evaluation template controller entered");

            console.log("class id: " + $routeParams.class_id)


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