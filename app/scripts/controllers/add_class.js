(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddClassController', ['Classes', 'Schools', '$location', '$scope', '$routeParams', AddClassController]);

    function AddClassController(Classes, Schools, $location, $scope, $routeParams) {

        this.edit = false;
        this.header = "New Class";

        this.start_hour = "";
        this.start_min = "";
        this.start_ampm = "";
        this.end_hour = "";
        this.end_min = "";
        this.end_ampm = "";

        this.school_class = {
            name: "",
            days: "",
            start_time: "",
            end_time: "",
            teacher_id: 0,
            school_id: $routeParams.school_id
        }

        this.teachers = Schools.teachers({id: $routeParams.id});

        this.teachers.$promise.then(function(response){
            response.forEach(function(teacher){
                teacher.full_name = teacher.first_name + " " + teacher.last_name
            });
            response;
        });

        this.createClass = function(school_class) {
            // build out the 2 time objects here
            if(start_ampm == "pm"){
                start_hour += 12;
            }

            if (end_ampm = "pm"){
                end_hour += 12;
            }

            school_class.start_time = new Date("2015-03-25T" + start_hour + ":" + start_min + ":00");
            school_class.end_time = new Date("2015-03-25T" + end_hour + ":" + end_min + ":00");

            Classes.save({"school_class":school_class}, function(res){
                console.log("success");
                $location.path("/school/" + $routeParams.id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        } 
    }
})();