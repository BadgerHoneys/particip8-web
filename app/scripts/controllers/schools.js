(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('SchoolsController', ['Schools', '$location', '$cookies', '$http', SchoolsController]);

    function SchoolsController(Schools, $location, $cookies, $http) {

        this.schools = [];

        Schools.query(function(school_data){
            this.schools = school_data.map(function(obj){
                return {
                    id: obj.id,
                    name: obj.name,
                    students: obj.students,
                    teachers: obj.teachers,
                    classes: obj.school_classes
                }
            })
        }.bind(this));

        this.manageSchool = function(school)
        {
            $location.path('/school/' + school.id);
        }

        this.addSchool = function()
        {
            $location.path('/create_school');
        }
    }
})();