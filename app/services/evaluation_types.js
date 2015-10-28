(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('EvaluationTypes', EvaluationTypesFactory);

    function EvaluationTypesFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/evaluation_types/:id', {}, {});
    };
})();