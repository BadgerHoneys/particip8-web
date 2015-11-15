(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('PrelimResetController', [
            'EmailVerification',
            '$location',
            PrelimResetController
        ]);

    function PrelimResetController(EmailVerification, $location) {

    	this.email = "";

        this.passwordResetEmail = function(){
            console.log("Reset email sent!");
        }

/*
    	this.passwordResetEmail = function(){
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
*/

    }
})();