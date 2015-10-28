(function() {
    'use strict';

    angular
        .module('particip8WebApp')
        .factory('Classes', ClassesFactory);

    function ClassesFactory($resource) {
        return $resource('http://ec2-52-23-157-29.compute-1.amazonaws.com//school_classes/:id', {}, 
        { query: {method:'GET',isArray:true}});
    };
})();