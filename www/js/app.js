// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: false,
    templateUrl: 'templates/tabs.html'
  })

    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'DashCtrl'
  })
    .state('scan', {
    url: '/scan',
    templateUrl: 'templates/scanner.html',
    controller: 'scanCtrl'
  })
    .state('info', {
    url: '/info',
    abstract: false,
    templateUrl: 'templates/info.html',    
    controller: 'infoCtrl'
  })

  // Each tab has its own nav history stack:

  /*.state('info.article', {
    url: '/article',
    views: {
      'info-article': {
        templateUrl: 'templates/tab-article.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('info.videos', {
      url: '/videos',
      views: {
        'info-videos': {
          templateUrl: 'templates/info-videos.html',
          controller: 'videosCtrl'
        }
      }
    })
    .state('info.images', {
      url: '/images',
      views: {
        'info-images': {
          templateUrl: 'templates/chat-images.html',
          controller: 'imagesCtrl'
        }
      }
    })

  .state('info.comments', {
    url: '/comments',
    views: {
      'info-comments': {
        templateUrl: 'templates/info-comments.html',
        controller: 'commentsCtrl'
      }
    }
  })*/;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
