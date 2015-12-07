(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddTeacherController', ['EmailVerification', '$location', '$routeParams', '$cookies', '$http', AddTeacherController]);

    function AddTeacherController(EmailVerification, $location, $routeParams, $cookies, $http) {

        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token");

        this.teacher = {
            first_name: "",
            last_name: "",
            email: "",
            school_id: $routeParams.id,
            type: "Teacher"
        }

        this.createTeacher = function(teacher) {
            EmailVerification.save({"user":teacher}, function(res){
                console.log(res['email_verification_token']);
                $location.path("/school/" + $routeParams.id);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        }
    }
})();