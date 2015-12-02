(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddClassController', ['Classes', '$location', '$routeParams', AddClassController]);

    function AddClassController(Classes, $location, $routeParams) {

        this.edit = true;
        this.header = "New Class";

        this.school_class = {
            name: "",
            days: "",
            start_time: "",
            end_time: "",
            teacher_id: 0,
            school_id: $routeParams.school_id
        }

        $scope.timePickerOptions = {
            step: 10,
            timeFormat: 'g:ia',
            appendTo: 'body',
            asMoment: true
        };

        this.createClass = function(school_class) {
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