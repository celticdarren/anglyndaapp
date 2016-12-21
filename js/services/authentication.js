myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', function($rootScope, $firebaseAuth, FIREBASE_URL) {
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();
    
    return {
        login: function(user) {
            $rootScope.message = "Welcome " + $rootScope.user.email;
        }, // login
        register: function(user) {

            auth.$createUserWithEmailAndPassword(user.email, user.password)
            .then(function(regUser) {
                var regRef = firebase.database().ref('users')
                .child(regUser.uid).set({
                    date: firebase.database.ServerValue.TIMESTAMP,
                    regUser: regUser.uid,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                });//user info

                $rootScope.message = "Hi " + user.firstname + ", Thanks for registering";
            }).catch(function(error) {
                $rootScope.message = error.message; 
            }); // Create user
        } // register
    }
}]); // factory