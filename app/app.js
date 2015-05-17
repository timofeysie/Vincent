angular
    .module('vincentApp', ['ngMaterial', 'ngRoute', 'paintings'])
    .config(function($mdThemingProvider, $mdIconProvider, $routeProvider) {
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg"          , 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');
        $routeProvider
            .when('/game', {
                // The guessing game
              templateUrl: 'src/paintings/GuessingTemplate.html'
            })
            .when('/painters', {
                // a list of painters
              templateUrl: 'src/paintings/PaintersTemplate.html'
            })
            .when('/browse/:painter', {
                // a list of paintings by a particular painter
              templateUrl: 'src/paintings/PaintingsTemplate.html'
            })
            .otherwise({
              redirectTo: '/game'
            });
});