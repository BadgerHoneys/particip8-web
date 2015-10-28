(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('RatingTypes', RatingTypesFactory);

    function RatingTypesFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/rating_types/:id', {}, {});
    };
})();