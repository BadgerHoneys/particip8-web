(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassesCtrl', ['$scope', '$location', '$cookies', '$http', 'Classes', function ($scope, $location, $cookies, $http, Classes) {
            $scope.classes = [];

            console.log("test");

            var teacher_id = $cookies.get("teacher_id");


            // TODO: remove this and globalize it
            $http.defaults.headers.common['token_id'] = $cookies.get("token_id");

            // get all classes from Classes resource and format response using Array.map method
            Classes.query(function(data){
                // This needs to be refactored with a new service URL
                var teacher_data = [];
                for( var i = 0; i < data.length; i++ ){
                    // TODO: Change the teacher_id == 2 to check the session cookies for teacher_id
                    if( data[i].teacher_id == 2) {
                        teacher_data.push(data[i]);

                    }
                }
                
                $scope.classes = teacher_data.map(function(obj){

                    var start_date = new Date(obj.start_time);
                    var end_date = new Date(obj.end_time);

                    var start_hours = start_date.getHours();
                    if ((start_hours / 12) > 0 ) {
                        start_hours = (parseInt(start_hours) % 12) + "pm";
                    } else {
                        start_hours += "am";
                    }

                    var end_hours = end_date.getHours();
                    if ((end_hours / 12) > 0 ) {
                        end_hours = (parseInt(end_hours) % 12) + "pm";
                    } else {
                        end_hours += "am";
                    }

                    return {
                        id: obj.id,
                        name: obj.name,
                        days: "MWF", // UPDATE THIS
                        start_time: start_hours, // TRANSLATE THIS TO A READABLE TIME
                        end_time: end_hours,  // TRANSLATE THIS TO A READABLE TIME
                        student_count: 20// need to set up the student_count
                    }

                }) 
                // console.log(teacher_data)
                // console.log($scope.classes);
 
            });

            $scope.manageClass = function(classroom)
            {
                $location.path('/class/' + classroom.id);
            }

            $scope.addClass = function()
            {
                $location.path('/manage_class/');
            }
        }]);
})();