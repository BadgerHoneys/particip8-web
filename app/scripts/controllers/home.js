(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {


            $scope.classes = [
                {
                    id: 1,
                    name: "Math",
                    days: "TR",
                    times: "1pm-3pm"
                },
                {
                    id: 2,
                    name: "Science",
                    days: "MTWRF",
                    times: "11am-1pm"
                }
            ];

            $scope.manageClass = function(classroom)
            {
                $location.path('/class/' + classroom.id);
            }
        }]);
})();