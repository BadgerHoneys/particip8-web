(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EvaluationTypes', EvaluationTypesFactory);

    function EvaluationTypesFactory($resource) {
        return $resource('http://localhost:3000/evaluation_types/:id', {}, {});
    };
})();