(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HomeController', ['$scope', '$location', 'Classes', function ($scope, $location, Classes) {
            $scope.classes = [];

            Classes.query(function(data){

                console.log(data);

            });


            $scope.manageClass = function(classroom)
            {
                $location.path('/class/' + classroom.id);
            }
        }]);
})();