(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('SchoolController', ['$location', '$cookies', '$http', '$routeParams',
        SchoolController]);

    function SchoolController($location, $cookies, $http, $routeParams) {
        // this.school_classes_id = $routeParams.id;

        // this.class_name = "";
        // this.evaluations_templates = [];
        // this.students = [];

        // //hit /school_classes/:id and get class, evaluation templates, and student information
        // this.Class = Classes.get({id: this.school_classes_id});

        // this.Class.$promise.then(function(Class){
        //     this.name = Class.name;
        //     this.evaluation_templates = Class.evaluation_templates;

        //     console.log("Evaluation Template...");
        //     console.log(this.evaluation_templates);

        //     this.students = Class.students;

        // }.bind(this));


        // this.makeReport = function() {
        //     // add a service request to a domain level function
        //     // create an excel sheet or something?
        // }

        // this.newEvaluation = function() {
        //     // how does it know which class these should be related to?
        //     // probably through cookies or something
        //     var currentPath = $location.path();
        //     $location.path(currentPath + '/evaluation_template');
        // }

        // this.editEvaluation = function(evaluation) {
        //     var currentPath = $location.path();
        //     $location.path(currentPath + '/evaluation_template/' + evaluation.id);
        // }
    }
})();