(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['Classes', '$scope', '$location', '$routeParams', ClassCtrl]);

    function ClassCtrl(Classes, $scope, $location, $routeParams){

        $scope.school_classes_id = $routeParams.id;

        $scope.class_name = "test";
        $scope.evaluations_templates = [];
        $scope.students = [];

        console.log("School Classes Id: " + $scope.school_classes_id)




        //hit /school_classes/:id and get class, evaluation templates, and student information
        Classes.get({id: $scope.school_classes_id},function(res){
            console.log(res);

            $scope.name = res.name;

            console.log("setting this.evaluation_templates...");
            $scope.evaluation_templates = res.evaluation_templates;

            console.log("setting this.students...");
            $scope.students = res.students;

        }, function(err){
            console.log("A request resulted in an error...");
            console.log(err);
        });


        // get all classes from Classes resource and format response using Array.map method
    /*
        Evaluations.query(function(data){
            // This needs to be refactored with a new service URL
            var evals_data = [];
            for( var i = 0; i < data.length; i++ ){
                // TODO: Change the teacher_id == 2 to check the session cookies for teacher_id
                if( data[i].school_class_id == $scope.id) {
                    evals_data.push(data[i]);
                }
            }
            
            $scope.evaluations = evals_data.map(function(obj){

                // ask paul to add the ability to get a single rating type's scale
                var eval_scale = obj.rating_type_id;

                return {
                    id: obj.id,
                    name: obj.name,
                    scale: eval_scale
                }

            }) 
        });
    */


/*
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

*/

    }

})();