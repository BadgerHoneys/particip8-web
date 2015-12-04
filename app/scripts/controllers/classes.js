(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('ClassesController', ['Classes', '$location', '$cookies', '$http', ClassesController]);

    function ClassesController(Classes, $location, $cookies, $http) {
        
        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];
        

        this.classes = [];

        // get all classes from Classes resource and format response using Array.map method
        Classes.query(function(teacher_data){

            //assign classes list to controller
            this.classes = teacher_data.map(function(obj){

                var start_date = new Date(obj.start_time);
                var end_date = new Date(obj.end_time);

                //format start date
                var start_hours = start_date.getHours();
                if ((start_hours / 12) > 0 ) {
                    start_hours = (parseInt(start_hours) % 12) + "pm";
                } else {
                    start_hours += "am";
                }

                //format end date
                var end_hours = end_date.getHours();
                if ((end_hours / 12) > 0 ) {
                    end_hours = (parseInt(end_hours) % 12) + "pm";
                } else {
                    end_hours += "am";
                }

                //return massaged class element
                return {
                    id: obj.id,
                    name: obj.name,
                    days: "MWF", // UPDATE THIS
                    start_time: start_hours, // TRANSLATE THIS TO A READABLE TIME
                    end_time: end_hours,  // TRANSLATE THIS TO A READABLE TIME
                    student_count: 20// need to set up the student_count
                }
            })
        }.bind(this));

        this.manageClass = function(classroom)
        {
            console.log(classroom);
            $location.path('/class/' + classroom.id);
        }

        this.addClass = function()
        {
            $location.path('/manage_class/');
        }
    }
})();