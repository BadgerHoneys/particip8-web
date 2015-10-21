(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('EditEvaluationCtrl', ['$scope', '$location', '$routeParams', 'Evaluations', 'DeleteEvaluations', function ($scope, $location, $routeParams, Evaluations, DeleteEvaluations) {
            $scope.class_id = $routeParams.class_id;
            $scope.eval_id = $routeParams.eval_id;
            // maybe get the class from this routeParam.id so that we can display the class's name

            $scope.eval = {};

            // get just 1 evaluation here based on ID



            Evaluations.query(function(data){
                for( var i = 0; i < data.length; i++ ){
                    if( data[i].id == $scope.eval_id) {
                        var eval_scale = data[i].rating_type_id;

                        $scope.eval.name = data[i].name;
                        $scope.eval.scale = eval_scale;
                    }
                }
            });

            // take the form and do shit with it
            $scope.submitEvaluation = function(evaluation) {
                // build out the array from the evaluation template's form

                var updated_eval = angular.copy(evaluation);
                updated_eval.id = $scope.eval_id;

                // PUT the updated evaluation template

                $location.path('/class/' + $scope.class_id);
            }

            $scope.deleteEvaluation = function() {
                // delete the eval based on $scope.eval_id

                DeleteEvaluations.delete_eval({}, {id: $scope.eval_id})

                $location.path('/class/' + $scope.class_id);
            }
        }]);
})();