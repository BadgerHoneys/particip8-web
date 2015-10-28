(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EditClass', EditClassFactory);

    function EditClassFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/school_classes/:id', 
        	{id: '@id'},
        	{ 
        		put: {
        			method:'PUT',
                    isArray: true
                }
        	});
    };
})();