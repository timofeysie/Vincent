(function(){
  'use strict';

  angular.module('paintings')
         .service('paintingService', ['$q', '$http', PaintingService]);

  /**
   * Paintings DataService
   * Uses Theo/Ebor as a data source.
   * remote data service call(s).
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PaintingService($q, $http) {

    // Promise-based API
    return {
      setLoading : function () {
        //console.log('start loading'); // set the loading image opcity
        var imageElement = angular.element(document.getElementById('main-image'));
        imageElement.css("opacity", "0.0");
        imageElement.css("filter", "alpha(opacity=00)");
      },
      loadGame : function() {
        var deferred = $q.defer();
        var paintings = [];
        var url = 'https://ebor-timofeysie.c9.io/play';
        $http.get(url, {
            cache: false,
          }).success(function(data) {
            console.log('loadGame:data', data);
            deferred.resolve(data);
          }).error(function() {
            console.log('error');
            deferred.reject();
          });
          return deferred.promise;
      },
      loadAllPaintings : function() {
        var deferred = $q.defer();
        var paintings = [];
        var url = 'https://ebor-timofeysie.c9.io/vincent';
        $http.get(url, {
            cache: true,
          }).success(function(data) {
            //console.log('success:data',data);
            deferred.resolve(data);
          }).error(function() {
            console.log('error');
            deferred.reject();
          });
          return deferred.promise;
      },
      loadPainters : function() {
        var deferred = $q.defer();
        var paintings = [];
        var url = 'https://ebor-timofeysie.c9.io/post-impressionists';
        $http.get(url, {
            cache: true,
          }).success(function(data) {
            //console.log('success:data',data);
            deferred.resolve(data);
          }).error(function() {
            console.log('error');
            deferred.reject();
          });
          return deferred.promise;
      },
      loadPainter : function(firstname) {
        var deferred = $q.defer();
        var paintings = [];
        var url = 'https://ebor-timofeysie.c9.io/post-impressionist/'+firstname;
        $http.get(url, {
            cache: true,
          }).success(function(data) {
            //console.log('success:data',data);
            deferred.resolve(data);
          }).error(function() {
            console.log('error');
            deferred.reject();
          });
          return deferred.promise;
      }
    };
  }

})();
