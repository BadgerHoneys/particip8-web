(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('ReportController', ['Classes', '$http', '$cookies', '$location', ReportController]);

    function ReportController(Classes, $http, $cookies, $location) {

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")


        var params = $location.search();
        console.log(params)

        this.class_id = params['class_id']
        this.time_period = params['time_period']

        console.log("class_id: " + this.class_id)
        console.log("time period: " + this.time_period)

        Classes.report({id:this.class_id, time_period:this.time_period});
    }
})();