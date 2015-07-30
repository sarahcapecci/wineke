var winekeWeb = angular.module('winekeWeb', ['ngRoute']);

winekeWeb.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    var directory = "../";
    $routeProvider
    // route for the home page

    .when('/home', {
        templateUrl : 'home.html',
        controller  : 'MainController',
        addThis: 'full'
    })

    // .when('/main', {
    //     templateUrl : 'pages/main.html'
    // })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        addThis: 'hidden'
    })

    // route for the energy-healing page
    .when('/energy-healing', {
        templateUrl : 'pages/energy.html',
        addThis: 'hidden'
    })

    // route for the modalities page
    .when('/modalities', {
        templateUrl : 'pages/modalities.html',
        addThis: 'hidden'
        // controller  : 'modalitiesController'
    })

    // route for the services page
    .when('/services', {
        templateUrl : 'pages/services.html',
        addThis: 'hidden',
        title: 'Services'

    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller : 'ContactController',
        addThis: 'hidden'
    });

    // otherwise({
    //     redirectTo: '/wineke.html'
    //   });

    $locationProvider.html5Mode(true);
}]);


winekeWeb.controller('MainController', ['$scope', function($scope){
   

}]);

winekeWeb.controller('ContactController', ['$route', function($scope, $http){
    $scope.formData = {};
      // submission message doesn't show when page loads
      $scope.submission = false;
      $scope.submitForm = function() {
        $http({
        method : 'POST',
        url : 'process.php',
        data : $.param($scope.formData), // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
      })
        .success(function(data) {
          if (!data.success) {
           // if not successful, bind errors to error variables
           $scope.errorName = data.errors.name;
           $scope.errorEmail = data.errors.email;
           $scope.errorTextarea = data.errors.message;
           $scope.submissionMessage = data.messageError;
           $scope.submission = true; //shows the error message
          } else {
          // if successful, bind success message to message
           $scope.submissionMessage = data.messageSuccess;
           $scope.formData = {}; // form fields are emptied with this line
           $scope.submission = true; //shows the sucess message
          }
         });
       };
}]);


