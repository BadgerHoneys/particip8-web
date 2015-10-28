(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Students', StudentsFactory);

    function StudentsFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com/students/:id', {}, { 
        	query: {method:'GET', isArray:true}
        });
    };
})();