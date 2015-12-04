(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PrelimSignupController', ['EmailVerification', '$http', '$location', PrelimSignupController]);

    function PrelimSignupController(EmailVerification, $http, $location) {
    	this.email = "";
        this.district_name = "";

    	this.verifyEmail = function(){

    		EmailVerification.save({"user":{
                email:this.email,
                district_name: this.district_name,
                type:"Admin"
            }}, function(res){
                console.log("success");                

	    		// TODO: The generate_token endpoint will not normally return the
	    		// token. This must be refactored once emailing works.
                $location.path("/create_account/" + res['email_verification_token']);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });
    	}
    }
})();