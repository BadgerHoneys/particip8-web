(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('ReportSelectionController', ['Classes', '$http', '$cookies', ReportSelectionController]);

    function ReportSelectionController(Classes, $http, $cookies) {

        //TODO: Find out how to globalize this
        //replicate this across all controllers
        $http.defaults.headers.common["Auth-Token"] = $cookies.get("auth_token")


    	//define the selections model on the template
    	this.selection={
    		class_id: "",
    		time_period: ""
    	}


    	//get the classes for a particular teacher
    	var class_selections = Classes.query();
    	//the time selection options
    	this.time_period_selections = [
    		{description: "Day", short_name: "day"},
    		{description: "Week", short_name: "week"},
    		{description: "Month", short_name: "month"},
    		{description: "Test", short_name: "all"}
    	]

    	class_selections.$promise.then(function(class_selections){
    		this.class_selections = class_selections.map(function(obj){
    			return{
    				id: obj.id,
    				name: obj.name
    			}
    		})
    	}.bind(this));

    	this.submit = function(){
    		console.log("submit clicked");
    	}

    }
})();