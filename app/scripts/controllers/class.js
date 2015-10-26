(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassCtrl', ['Classes', '$scope', '$location', '$cookies', '$http', '$routeParams', 
            ClassCtrl]);

    function ClassCtrl(Classes, $scope, $location, $cookies, $http, $routeParams){

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

        $scope.school_classes_id = $routeParams.id;

        $scope.class_name = "";
        $scope.evaluations_templates = [];
        $scope.students = [];

        //hit /school_classes/:id and get class, evaluation templates, and student information
        Classes.get({id: $scope.school_classes_id},function(res){
            $scope.name = res.name;
            $scope.evaluation_templates = res.evaluation_templates;
            console.log("evaluation template...");
            console.log($scope.evaluation_templates);

            $scope.students = res.students;
        }, function(err){
            console.log("The Classes/get request resulted in an error...");
            console.log(err);
        });

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
            var currentPath = $location.path();
            $location.path(currentPath + '/evaluation_template');
        }

        $scope.editEvaluation = function(evaluation) {
            var currentPath = $location.path();
            $location.path(currentPath + '/evaluation_template/' + evaluation.id);
        }
    }
})();