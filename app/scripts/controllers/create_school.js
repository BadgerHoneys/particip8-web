(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateSchoolController', ['Schools', '$http', '$cookies', '$location', CreateSchoolController]);

    function CreateSchoolController(Schools, $http, $cookies, $location) {

        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token");        

        this.new_school = {
            "name": "",
            "district_id": 0
        }

        this.createSchool = function(new_school) {
            Schools.save({"school":new_school}, function(res){
                console.log("success");
                $location.path("/schools");
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
        } 
    }
})();