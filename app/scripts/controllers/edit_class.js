(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('EditClassController', ['Classes', '$location', '$routeParams', EditClassController]);

    function EditClassController(Classes, $location, $routeParams) {

        this.edit = true;
        this.header = "Edit Class";

        // TODO: get these values from class endpoint
        this.school_class = {
            name: "",
            days: "",
            start_time: "",
            end_time: "",
            teacher_id: 0,
            school_id: $routeParams.school_id
        }


        // TODO: update this function
        this.editClass = function(school_class) {
            Classes.save({"school_class":school_class}, function(res){
                console.log("success");
                $location.path("/school/" + $routeParams.school_id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        } 

        // TODO: update this function
        this.editClass = function(school_class) {
            Classes.save({"school_class":school_class}, function(res){
                console.log("success");
                $location.path("/school/" + $routeParams.school_id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        } 
    }
})();