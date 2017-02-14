
myApp.factory('authenticateUserFactory', AuthenticationService);

function AuthenticationService() {

    var authenticationService = {
        //keep adding method functions here
        authenticateUser: authenticateUser
    };

    var authenticUsers = [['test', 'test']];

    function authenticateUser(username, password) {
        //$http call to authenticate user
        return true;
    }
    ;

    return authenticationService;
}


