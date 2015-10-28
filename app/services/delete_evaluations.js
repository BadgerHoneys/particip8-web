(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('DeleteEvaluations', DeleteEvaluationsFactory);

    function DeleteEvaluationsFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/evaluation_templates/:id', 
        	{id: '@id'},
        	{ 
        		delete_eval: {
        			method:'DELETE'
        	}
        });
    };
})();