function usersController($scope, getUsersData) {
  getUsersData().then(function() {
    $scope.users = JSON.parse(localStorage.getItem("users")).data;
    $scope.className = "red";
    // $scope.$watch("users", updateStorage); // why this works with "className" but dosen't with "users"?

    function updateStorage() {
      localStorage.setItem("users", JSON.stringify({ data: $scope.users }));
    }

    $scope.setColorByName = function(name) {
      if (name[0] === "A") return "red";
      if (name[0] === "B") return "blue";
    };

    $scope.updateUser = function($index, name, phone) {
      $scope.users[$index] = { name, phone };
      updateStorage();
    };

    $scope.addUser = function(name, phone) {
      if (name && phone) {
        $scope.users.push({ name, phone });
        updateStorage();
      }
    };

    $scope.deleteUser = function($index) {
      $scope.users.splice($index, 1);
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
      getUsersData().then(function() {
        $scope.users = JSON.parse(localStorage.getItem("users")).data;
      });
    };
  });
}

export default {
  controller: usersController,
  template: require("./users.component.html"),
  styles: [require("./users.component.scss")]
};
