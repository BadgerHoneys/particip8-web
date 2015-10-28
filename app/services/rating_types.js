(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('RatingTypes', RatingTypesFactory);

    function RatingTypesFactory($resource) {
        return $resource('http://localhost:3000/rating_types/:id', {}, {});
    };
})();