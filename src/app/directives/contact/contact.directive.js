export default function contacts() {
  return {
    // restrict: "E",
    scope: {
      user: "=",
      // index: "="
    },
    replace: true,
    transclude:true,
    template: require("./contact.directive.html"),
    styles: [require("./contact.directive.scss")],
    link: function($scope, element, attrs) {
      console.log($scope)

      // $scope.updateUser = function(user, name, phone) {
      //   $scope.users[$scope.users.indexOf(user)] = { name, phone };
      //   updateStorage();
      // };
      //
      // $scope.addUser = function(name, phone) {
      //   if (name && phone) {
      //     $scope.users.push({ name, phone });
      //     updateStorage();
      //   }
      // };
      //
      // $scope.deleteUser = function(user) {
      //   $scope.users.splice($scope.users.indexOf(user), 1);
      //   updateStorage();
      // };
      //
      // function updateStorage() {
      //   localStorage.setItem("users", JSON.stringify({ data: $scope.users }));
      // }
    }
  };
}
