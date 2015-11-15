(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PrelimSignupController', ['EmailVerification', PrelimSignupController]);

    function PrelimSignupController(EmailVerification) {

    	this.email = "";

    	this.verifyEmail = function(){

    		// TODO: The generate_token endpoint will not normally return the
    		// token. This must be refactored once emailing works.
    		var token = EmailVerification.generate_token({email:this.email})
    		$location.path("/create_account/" + token);
    		// get the token from this call, and then redirect to /create_account/token
    	}
    }
})();