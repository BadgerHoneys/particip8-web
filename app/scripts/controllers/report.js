(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('ReportController', ['Classes', '$http', '$cookies', ReportController]);

    function ReportController(Classes, $http, $cookies) {

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")

    }
})();