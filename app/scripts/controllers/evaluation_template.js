(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('EvaluationTemplateController', ['RatingTypes', 'EvaluationTypes', 'EvaluationTemplates',
        '$location', '$cookies', '$http', '$routeParams', EvaluationTemplateController]);

    function EvaluationTemplateController(RatingTypes, EvaluationTypes, EvaluationTemplates, 
        $location, $cookies, $http, $routeParams) {

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

        this.evaluation_template = {
            evaluation_template_id: "",
            school_class_id: "",
            name: "",
            evaluation_type_id: "",
            rating_type_id: ""
        }

        // Determine if we are going to be editing the evaluation template
        if($routeParams.evaluation_template_id){

            //TODO: Find a better way to do this!!
            //indicate edit mode 
            this.edit = true;

            //make get request to EvaluationTemplates and set values of this.evaluation_template
            var evaluation_template = EvaluationTemplates.get(
                {id:$routeParams.evaluation_template_id});

            evaluation_template.$promise.then(function(evaluation_template){
                this.evaluation_template = {
                    evaluation_template_id: evaluation_template.id,
                    name: evaluation_template.name,
                    school_class_id: evaluation_template.school_class_id,
                    evaluation_type_id: evaluation_template.evaluation_type_id,
                    rating_type_id: evaluation_template.rating_type_id
                }
            }.bind(this))
        }

        this.evaluationTypes = EvaluationTypes.query();
        this.ratingTypes = RatingTypes.query();

        this.createEvaluation = function(evaluation_template) {            

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

        this.editEvaluation = function(evaluation_template){

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
    }
})();