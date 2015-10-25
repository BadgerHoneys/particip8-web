(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('EvaluationTemplateCtrl', ['$scope', '$location', '$cookies', '$http', '$routeParams', 
            'RatingTypes', 'EvaluationTypes',
            function ($scope, $location, $cookies, $http, $routeParams, RatingTypes, EvaluationTypes) {
            
            //TODO: Find out how to globalize this
            //replicate this across all controllers
            $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

            $scope.class_id = $routeParams.class_id;
            $scope.evaluation_template_id = $routeParams.evaluation_template_id;            

            if($scope.evaluation_template_id){
                console.log("editing!!!");

                //TODO: Find a better way to do this!!
                //indicate edit mode 
                $scope.edit = true;
            }

            $scope.eval = {
                name: "",
                evaluation_type_id: "",
                scale_id: ""
            }

            $scope.evaluationTypes = [];
            $scope.ratingTypes = [];

            EvaluationTypes.query(function(res){
                $scope.evaluationTypes = res;
                console.log(res);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });

            RatingTypes.query(function(res){
                $scope.ratingTypes = res;
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });

            //if we are in edit mode, then make a request to the the evaluation template

            $scope.createEvaluation = function() {
                // build out the array from the evaluation template's form
                // send POST or PUT depending on if the evaluation was new or edited

                // $location.path('/class/' + $scope.class_id);
            
                console.log("creating the evaluation");
            }

            $scope.editEvaluation = function(){
                //edit the evaluation
                console.log("editing the evaluation");
            }

        }]);
})();