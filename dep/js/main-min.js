var winekeWeb=angular.module("winekeWeb",["ngRoute"]);winekeWeb.config(["$routeProvider","$locationProvider",function(a,b){a.when("/home",{templateUrl:"home.html",controller:"MainController",addThis:"full"}).when("/about",{templateUrl:"pages/about.html",addThis:"hidden"}).when("/energy-healing",{templateUrl:"pages/energy.html",addThis:"hidden"}).when("/modalities",{templateUrl:"pages/modalities.html",addThis:"hidden"}).when("/services",{templateUrl:"pages/services.html",addThis:"hidden",title:"Services"}).when("/contact",{templateUrl:"pages/contact.html",controller:"ContactController",addThis:"hidden"}),b.html5Mode(!0)}]),winekeWeb.controller("MainController",["$scope",function(){}]),winekeWeb.controller("ContactController",["$route",function(a,b){a.formData={},a.submission=!1,a.submitForm=function(){b({method:"POST",url:"process.php",data:$.param(a.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(b){b.success?(a.submissionMessage=b.messageSuccess,a.formData={},a.submission=!0):(a.errorName=b.errors.name,a.errorEmail=b.errors.email,a.errorTextarea=b.errors.message,a.submissionMessage=b.messageError,a.submission=!0)})}}]);