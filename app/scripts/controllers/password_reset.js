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

        var vm = this;

        var user = PasswordReset.get({id: $routeParams.id})
        user.$promise.then(function(user){
            vm.user = user;
            //if the user object was not returned, reroute to the main page
        });

        vm.resetPassword = function(){
            var reset = PasswordReset.update({id: vm.user.id},
                {"user": vm.user});
            reset.$promise.then(function(user){
                $location.path('/');
            })
        };
    }
})();