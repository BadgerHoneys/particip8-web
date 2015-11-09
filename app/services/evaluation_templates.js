(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EvaluationTemplates', ['$resource', 'base_url', EvaluationTemplatesFactory]);

    function EvaluationTemplatesFactory($resource, base_url) {
        return $resource(base_url + '/evaluation_templates/:id', {id: '@id'}, 
        {'update': {method: 'PUT'}});
    };
})();