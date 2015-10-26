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

            $scope.evaluation_template = {
                evaluation_template_id: "",
                school_class_id: "",
                name: "",
                evaluation_type_id: "",
                rating_type_id: ""
            }

            // Determine if we are going to be editing the evaluation template
            if($routeParams.evaluation_template_id){
                console.log("editing!!!");

                //TODO: Find a better way to do this!!
                //indicate edit mode 
                $scope.edit = true;

                //make request to EvaluationTemplates get and set values of $scope.evaluation_template
                EvaluationTemplates.get({id:$routeParams.evaluation_template_id},function(res){
                    console.log("evaluation template get success");
                    console.log(res);

                    $scope.evaluation_template = {
                        evaluation_template_id: res.id,
                        name: res.name,
                        school_class_id: res.school_class_id,
                        evaluation_type_id: res.evaluation_type_id,
                        rating_type_id: res.rating_type_id
                    }

                }, function(err){
                    console.log("The EvaluationTemplates get request resulted in an error...");
                    console.log(err);
                });
            }

            $scope.evaluationTypes = [];
            $scope.ratingTypes = [];

            //grab all of the evaluation types
            EvaluationTypes.query(function(res){
                $scope.evaluationTypes = res;
                console.log(res);
            }, function(err){
                console.log("The EvaluationTypes query request resulted in an error...");
                console.log(err);
            });

            //grab all of the rating types
            RatingTypes.query(function(res){
                $scope.ratingTypes = res;
            }, function(err){
                console.log("The RatingTypes query request resulted in an error...");
                console.log(err);
            });

            $scope.createEvaluation = function(evaluation_template) {            
                //TODO: refactor this -- why arent we able to set $scope.school_class_id at page load time?                
                evaluation_template.school_class_id = $routeParams.class_id

                EvaluationTemplates.save(evaluation_template, function(res){
                    console.log("success");
                    $location.path("/class/" + $routeParams.class_id);
                }, function(err){
                    console.log("A request resulted in an error...");
                    console.log(err);
                });
            }

            $scope.editEvaluation = function(evaluation_template){
                //edit the evaluation
                console.log("editing the evaluation");

                //TODO: refactor this --why arent we able to set $scope.school_class_id at page load time?
                evaluation_template.school_class_id = $routeParams.class_id

                EvaluationTemplates.update({id:$routeParams.evaluation_template_id},
                    evaluation_template, function(res){
                    console.log("success");
                    $location.path("/class/" + $routeParams.class_id);
                }, function(err){
                    console.log("A request resulted in an error...");
                    console.log(err);
                });
            }

        }]);
})();