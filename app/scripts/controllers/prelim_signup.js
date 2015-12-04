(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PrelimSignupController', ['AdminVerification', '$http', '$location', PrelimSignupController]);

    function PrelimSignupController(AdminVerification, $http, $location) {
    	this.email = "";
        this.district_name = "";

    	this.verifyEmail = function(){

    		AdminVerification.save({
                email:this.email,
                district_name: this.district_name
            }, function(res){
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