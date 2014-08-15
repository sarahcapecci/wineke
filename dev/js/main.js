var winekeWeb = angular.module('winekeWeb', ['ngRoute']);

winekeWeb.config(['$routeProvider', function($routeProvider){
    var directory = "../../";
    $routeProvider
    // route for the home page

    .when('/home', {
        templateUrl : directory + 'home.html',
        controller  : 'MainController'
    })

    .when('/main', {
        templateUrl : directory + 'pages/main.html',
        controller  : 'MainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : directory + 'pages/about.html'
    })

    // route for the energy-healing page
    .when('/energy-healing', {
        templateUrl : directory + 'pages/energy.html'
    })

    // route for the modalities page
    .when('/modalities', {
        templateUrl : directory + 'pages/modalities.html'
        // controller  : 'modalitiesController'
    })

    // route for the services page
    .when('/services', {
        templateUrl : directory + 'pages/services.html',
        title: 'Services'

    })

    // route for the contact page
    .when('/contact', {
        templateUrl : directory + 'pages/contact.html',
        controller : 'ContactController'
    });

    // otherwise({
    //     redirectTo: '/wineke.html'
    //   });

    // $locationProvider.html5Mode(true);
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


