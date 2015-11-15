(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateAccountController', ['EmailVerification', '$routeParams', '$location', CreateAccountController]);

    function CreateAccountController(EmailVerification, $routeParams, $location) {
    	console.log($routeParams.token);

    	var response = EmailVerification.verify_token({token:$routeParams.token});

    	console.log(response);

    	if(response.status > 299 ){
    		$location.path("/");
    	} else if (response.status == 200){
    		// do stuff
    	} else {

    	}

    }
})();