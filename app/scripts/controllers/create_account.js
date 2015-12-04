(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('CreateAccountController', [
            'EmailVerification',
            'AdminAccount',
            '$http',
            '$cookies',
            '$routeParams',
            '$location',
            CreateAccountController
        ]);

    function CreateAccountController(EmailVerification,AdminAccount, $http, $cookies, $routeParams, $location) {
        
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token");
        

        //make a GET to EmailVerification, providing the token
        //found in $routeParams.id as the id

        var vm = this;

        var user = EmailVerification.get({id: $routeParams.id});
        user.$promise.then(function(user){
            console.log("promise invoked....user:");
            console.log(user);
            vm.user = user;
        });

        vm.submitAccount = function(){
            console.log("performing validation here");

            console.log(vm.user);

            EmailVerification.update(
                {id: vm.user.id},
                {"user": vm.user},
                function(res){
                    console.log("update response: ");
                    console.log(res);
                }
            );
        }

/*
    	var response = EmailVerification.verify_token({token:$routeParams.token});

    	response.$promise.then(function(response){
    		console.log(response);

    		// TODO: This .status is not correct
    		if(response.status > 299 ){
    			$location.path("/");
    		}

    		this.email = response['email'];

            // TODO: Create the district here
            // GET the ID from the district


            AdminAccount.create({
                email: this.email,
                district_id: this.district_id,
                password: password
                // add other attributes here.
            })
    	}.bind(this))

    	// TODO: set up submission function
*/
    }
})();