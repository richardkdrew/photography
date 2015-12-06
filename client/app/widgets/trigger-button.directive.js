(function () {
  'use strict';
  angular
    .module('app.widgets')
    .directive('triggerButton', triggerButton);

  function triggerButton() {
    return {
      restrict: 'A',
      scope: {
        event: '@',
        location: '@'
      },
      link: link
    };
    function link(scope, element) {

      element.on('click', triggerButtonClick);
      scope.$on('destroy', cleanUp);

      function triggerButtonClick() {
        scope.$emit(scope.event, { target: scope.location });
      }

      function cleanUp() {
        element.off('click', triggerButtonClick);
      }
    }
  }
}());
