(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EvaluationTemplates', EvaluationTemplatesFactory);

    function EvaluationTemplatesFactory($resource) {
        return $resource('http://localhost:3000/evaluation_templates/:id', {}, {
        	'update': {method: 'PUT'}
        });
    };
})();