(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('SchoolController', ['$location', '$cookies', '$http', '$routeParams',
        SchoolController]);

    function SchoolController($location, $cookies, $http, $routeParams) {
        // TODO: Get all of the classes for this school

        
        // TODO: Get all of the teachers for this school

        this.newTeacher = function() {
            var currentPath = $location.path();
            $location.path(currentPath + '/add_teacher');
        }

        this.editTeacher = function(teacher) {
            var currentPath = $location.path();
            $location.path(currentPath + '/edit_teacher/' + teacher.id);
        }

        this.newClass = function() {
            var currentPath = $location.path();
            $location.path(currentPath + '/add_class');
        }

        this.editClass = function(school_class) {
            var currentPath = $location.path();
            $location.path(currentPath + '/edit_class/' + school_class.id);
        }
    }
})();