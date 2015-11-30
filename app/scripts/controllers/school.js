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

        this.makeTeacher = function() {
            var currentPath = $location.path();
            $location.path(currentPath + '/add_teacher');
        }

        this.editTeacher = function(teacher) {
            var currentPath = $location.path();
            $location.path(currentPath + '/edit_teacher/' + teacher.id);
        }

        this.makeClass = function() {
            var currentPath = $location.path();
            $location.path(currentPath + '/add_class');
        }

        this.editClass = function(school_class) {
            var currentPath = $location.path();
            $location.path(currentPath + '/edit_class/' + school_class.id);
        }
    }
})();