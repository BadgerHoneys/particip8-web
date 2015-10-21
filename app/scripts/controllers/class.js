(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['$scope', '$location', '$routeParams', 'Evaluations', 'Students', function ($scope, $location, $routeParams, Evaluations, Students) {

            $scope.id = $routeParams.id;


            // fill these from class's service request
            $scope.name = 'History';



            $scope.evaluations = [];

            // get all classes from Classes resource and format response using Array.map method
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

            $scope.students = [];

            // get all classes from Classes resource and format response using Array.map method
            Students.query(function(data){
                $scope.students = data.map(function(obj){
                    return {
                        id: obj.id,
                        name: obj.name,
                        email: obj.email
                    }

                }) 
            });

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