(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ClassesCtrl', ['$scope', '$location', '$cookies', '$http', 'Classes',
            function ($scope, $location, $cookies, $http, Classes) {
            
            //TODO: Find out how to globalize this
            //replicate this across all controllers
            $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

            $scope.classes = [];

            // get all classes from Classes resource and format response using Array.map method
            Classes.query(function(teacher_data){

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