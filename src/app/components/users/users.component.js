function usersController($scope, usersService) {
  $scope.users = usersService.users;
  $scope.updateUser = usersService.updateUser
  $scope.addUser = usersService.addUser
  $scope.deleteUser = usersService.deleteUser
  $scope.refreshStorage = usersService.refreshStorage

  $scope.className = "red";

  $scope.setColorByName = function(name) {
    if (name[0] === "A") return "red";
    if (name[0] === "B") return "blue";
  };

  $scope.changeColor = function() {
    if ($scope.className === "red") {
      $scope.className = "blue";
    } else {
      $scope.className = "red";
    }
  };
}

export default {
  controller: usersController,
  template: require("./users.component.html"),
  styles: [require("./users.component.scss")]
};
