app.controller('MainController', function($scope, AuthService, $state){
    
    $scope.isLoggedIn = true;
    
    $scope.login = function(){
        AuthService.login();
        $scope.isLoggedIn = true;
    }
    
    $scope.logout = function(){
        AuthService.logout();
        $scope.isLoggedIn = false;
        $state.go('home');
    }
    
    
})

app.controller('HomeController', function($scope){
    $scope.test = "Hello are you there";
})

app.service('AuthService', function(){
    this.loggedIn = true;
    this.login = function(){
        this.loggedIn = true;
    }
    this.logout = function(){
        this.loggedIn = false;
    }
})