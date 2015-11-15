(function () {
    'use strict';


    angular
        .module('particip8WebApp')
        .controller('ReportSelectionController', ['Classes', '$http', '$cookies', '$location', ReportSelectionController]);

    function ReportSelectionController(Classes, $http, $cookies, $location) {

    	//get the classes for a particular teacher
    	var class_selections = Classes.query();
    	//the time selection options
    	this.time_period_selections = [
    		{description: "Day", short_name: "day"},
    		{description: "Week", short_name: "week"},
    		{description: "Month", short_name: "month"},
    		{description: "All", short_name: "all"}
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
    		$location.path('/report').search(
    			{
    				class_id: this.selections.class_id,
    				time_period: this.selections.time_period
    			});
    	}.bind(this);

    }
})();