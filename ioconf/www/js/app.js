angular.module('conference', ['ionic', 'openfb', 'conference.sessions', 'conference.speakers', 'conference.profiles'])

    .run(function ($ionicPlatform, $window, FB_APP_ID, OpenFB) {

        OpenFB.init(FB_APP_ID,
            /* https://developers.facebook.com/apps advanced settings 
               의 Valid OAuth redirect URI 에 아래 주소를 작성해야 한다.
            */
            'https://www.facebook.com/connect/login_success.html',
            // 'http://localhost:5000/oauthcallback.html',
        $window.sessionStorage);

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/sessions');
    })

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, OpenFB) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        },

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Login', $scope.loginData);
            alert("Only the Facebook login is implemented in this sample app.");
            $scope.closeLogin();
        };

        $scope.fbLogin = function () {
            OpenFB.login('email,read_stream').then(
                function () {
                    $scope.closeLogin();
                    $location.path('/app/sessions');
                },
                function () {
                    alert('OpenFB login failed');
                });
        }
    });
