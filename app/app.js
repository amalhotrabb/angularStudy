// App Module: the name AngularStore matches the ng-app attribute
// in the main <html> tag. The route provides parses the URL and
// injects the appropriate partial page
//localStorage.setItem("isUserLoggedIn", false);
var myApp = angular.module('myApp', ['ngRoute', 'login', 'home', 'splash'])
        //  .factory('testInterceptor', testInterceptor)
        .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//                $httpProvider.interceptors.push('testInterceptor');
                $routeProvider.
                        when('/', {
                            templateUrl: 'splash/splash.html',
                            controller: 'splashController',
                            controllerAs: 'splashPage'}).
                        when('/login', {
                            templateUrl: 'login/login.html',
                            controller: 'loginController',
                            controllerAs: 'login'}).
                        when('/home', {
                            templateUrl: 'home/home.html',
                            controller: 'homeController'
                            , controllerAs: 'home'})
                        .otherwise({
                            redirectTo: '/'
                        });
            }]);

myApp.directive('header', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/assets/header/header.html";

    return directive;
});

myApp.directive('footer', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/assets/footer/footer.html";

    return directive;
});

