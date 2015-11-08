(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('ManageClassController', ['EditClass', 'Classes', '$http', '$cookies', '$location',
            '$routeParams', ManageClassController]); 
    
    function ManageClassController(EditClass, Classes, $http, $cookies, $location, $routeParams) {

        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

        var teacher_id = $routeParams.id;

        this.school_classes = [];

        var my_classes = Classes.query();
        var available_classes = Classes.available();

        my_classes.$promise.then(function(my_classes){
            this.my_classes = my_classes.map(function(obj){
                return {
                    id: obj.id,
                    school_id: obj.school_id,
                    teacher_id: obj.teacher_id,
                    start_time: obj.start_time,
                    end_time: obj.end_time,
                    name: obj.name
                }
            })
        }.bind(this))

        available_classes.$promise.then(function(available_classes){
            this.available_classes = available_classes.map(function(obj){
                return {
                    id: obj.id,
                    school_id: obj.school_id,
                    teacher_id: obj.teacher_id,
                    start_time: obj.start_time,
                    end_time: obj.end_time,
                    name: obj.name
                }
            })
        }.bind(this))


        this.removeTeacher = function(classroom) {
            Classes.remove_teacher(
                {id:classroom.id });

            var index = this.my_classes.indexOf(classroom);
            if (index > -1) {
                this.my_classes.splice(index, 1);
            }

            this.available_classes.push(classroom);

        	$location.path('/manage_class/');
        }.bind(this)


        this.setTeacher = function(classroom) {
            console.log(classroom)
            Classes.set_teacher(
                {id:classroom.id});

            var index = this.available_classes.indexOf(classroom);
            if (index > -1){
                this.available_classes.splice(index, 1);
            }

            this.my_classes.push(classroom);

            $location.path('/manage_class/');
        }.bind(this)


        this.submitChanges = function() {
        	$location.path('/home/');
        }.bind(this)


    }
})();