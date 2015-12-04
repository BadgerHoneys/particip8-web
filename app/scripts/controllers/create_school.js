(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateSchoolController', ['Schools', '$http', '$location', CreateSchoolController]);

    function CreateSchoolController(Schools, $http, $location) {

        $http.defaults.headers.common["Auth-Token"] = res["auth_token"];        

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