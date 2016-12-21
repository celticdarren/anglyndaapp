myApp.controller('RegistrationController',['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

    var ref = firebase.database().ref();
    // download the data into a local object
    var auth = $firebaseAuth();
        
    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email;
    }; // Login
    
    $scope.register = function() {
        auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
        .then(function(regUser) {
            $scope.message = "Hi " + $scope.user.firstname + ", Thanks for registering";
        }).catch(function(error) {
            $scope.message = error.message; 
        }); // Create user
    }; // Register
}]); // Controller