(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ManageClassCtrl', ['$scope', '$location', 'Classes', function ($scope, $location, Classes) {
            // mock data
            $scope.my_classes = [
            {
                id: 1,
                name: "History"
            },
            {
                id: 2,
                name: "Math"
            },
            {
                id: 3,
                name: "Science"
            }];

            $scope.all_classes = [
            {
            	id: 4,
            	name: "Economics"
            },
            {
            	id: 5,
            	name: "Comp Sci"
            }]

            $scope.removeClass = function(classroom, teacher) {
            	// remove the link between this teacher and given classroom
            	// with a service request

            	// Get the index of our class, to remove it from the array
            	var index = $scope.my_classes.indexOf(classroom);
            	if (index > -1) {
            		$scope.my_classes.splice(index, 1);
            	}

            	// Add the class back to the all_classes list
            	$scope.all_classes.push(classroom);

            	// Update the view
            	$location.path('/manage_class/');
            }

            $scope.addClass = function(classroom, teacher) {
            	// add the link between the teacher and classroom
            	// with a service request

            	// Get the index of the class to remove it from the all class list
            	var index = $scope.all_classes.indexOf(classroom);
            	if (index > -1) {
            		$scope.all_classes.splice(index, 1);
            	}

            	// Add the class to the teacher's list
            	$scope.my_classes.push(classroom);

            	// Update the view
            	$location.path('/manage_class/');
            }

            $scope.submitChanges = function() {
            	$location.path('/home/');
            }


        }]);
})();