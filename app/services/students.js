(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Students', StudentsFactory);

    function StudentsFactory($resource) {
        return $resource('http://localhost:3000/students/:id', {}, { 
        	query: {method:'GET', isArray:true}
        });
    };
})();