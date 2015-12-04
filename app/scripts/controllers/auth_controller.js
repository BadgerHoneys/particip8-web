(function () {
    'use strict';

    angular
        .module('particip8WebApp')
        .controller('AuthController', [
            '$q',
            'Session',
            'Authentication',
            AuthController
        ]);

    function AuthController($q, Session, Authentication) {

        this.session = Session;
        this.verify = verify;
        this.logout = logout;

        function verify(email, password){

            var deferred = $q.defer();

            //if the user object already exists on the
            //session, resolve the invocation
            if(Session.user){
                deferred.resolve(Session);
            }else{

                console.log("verify email: " + email);
                console.log("verify password: " + password);

                console.log("making a request out to the authentication service");

            }


        }



    }
});
