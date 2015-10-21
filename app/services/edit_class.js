(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EditClass', EditClassFactory);

    function EditClassFactory($resource) {
        return $resource('http://localhost:3000/school_classes/:id', 
        	{id: '@id'},
        	{ 
        		put: {
        			method:'PUT',
                    isArray: true
                }
        	});
    };
})();