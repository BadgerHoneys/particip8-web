(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('AddClassController', ['$location', AddClassController]);

    function AddClassController($location) {
    	// console.log($routeParams.token);

    	// var response = EmailVerification.verify_token({token:$routeParams.token});

    	// response.$promise.then(function(response){
    	// 	console.log(response);

    	// 	// TODO: This .status is not correct
    	// 	if(response.status > 299 ){
    	// 		$location.path("/");
    	// 	}

    	// 	this.email = response['email'];

     //        // TODO: Create the district here
     //        // GET the ID from the district


     //        AdminAccount.create({
     //            email: this.email,
     //            district_id: this.district_id,
     //            password: password
     //            // add other attributes here.
     //        })
    	// }.bind(this))

    	// TODO: set up submission function
    }
})();