(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PrelimSignupController', ['EmailVerification', '$location', PrelimSignupController]);

    function PrelimSignupController(EmailVerification, $location) {

    	this.email = "";

    	this.verifyEmail = function(){
    		console.log(this.email);

    		EmailVerification.generate_token({email:this.email}, function(res){
                console.log("success");                

	    		// TODO: The generate_token endpoint will not normally return the
	    		// token. This must be refactored once emailing works.
                $location.path("/create_account/" + res['token']);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });

    	}
    }
})();