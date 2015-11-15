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
  // Change this based on environment
  .value("base_url","http://localhost:3000")
  //.value("base_url","http://ec2-52-23-157-29.compute-1.amazonaws.com")
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main_ctrl'
      })
      .when('/classes',{
        templateUrl: '/app/views/classes.html',
        controller: 'ClassesController',
        controllerAs: 'classes_ctrl'
      })
      .when('/class/:class_id/evaluation_template', {
        templateUrl: 'app/views/evaluation_template.html',
        controller: 'CreateEvaluationTemplateController',
        controllerAs: 'evaluation_template_ctrl'
      })
      .when('/class/:class_id/evaluation_template/:evaluation_template_id', {
        templateUrl: 'app/views/evaluation_template.html',
        controller: 'EditEvaluationTemplateController',
        controllerAs: 'evaluation_template_ctrl'
      })      
      .when('/class/:id', {
        templateUrl: 'app/views/class.html',
        controller: 'ClassController',
        controllerAs: 'class_ctrl'
      })
      .when('/about', {
        templateUrl: '/app/views/about.html',
        controller: 'AboutController',
        controllerAs: 'about_ctrl'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact_ctrl'
      })
      .when('/prelim_signup', {
        templateUrl: 'app/views/prelim_signup.html', 
        controller: 'PrelimSignupController',
        controllerAs: 'prelim_signup_ctrl'
      })
      .when('/help', {
        templateUrl: 'app/views/help.html',
        controller: 'HelpController',
        controllerAs: 'help_ctrl'
      })
      .when('/manage_class/', {
        templateUrl: 'app/views/manage_class.html',
        controller: 'ManageClassController',
        controllerAs: 'manage_class_ctrl'
      })
      .when('/report_selection', {
        templateUrl: 'app/views/report_selection.html',
        controller: 'ReportSelectionController',
        controllerAs: 'report_selection_ctrl'
      })
      .when('/report', {
        templateUrl: 'app/views/report.html',
        controller: 'ReportController',
        controllerAs: 'report_ctrl'
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