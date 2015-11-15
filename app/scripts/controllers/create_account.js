(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('CreateAccountController', ['EmailVerification', '$routeParams', '$location', CreateAccountController]);

    function CreateAccountController(EmailVerification, $routeParams, $location) {
    	console.log($routeParams.token);

    	var response = EmailVerification.verify_token({token:$routeParams.token});

    	response.$promise.then(function(response){
    		console.log(response);

    		// TODO: This .status is not correct
    		if(response.status > 299 ){
    			$location.path("/");
    		}


    		this.email = response['email'];
    	}.bind(this))

    	// TODO: set up submission function
    }
})();