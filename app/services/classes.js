(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Classes', ClassesFactory);

    function ClassesFactory($resource) {
        return $resource('http://localhost:3000/school_classes/:id', {id: '@id'}, 
        {
        	available: {
        		url: 'http://localhost:3000/school_classes/available',
        		method:'GET',
        		isArray: true
            },
            remove_teacher: {
                url: 'http://localhost:3000/school_classes/:id/remove_teacher',
                method:'PATCH'
            },
            set_teacher: {
                url: 'http://localhost:3000/school_classes/:id/set_teacher',
                method:'PATCH'
            },
            report: {
                url: 'http://localhost:3000/school_classes/:id/reports',
                method:'POST'
            }
    	});
    };
})();