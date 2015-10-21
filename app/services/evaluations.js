(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Evaluations', EvaluationsFactory);

    function EvaluationsFactory($resource) {
        return $resource('http://localhost:3000/evaluation_templates/:id', {}, 
        { query: {method:'GET',isArray:true}});
    };
})();