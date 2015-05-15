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
    self.game = true;
    self.paintings = [ ];
    self.painters = [ ];
    self.choices  = [ ];
    self.selectPainting   = selectPainting;
    self.toggleList   = togglePaintingsList;
    self.share        = share;
    self.loadPainter   = loadPainter;
    self.selectPainters   = selectPainters;
    self.selectAnswer = selectAnswer;
    self.loadGame = loadGame;
    self.resetScore = resetScore;
    self.answer = false;
    self.guessed = false;
    self.score = 0;
    self.sessionCount = 0;
    self.state = 'Play';
      
    // Loading all painters
    paintingService
          .loadGame()
          .then( function(paintings) {
            self.paintings = [].concat(paintings);
            self.paintings = paintings[0]; // the list of artists
            self.painter  = paintings[1]; // the correct artist
            self.selected = paintings[2]; // to be shown
            //console.log(self.paintings);
            self.painterView = false;
            self.game = true;
            self.answer = false;
            self.guessed = false;
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
     * Select the current painting
     * @param menuId
     */
    function selectPainting (painting) {
      self.selected = angular.isNumber(painting) ? $scope.paintings[painting] : painting;
      self.toggleList();
      self.game = false;
    }

    /**
     * Select an answer.  If the artist painter.title matches the painting title in
     the argument, then it is a correct answer.  But only increment the score and count
     if the answer has not already been chosen.
     If the answer is incorrect, the player should only be able to choose it once.
     * @param menuId
     */
    function selectAnswer(painter) {
      console.log('answer: '+painter);
      if (painter.title === self.painter.title && self.answer != true) {
        console.log('correct!');
        self.score++;
        self.answer = true;
        painter.right = true; // change the style of the name
        self.sessionCount++;
        self.state = 'Next';
      } else if (painter.wrong != true && self.state != 'Next') {
        self.guessed = true;
        painter.wrong = true; // change the style of the name
        self.sessionCount++;
        self.state = 'Guess';
      }
    }

    /**
    * Load an game with list of all painters, the painter chose, and 
    * the painting chosen.
    */
    function loadGame($event) {
      paintingService
          .loadGame()
          .then(function(paintings) {
            paintingService.setLoading(true);
            self.paintings = paintings[0]; // the list of artists
            self.painter  = paintings[1]; // the correct artist
            self.selected = paintings[2]; // to be shown
            console.log('loadGame called');
            self.painterView = false;
            self.game = true;
            self.answer = false;
            self.guessed = false;
            self.state = 'Guess';
          });
    }
    
    function resetScore() {
      self.sessionCount = 0;
      self.score = 0;
      self.state = 'Start';
    }

    /**
    * Load an artist and all the thumbnails & data of their paintings.
    */
    function loadPainter($event) {
      // TODO: Implement lazy loading for a painters painting thumbs
      var artist = self.selected;
      console.log('artists selected: '+artist.title);
      var sections = artist.title.split(' ');
      var firstname = sections[sections.length-1].toLowerCase();
      paintingService
          .loadPainter(firstname)
          .then( function(paintings) {
            self.paintings = [].concat(paintings);
            console.log('paintings '+paintings.length+' '+firstname);
            self.selected = paintings[0];
            self.painterView = true;
            self.game = false;
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
            self.game = false;
          });
    }

    /**
     * Show the bottom sheet
     */
    function share($event) {
        var painting = self.selected;
        console.log('share');
        $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: './src/paintings/view/contactSheet.html',
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
