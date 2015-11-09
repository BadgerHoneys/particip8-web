(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Classes', ['$resource', 'base_url', ClassesFactory]);

    function ClassesFactory($resource, base_url) {
        
        console.log("test");
        console.log(base_url);

        return $resource(base_url + '/school_classes/:id', {id: '@id'}, 
        {
        	available: {
        		url: base_url + '/school_classes/available',
        		method:'GET',
        		isArray: true
            },
            remove_teacher: {
                url: base_url + '/school_classes/:id/remove_teacher',
                method:'PATCH'
            },
            set_teacher: {
                url: base_url + '/school_classes/:id/set_teacher',
                method:'PATCH'
            },
            report: {
                url: base_url + '/school_classes/:id/reports',
                method:'POST'
            }
    	});
    };
})();