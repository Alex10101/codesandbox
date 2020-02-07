export default [
  "filterService",
  function appFilter(filterService) {
    return {
      scope: {},
      template: require("./filter.directive.html"),
      link: function($scope, element, attrs) {
        $scope.filterService = filterService;
      }
    };
  }
];
