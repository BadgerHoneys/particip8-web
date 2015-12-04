(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('EditEvaluationTemplateController', ['RatingTypes', 'EvaluationTemplates',
        '$location', '$cookies', '$http', '$routeParams', EditEvaluationTemplateController]);

    function EditEvaluationTemplateController(RatingTypes, EvaluationTemplates, 
        $location, $cookies, $http, $routeParams) {
        
        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];
        

        this.edit = true;
        this.header = "Edit Evaluation Template"

        //make get request to EvaluationTemplates and set values of this.evaluation_template
        var evaluation_template = EvaluationTemplates.get(
            {id:$routeParams.evaluation_template_id});

        //execute the anonymous function provided to .then() only after evaluation_template
        //has been resolved (when the async EvaluationTemplates.get() returns information)
        evaluation_template.$promise.then(function(evaluation_template){
            this.evaluation_template = {
                evaluation_template_id: evaluation_template.id,
                name: evaluation_template.name,
                school_class_id: evaluation_template.school_class_id,
                rating_type_id: evaluation_template.rating_type_id
            }
        }.bind(this))

        this.rating_types = RatingTypes.query();

        this.editTemplate = function(evaluation_template){

            //TODO: refactor this --why arent we able to set $scope.school_class_id at page load time?
            evaluation_template.school_class_id = $routeParams.class_id

            EvaluationTemplates.update({id:$routeParams.evaluation_template_id},
                {"evaluation_template":evaluation_template}, function(res){
                console.log("success");
                $location.path("/class/" + $routeParams.class_id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        }

        this.deleteTemplate = function(evaluation_template){

            if(confirm("Are you sure you would like to delete this Evaluation Template?")){
                EvaluationTemplates.delete({id:$routeParams.evaluation_template_id}, function(res){
                    $location.path("/class/" + $routeParams.class_id);   
                },function(err){
                    alert("You cannot delete this Evaluation Template.\n" + 
                        "Evaluations using this Template have already been recorded");
                });
            }
        }
       
    }
})();