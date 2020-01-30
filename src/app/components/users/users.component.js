function usersController($scope, getUsersData) {
  getUsersData().then(function(users) {
    $scope.users = users;
    $scope.className = "red";
    // $scope.$watch("users", updateStorage); // why this works with "className" but dosen't with "users"?

    function updateStorage() {
      localStorage.setItem("users", JSON.stringify({ data: $scope.users }));
    }

    $scope.setColorByName = function(name) {
      if (name[0] === "A") return "red";
      if (name[0] === "B") return "blue";
    };

    $scope.updateUser = function(user, name, phone) {
      $scope.users[$scope.users.indexOf(user)] = { name, phone };
      updateStorage();
    };

    $scope.addUser = function(name, phone) {
      if (name && phone) {
        $scope.users.push({ name, phone });
        updateStorage();
      }
    };

    $scope.deleteUser = function(user) {
      $scope.users.splice($scope.users.indexOf(user), 1);
      updateStorage();
    };

    $scope.changeColor = function() {
      if ($scope.className === "red") {
        $scope.className = "blue";
      } else {
        $scope.className = "red";
      }
    };

    $scope.refreshStorage = function() {
      localStorage.clear();
      getUsersData().then(function(users) {
        $scope.users = users;
      });
    };
  });
}

export default {
  controller: usersController,
  template: require("./users.component.html"),
  styles: [require("./users.component.scss")]
};
