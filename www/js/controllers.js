angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, $state, Chats, $ionicHistory) {
  $rootScope.goHome = function() {
    $state.go('home');
    $ionicHistory.clearHistory();
  };
  $scope.articles = Chats.all();
})

.controller('scanCtrl', function($scope, $state, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...',
      duration: 1000
    }).then(function(data){
      $state.go('info');
    });
  };
})

.controller('infoCtrl', function($scope) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
