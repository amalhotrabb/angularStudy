angular.module('login', []).controller('loginController', loginController);

loginController.$inject = ['$location', 'authenticateUserFactory'];

function loginController($location, authenticateUserFactory) {
    var vm = this;

    //bindable objects at beginning of controller definition
    vm.authenticateUser = authenticateUser;

    function authenticateUser(credentials) 
    {
        //alert(credentials);
        authenticateUserFactory.authenticateUser(credentials.username, credentials.password);
        
        $location.path('/home');
    }
    ;
}