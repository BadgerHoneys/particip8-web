(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateSchoolController', ['Schools', '$location', CreateSchoolController]);

    function CreateSchoolController(Schools, $location) {

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