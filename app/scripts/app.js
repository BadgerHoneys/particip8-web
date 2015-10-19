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
      .when('/home',{
        templateUrl: '/app/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
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
      .when('/new_class/', {
        templateUrl: 'app/views/new_class.html',
        controller: 'NewClassCtrl',
        controllerAs: 'new_class'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
