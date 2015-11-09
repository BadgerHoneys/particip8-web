(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('RatingTypes', ['$resource', 'base_url', RatingTypesFactory]);

    function RatingTypesFactory($resource, base_url) {
        return $resource(base_url + '/rating_types/:id', {}, {});
    };
})();