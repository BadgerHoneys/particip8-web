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
    'ngTouch',
  ])
  // Change this based on environment
  .value("base_url","http://localhost:3000")
  //.value("base_url","http://ec2-52-23-157-29.compute-1.amazonaws.com")
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/classes',{
        templateUrl: '/app/views/classes.html',
        controller: 'ClassesController',
        controllerAs: 'classes_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/class/:class_id/evaluation_template', {
        templateUrl: 'app/views/evaluation_template.html',
        controller: 'CreateEvaluationTemplateController',
        controllerAs: 'evaluation_template_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/class/:class_id/evaluation_template/:evaluation_template_id', {
        templateUrl: 'app/views/evaluation_template.html',
        controller: 'EditEvaluationTemplateController',
        controllerAs: 'evaluation_template_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })      
      .when('/class/:id', {
        templateUrl: 'app/views/class.html',
        controller: 'ClassController',
        controllerAs: 'class_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/schools', {
        templateUrl: 'app/views/schools.html',
        controller: 'SchoolsController',
        controllerAs: 'schools_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/school/:id', {
        templateUrl: 'app/views/school.html',
        controller: 'SchoolController',
        controllerAs: 'school_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/create_school', {
        templateUrl: 'app/views/create_school.html',
        controller: 'CreateSchoolController',
        controllerAs: 'create_school_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/school/:id/add_teacher', {
        templateUrl: 'app/views/add_teacher.html',
        controller: 'AddTeacherController',
        controllerAs: 'add_teacher_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/school/:id/add_class', {
        templateUrl: 'app/views/edit_class.html',
        controller: 'AddClassController',
        controllerAs: 'edit_class_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/edit_class/:class_id', {
        templateUrl: 'app/views/edit_class.html',
        controller: 'EditClassController',
        controllerAs: 'edit_class_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/about', {
        templateUrl: '/app/views/about.html',
        controller: 'AboutController',
        controllerAs: 'about_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/prelim_signup', {
        templateUrl: 'app/views/prelim_signup.html', 
        controller: 'PrelimSignupController',
        controllerAs: 'prelim_signup_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/password_reset', {
        templateUrl: 'app/views/prelim_reset.html',
        controller: 'PrelimResetController',
        controllerAs: 'prelim_reset_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/help', {
        templateUrl: 'app/views/help.html',
        controller: 'HelpController',
        controllerAs: 'help_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/manage_class/', {
        templateUrl: 'app/views/manage_class.html',
        controller: 'ManageClassController',
        controllerAs: 'manage_class_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/report_selection', {
        templateUrl: 'app/views/report_selection.html',
        controller: 'ReportSelectionController',
        controllerAs: 'report_selection_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/report', {
        templateUrl: 'app/views/report.html',
        controller: 'ReportController',
        controllerAs: 'report_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/create_account/:id', {
        templateUrl: 'app/views/create_account.html',
        controller: 'CreateAccountController',
        controllerAs: 'create_account_ctrl',
        resolve: {
          'Session': SessionResolver
        }
      })
      .when('/reset_password/:id', {
        templateUrl: 'app/views/password_reset.html',
        controller: 'PasswordResetController',
        controllerAs: 'password_reset_ctrl',
        resolve: {
          'Session': SessionResolver
        }
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

function SessionResolver($controller){
  var AuthController = $controller('AuthController');
  return AuthController.verify().promise();
}
