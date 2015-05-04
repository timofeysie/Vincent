(function(){
  'use strict';

  angular.module('paintings')
         .service('paintingService', ['$q', '$http', PaintingService]);

  /**
   * Paintings DataService
   * Uses Theo as a data source.
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PaintingService($q, $http) {

    // Promise-based API
    return {
      loadAllPaintings : function() {
        var deferred = $q.defer();
        var paintings = [];
        var url = 'https://ebor-timofeysie.c9.io/post-impressionists';
        $http.get(url, {
            cache: true,
          }).success(function(data) {
            deferred.resolve(data);
          }).error(function() {
            deferred.reject();
          });
          return deferred.promise;
      }
    };
  }

})();
