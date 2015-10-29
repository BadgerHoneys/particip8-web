(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateEvaluationTemplateController', ['RatingTypes', 'EvaluationTemplates',
        '$location', '$cookies', '$http', '$routeParams', CreateEvaluationTemplateController]);

    function CreateEvaluationTemplateController(RatingTypes, EvaluationTemplates, 
        $location, $cookies, $http, $routeParams) {

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

        this.edit = false;
        this.header = "New Evaluation Template"

        //define the evaluation_template object to be created
        this.evaluation_template = {
            evaluation_template_id: "",
            school_class_id: "",
            name: "",
            rating_type_id: ""
        }

        this.rating_types = RatingTypes.query();


        this.createTemplate = function(evaluation_template) {            

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
    }
})();