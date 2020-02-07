export default [
  "contactsService",
  "filterService",
  function contactList(contactsService, filterService) {
    return {
      restrict: "E",
      scope: {
        showPhones: "=",
        orderByName: "="
      },
      template: require("./contactsList.directive.html"),
      styles: require("./contactsList.directive.scss"),
      link: function($scope, element, attrs) {
        $scope.service = contactsService;
        $scope.filterService = filterService;
      }
    };
  }
];
