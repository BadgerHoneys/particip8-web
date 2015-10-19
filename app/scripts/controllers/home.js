(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HomeCtrl', ['$scope', '$location', 'Classes', function ($scope, $location, Classes) {
            $scope.classes = [];

            //get all classes from Classes resource and format response using Array.map method
            Classes.query(function(data){

                // This is currently broken
                //
                // $scope.classes = data.map(function(obj){
                //     return {
                //         id: obj.id,
                //         name: obj.name,
                //         days: "MWF (UPDATE THIS)",
                //         start_time: obj.start_time,
                //         end_time: obj.end_time 
                //     }
                // })

                //ZACK: uncomment these to see the differences in the response data and what was formatted 
                //console.log(data)
                //console.log($scope.classes);
 
            });

            // mock data
            $scope.classes = [
            {
                id: 1,
                name: "History",
                days: "MWF",
                start_time: "10am",
                end_time: "11am",
                student_count: 21
            },
            {
                id: 2,
                name: "Math",
                days: "TR",
                start_time: "1pm",
                end_time: "3pm",
                student_count: 23
            },
            {
                id: 3,
                name: "Science",
                days: "MTWRF",
                start_time: "11am",
                end_time: "1pm",
                student_count: 14
            }];

            $scope.manageClass = function(classroom)
            {
                $location.path('/class/' + classroom.id);
            }

            $scope.addClass = function()
            {
                $location.path('/new_class/');
            }
        }]);
})();