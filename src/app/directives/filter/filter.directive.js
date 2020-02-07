export default [
  "filterService",
  function appFilter(filterService) {
    return {
      scope: {},
      template: require("./filter.directive.html"),
      styles: [require("./filter.directive.scss")],
      link: function($scope, element, attrs) {
        $scope.filterService = filterService;
      }
    };
  }
];
