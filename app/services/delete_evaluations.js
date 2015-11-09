(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('DeleteEvaluations', ['$resource', 'base_url', DeleteEvaluationsFactory]);

    function DeleteEvaluationsFactory($resource, base_url) {
        return $resource(base_url + '/evaluation_templates/:id', 
        	{id: '@id'},
        	{ 
        		delete_eval: {
        			method:'DELETE'
        	}
        });
    };
})();