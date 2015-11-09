(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Students', ['$resource', 'base_url', StudentsFactory]);

    function StudentsFactory($resource, base_url) {
        return $resource(base_url + '/students/:id', {}, { 
        	query: {method:'GET', isArray:true}
        });
    };
})();