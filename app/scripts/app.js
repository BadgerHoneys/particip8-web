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
  .config(function ($routeProvider) {
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
      .when('/class/:id', {
        templateUrl: 'app/views/class.html',
        controller: 'ClassCtrl',
        controllerAs: 'class'
      })
      .when('/manage_class/', {
        templateUrl: 'app/views/manage_class.html',
        controller: 'ManageClassCtrl',
        controllerAs: 'manage_class'
      })
      .when('/new_evaluation/:class_id', {
        templateUrl: 'app/views/new_evaluation.html',
        controller: 'NewEvaluationCtrl',
        controllerAs: 'new_evaluation'
      })
      .when('/edit_evaluation/:class_id/:eval_id', {
        templateUrl: 'app/views/edit_evaluation.html',
        controller: 'EditEvaluationCtrl',
        controllerAs: 'edit_evaluation'
      })
      .when('/report', {
        templateUrl: 'app/views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
