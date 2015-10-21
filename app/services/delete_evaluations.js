(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('DeleteEvaluations', DeleteEvaluationsFactory);

    function DeleteEvaluationsFactory($resource) {
        return $resource('http://localhost:3000/evaluation_templates/:id', 
        	{id: '@id'},
        	{ 
        		delete_eval: {
        			method:'DELETE'
        	}
        });
    };
})();