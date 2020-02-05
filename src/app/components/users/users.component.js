function usersController($scope, userService) {
  // userService.getUsers().then(function(users) {
    $scope.users = userService.users

    function updateStorage() {
      localStorage.setItem("users", JSON.stringify({ data: $scope.users }));
    }

    $scope.addUser = function(name, phone) {
      userService.addUser()
      console.log(userService.users)
      // if (name && phone) {
      //   $scope.users.push({ name, phone });
      //   updateStorage();
      // }
    };

    $scope.refreshStorage = function() {
      localStorage.clear();
      userService.getUsers().then(function(users) {
        $scope.users = users;
      });
    };
  // });
}

export default {
  controller: usersController,
  template: require("./users.component.html"),
  styles: [require("./users.component.scss")]
};
