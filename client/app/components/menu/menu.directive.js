(function() {
  'use strict';

  angular
    .module('app.menu')
    .directive('menu', menu);

  function menu($document) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      link: link
    };

    function link(scope) {

      // Listen for the ToggleMenu event
      scope.$on('menu.toggle', toggleMenu);

      // Initialise the menu state
      //scope.menuState = !scope.menuState;

      // get the body element
      var body = $document.find('body');

      function toggleMenu() {

        /* Cross browser support for CSS "transition end" event */
        var transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

        scope.$apply(function(){

          body.addClass('animating');

          if(body.hasClass('menu-visible'))
          {
            console.log('Toggle Menu - Close!');
            body.addClass('right');
          }
          else {
            console.log('Toggle Menu - Open!');
            body.addClass('left');
          }

          body.on(transitionEnd, endTransition);

          function endTransition() {
            console.log('End Transition!!!');
            body.removeClass('animating left right');
            body.toggleClass('menu-visible');
            body.off(transitionEnd, endTransition);
          }
        });
      }
    }
  }
}());
