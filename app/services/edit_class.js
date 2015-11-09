(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EditClass', ['$resource', 'base_url', EditClassFactory]);

    function EditClassFactory($resource, base_url) {
        return $resource(base_url + '/school_classes/:id', 
        	{id: '@id'},
        	{ 
        		put: {
        			method:'PUT',
                    isArray: true
                }
        	});
    };
})();