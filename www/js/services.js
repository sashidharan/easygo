angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Bristol',
    url: 'scan',
    style: 'bristol',
    siteId: 568577,
    img: 'img/bristol.png'
  }, {
    id: 1,
    name: 'Notting Ham',
    url: 'info',
    style: 'hulldaily',
    siteId: 568577,
    img: 'img/nottingham.png'
  }, {
    id: 2,
    name: 'Hull Daily Mail',
    url: 'info',
    style: 'nottingham',
    siteId: 568577,
    img: 'img/hulldaily.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('AjaxMethod',  ['$http', function($http) {
    var urlBase = 'https://api.localworld.co.uk/articles/%SITE_ID%/detail/%ARTICLE_ID%';
    return {
        callmethod:function(){
            alert('haide');
        },
        getMethod:function (parameter) {
            urlBase = 
            try {
                $http.get(urlBase)
                .success(function (response) {
                    return response;
                })
                .error(function(err) {
                    console.log(err);
                });
            } catch(e) {
                console.log(e);
            }
        },
        postMethod:function (parameter) {
            try {
                $http.post(urlBase, parameter)
                .success(function (response) {
                    return response;
                })
                .error(function(err) {
                    console.log(err);
                });
            } catch(e) {
                console.log(e);
            }
        }
    };
}]);
;
