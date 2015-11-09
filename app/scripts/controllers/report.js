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

        //get reporting parameters from 
        this.class_id = params['class_id']
        this.time_period = params['time_period']

        var report_data = Classes.report({id:this.class_id, time_period:this.time_period});

        this.evaluation_templates = [];
        this.student_records = [];


        report_data.$promise.then(function(report_data){
            
            console.log("report data returned");
            console.log(report_data)
        
            this.evaluation_templates = report_data['evaluation_templates'];
            this.student_records = report_data['student_records']

            console.log(this.evaluation_templates)
            console.log(this.student_records)

        }.bind(this));
    }
})();