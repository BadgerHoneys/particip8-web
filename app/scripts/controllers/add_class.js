(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddClassController', ['Classes', 'Schools', '$location', '$scope', '$cookies', '$http', '$routeParams', AddClassController]);

    function AddClassController(Classes, Schools, $location, $scope, $cookies, $http, $routeParams) {

        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token");

        console.log($routeParams.id);
        
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
            school_id: $routeParams.id
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
            if(this.start_ampm == "pm"){
                this.start_hour += 12;
            }

            if(this.end_ampm = "pm"){
                this.end_hour += 12;
            }

            school_class.start_time = new Date("2015-03-25T" + this.start_hour + ":" + this.start_min + ":00");
            school_class.end_time = new Date("2015-03-25T" + this.end_hour + ":" + this.end_min + ":00");
            school_class.school_id = $routeParams.id;

            Classes.save({"school_class":school_class}, function(res){
                console.log("success");
                $location.path("/school/" + $routeParams.id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        }.bind(this);
    }
})();