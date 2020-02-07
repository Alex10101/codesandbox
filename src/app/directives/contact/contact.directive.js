export default [
  "contactsService",
  function contacts(contactsService) {
    return {
      replace: true,
      scope: {
        user: "=",
        showPhones: "="
      },
      template: require("./contact.directive.html"),
      link: function($scope, element, attrs) {
        $scope.contactsService = contactsService;
      }
    };
  }
];
