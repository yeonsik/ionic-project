angular.module('conference.profiles', ['conference.config'])

    .config(function ($stateProvider, FB_APP_ID, OpenFB) {

        $stateProvider

            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            });
    })

    .controller('ProfileCtrl', function ($scope, OpenFB) {
        OpenFB.get('/me').success(function (user) {
            $scope.user = user;
        })
        .error(function(data) {
                alert(data.error.message);
            });
    });