(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HomeCtrl', ['$scope', '$location', 'Classes', function ($scope, $location, Classes) {
            $scope.classes = [];

            //get all classes from Classes resource and format response using Array.map method
            Classes.query(function(data){

                $scope.classes = data.map(function(obj){
                    return {
                        id: obj.id,
                        name: obj.name,
                        days: "MWF (UPDATE THIS)",
                        start_time: obj.start_time,
                        end_time: obj.end_time 
                    }
                })

                //ZACK: uncomment these to see the differences in the response data and what was formatted 
                //console.log(data)
                //console.log($scope.classes);
            });

            $scope.manageClass = function(classroom)
            {
                $location.path('/class/' + classroom.id);
            }
        }]);
})();