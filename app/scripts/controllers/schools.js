(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('SchoolsController', ['$location', '$cookies', '$http', SchoolsController]);

    function SchoolsController($location, $cookies, $http) {

        this.schools = [];

        // TODO: Schools resource doesn't yet exist.

        // get all schools from Schools resource and format response using Array.map method
        // Schools.query(function(admin_data){

        //     //assign schools list to controller
        //     this.schools = admin_data.map(function(obj){

        //         //return massaged school element
        //         return {
        //             id: obj.id,
        //             name: obj.name,
        //             students: obj.students,
        //             teachers: obj.teachers,
        //             classes: obj.classes
        //         }
        //     })
        // }.bind(this));

        this.manageSchool = function(school)
        {
            $location.path('/school/' + school.id);
        }

        this.addClass = function()
        {
            $location.path('/create_school/');
        }
    }
})();