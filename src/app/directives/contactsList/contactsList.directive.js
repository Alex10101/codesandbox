export default function contactList() {
  return {
    restrict: "E",
    scope: {
      users: "=",
      showPhones: "=",
      orderByName: "="
    },
    template: require("./contactsList.directive.html"),
    styles: require("./contactsList.directive.scss"),
    link: function($scope, element, attrs) {
      console.log(arguments)

      $scope.updateUser = function(user, name, phone) {
        $scope.users[$scope.users.indexOf(user)] = { name, phone };
        updateStorage();
      };

      $scope.deleteUser = function(user) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        updateStorage();
      };

      function updateStorage() {
        localStorage.setItem("users", JSON.stringify({ data: $scope.users }));
      }
    }
  };
}
