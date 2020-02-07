export default [
  "contactsService",
  "filterService",
  function contactList(contactsService, filterService) {
    return {
      replace:true,
      scope: {
        showPhones: "=",
        orderByName: "="
      },
      template: require("./contactsList.directive.html"),
      styles: require("./contactsList.directive.scss"),
      link: function($scope, element, attrs) {
        $scope.contactsService = contactsService;
        $scope.filterService = filterService;
      }
    };
  }
];
