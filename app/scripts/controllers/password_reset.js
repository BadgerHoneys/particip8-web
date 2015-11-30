(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('PasswordResetController', [
            'PasswordReset',
            '$routeParams',
            '$location',
            PasswordResetController]);

    function PasswordResetController(PasswordReset, $routeParams, $location) {

        var user = PasswordReset.get({id: $routeParams.id})
        user.$promise.then(function(user){
            this.user = user;
            //if the user object was not returned, reroute to the main page
        }.bind(this));

        this.resetPassword = function(){
            var reset = PasswordReset.update({id: $routeParams.id},
                {"user": this.user});
            reset.$promise.then(function(user){
                $location.path('/');
            })
        }.bind(this);
    }
})();