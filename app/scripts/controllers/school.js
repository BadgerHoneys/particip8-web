(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('SchoolController', ['Schools', '$location', '$cookies', '$http', '$routeParams',
        SchoolController]);

    function SchoolController(Schools, $location, $cookies, $http, $routeParams) {
        
        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];
        
        this.School = Schools.get({id: $routeParams.id});

        this.School.$promise.then(function(School){
            this.name = School.name;
            this.teachers = School.teachers;
            this.school_classes = School.school_classes;
        }.bind(this));


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