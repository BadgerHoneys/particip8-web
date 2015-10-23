(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Users', UsersFactory);

    function UsersFactory($resource) {
        return $resource('http://localhost:3000/users/:id/authenticate', {}, 
        { authenticate: {method:'POST'}});
    };
})();