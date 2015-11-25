(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('AdminAccount', ['$resource', 'base_url', AdminAccountFactory]);

    function AdminAccountFactory($resource, base_url) {

        return $resource(base_url + '/school_admins', {}, 
        {
        	create: {
        		url: base_url + '/school_admin/create',
        		method:'POST'
            }
    	});
    };
})();