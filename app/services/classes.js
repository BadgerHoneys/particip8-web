(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Classes', ClassesFactory);

    function ClassesFactory($resource) {
        return $resource('http://localhost:3000/school_classes/:id', {}, 
        { query: {method:'GET',isArray:true}});
    };
})();