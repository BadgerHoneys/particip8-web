(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ManageClassCtrl', ['$scope', '$location', '$routeParams', 'EditClass', 'Classes', function ($scope, $location, $routeParams, EditClass, Classes) {
            var teacher_id = $routeParams.id;

            $scope.my_classes = [];
            $scope.all_classes = [];

            // TODO: Change this to only get classes related to this teacher's school
            Classes.query(function(data){
                var my_class_data = [];
                var all_class_data = [];

                for( var i = 0; i < data.length; i++ ){
                    // TODO: Change the teacher_id == 2 to check the session cookies for teacher_id
                    if( data[i].teacher_id == 2) {
                        my_class_data.push(data[i]);
                    } else {        // TODO: Also change this to be data[i].teacher_id == null when that is enabled.
                        all_class_data.push(data[i]);
                    }
                }
                
                $scope.my_classes = my_class_data.map(function(obj){
                    return {
                        id: obj.id,
                        school_id: obj.school_id,
                        teacher_id: obj.teacher_id,
                        start_time: obj.start_time,
                        end_time: obj.end_time,
                        name: obj.name
                    }

                })

                $scope.all_classes = all_class_data.map(function(obj){
                    return {
                        id: obj.id,
                        school_id: obj.school_id,
                        teacher_id: obj.teacher_id,
                        start_time: obj.start_time,
                        end_time: obj.end_time,
                        name: obj.name
                    }

                }) 
            });


            $scope.removeClass = function(classroom) {
                EditClass.put({}, {
                    "school_class": { 
                        school_id:  [classroom.school_id.toString()],
                        teacher_id: ["null"],
                        name:       [classroom.name],
                        start_time: [classroom.start_time],
                        end_time:   [classroom.end_time]
                    },
                    id: classroom.id
                })

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

            $scope.addClass = function(classroom) {
                EditClass.put({}, {
                    "school_class": {
                        school_id:  [classroom.school_id.toString()],
                        teacher_id: [teacher_id],
                        name:       [classroom.name],
                        start_time: [classroom.start_time],
                        end_time:   [classroom.end_time]
                    },
                    id: classroom.id
                })

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