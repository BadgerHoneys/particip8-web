(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddTeacherController', ['TeacherVerification', '$location', '$routeParams', '$cookies', '$http', AddTeacherController]);

    function AddTeacherController(TeacherVerification, $location, $routeParams, $cookies, $http) {

        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token");

        this.teacher = {
            first_name: "",
            last_name: "",
            email: "",
            school_id: $routeParams.id
        }

        this.createTeacher = function(teacher) {
            TeacherVerification.save(this.teacher, function(res){
                console.log("success");
                $location.path("/school/" + $routeParams.id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        }.bind(this);
    }
})();