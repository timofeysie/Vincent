(function(){
  angular.module('paintings')
       .controller('PaintingController', [
          'paintingService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          PaintingController
       ]);
  /**
   * Main Controller for the Vincent App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PaintingController(paintingService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.selected     = null;
    self.painterView = false;
    self.paintings        = [ ];
    self.selectPainting   = selectPainting;
    self.toggleList   = togglePaintingsList;
    self.share        = share;
    self.loadPainter   = loadPainter;
    self.selectPainters   = selectPainters;
    // Loading all painters
    paintingService
          .loadPainters()
          .then( function(paintings) {
            self.paintings = [].concat(paintings);
            console.log('paintings '+paintings.length);
            self.selected = paintings[0];
          });
          
    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function togglePaintingsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);
      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectPainting ( painting ) {
      self.selected = angular.isNumber(painting) ? $scope.paintings[painting] : painting;
      self.toggleList();
    }

    /**
    * Load an artist and all the thumbnails & data of their paintings.
    */
    function loadPainter($event) {
      // TODO: Implement lazy loading for a painters painting thumbs
      var artist = self.selected;
      console.log('artists selected: '+artist.title);
      var sections = artist.title.split(' ');
      var firstname = sections[0].toLowerCase();
      paintingService
          .loadPainter(firstname)
          .then( function(paintings) {
            self.paintings = [].concat(paintings);
            console.log('paintings '+paintings.length);
            self.selected = paintings[0];
            self.painterView = true;
          });
    }

    function selectPainters($event) {
      console.log('back to painters');
      paintingService
          .loadPainters()
          .then( function(paintings) {
            self.paintings = [].concat(paintings);
            console.log('paintings '+paintings.length);
            self.selected = paintings[0];
            self.painterView = false;
          });
    }

    /**
     * Show the bottom sheet
     */
    function share($event) {
        var painting = self.selected;

        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: '/src/paintings/view/contactSheet.html',
          controller: [ '$mdBottomSheet', PaintingSheetController],
          controllerAs: "vm",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function PaintingSheetController( $mdBottomSheet ) {
          this.painting = painting;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.performAction = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
