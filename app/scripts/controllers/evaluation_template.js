(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('EvaluationTemplateCtrl', ['$scope', '$location', '$cookies', '$http', '$routeParams', 
            'RatingTypes', 'EvaluationTypes', 'EvaluationTemplates',
            function ($scope, $location, $cookies, $http, $routeParams, RatingTypes,
            EvaluationTypes, EvaluationTemplates) {
            
            //TODO: Find out how to globalize this
            //replicate this across all controllers
            $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

            // Determine if we are going to be editing the evaluation template
            if($scope.evaluation_template_id){
                console.log("editing!!!");

                //TODO: Find a better way to do this!!
                //indicate edit mode 
                $scope.edit = true;
            }

            $scope.evaluation_template = {
                name: "",
                evaluation_type_id: "",
                rating_type_id: "",
                school_class_id: ""
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

            $scope.createEvaluation = function(evaluation_template) {            
                //TODO: refactor this -- why arent we able to set $scope.school_class_id at page load time?                
                evaluation_template.school_class_id = $routeParams.class_id

                EvaluationTemplates.save(evaluation_template, function(res){
                    console.log("success");
                    $location.path("/class/" + $routeParams.class_id);
                }, function(err){
                    console.log("error: " + err)
                });
            }

            $scope.editEvaluation = function(){
                //edit the evaluation
                console.log("editing the evaluation");
            }

        }]);
})();