(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateAccountController', ['EmailVerification', '$routeParams', CreateAccountController]);

    function CreateAccountController(EmailVerification, $routeParams) {
    	console.log($routeParams.token);

    	var response = EmailVerification.verify_token({token:$routeParams.token});
    	if(response.status == 400){
    		$location.path("/");
    	} else if (response.status == 200){
    		// do stuff
    	} else {
    		
    	}

    }
})();