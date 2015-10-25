'use strict';

/**
 * @ngdoc overview
 * @name particip8WebApp
 * @description
 * # particip8WebApp
 *
 * Main module of the application.
 */
angular
  .module('particip8WebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/classes',{
        templateUrl: '/app/views/classes.html',
        controller: 'ClassesCtrl',
        controllerAs: 'classes'
      })
      .when('/class/:class_id/evaluation_template', {
        templateUrl: 'app/views/evaluation_template.html',
        controller: 'EvaluationTemplateCtrl',
        controllerAs: 'evaluation_template'
      })      
      .when('/class/:id', {
        templateUrl: 'app/views/class.html',
        controller: 'ClassCtrl',
        controllerAs: 'class'
      })
      .when('/edit_evaluation/:class_id/:eval_id', {
        templateUrl: 'app/views/edit_evaluation.html',
        controller: 'EditEvaluationCtrl',
        controllerAs: 'edit_evaluation'
      })
      .when('/about', {
        templateUrl: '/app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/register_school', {
        templateUrl: 'app/views/register_school.html',
        controller: 'RegisterSchoolCtrl',
        controllerAs: 'register_school'
      })
      .when('/help', {
        templateUrl: 'app/views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'help'
      })
      .when('/manage_class/', {
        templateUrl: 'app/views/manage_class.html',
        controller: 'ManageClassCtrl',
        controllerAs: 'manage_class'
      })
      .when('/report', {
        templateUrl: 'app/views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.defaults.useXDomain = true;
      // change this when authentication is added (below)
      $httpProvider.defaults.withCredentials = false;                       // change this later!!!!!!!!!!!!
      // change this when authentication is added (above)
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    });