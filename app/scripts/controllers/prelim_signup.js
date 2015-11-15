(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PrelimSignupController', ['EmailVerification', '$location', PrelimSignupController]);

    function PrelimSignupController(EmailVerification, $location) {

    	this.email = "";

    	this.verifyEmail = function(){

    		// TODO: The generate_token endpoint will not normally return the
    		// token. This must be refactored once emailing works.
    		console.log(this.email);

    		var response = EmailVerification.generate_token({email:this.email}, function(res){
                console.log("success");
                $location.path("/create_account/" + res['token']);
            }, function(err){
                console.log("A request resulted in an error...");
                console.log(err);
            });



    		// response.$promise.then(function(response){
    		// 	console.log(response);
    		// 	token = response['token'];

    		// 	$location.path("/create_account/" + token);
    		// })

    		// get the token from this call, and then redirect to /create_account/token
    	}
    }
})();