(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EvaluationTemplates', EvaluationTemplatesFactory);

    function EvaluationTemplatesFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/evaluation_templates/:id', {}, 
        {'update': {method: 'PUT'}});
    };
})();