var winekeWeb = angular.module('winekeWeb', ['ngRoute']);

winekeWeb.config(['$routeProvider', function($routeProvider){
    var directory = "../../";
    $routeProvider

    // route for the home page
    .when('/home', {
        templateUrl : directory + 'wineke.html',
        controller  : 'mainController'
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
        templateUrl : directory + 'pages/services.html'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : directory + 'pages/contact.html',
        controller  : 'contactController'
    });

    // otherwise({
    //     redirectTo: '/wineke.html'
    //   });

    // $locationProvider.html5Mode(true);
}]);

winekeWeb.controller('mainController', function($scope){

});

winekeWeb.controller('contactController', function($scope){

});

