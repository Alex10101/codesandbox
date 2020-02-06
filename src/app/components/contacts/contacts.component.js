function usersController($scope, contactsService) {
  $scope.users = contactsService.users;
  $scope.updateUser = contactsService.updateUser
  $scope.addUser = contactsService.addUser
  $scope.deleteUser = contactsService.deleteUser
  $scope.refreshStorage = contactsService.refreshStorage

  $scope.setColorByName = function(name) {
    if(name) {
      if (name[0] === "A") return "red";
      if (name[0] === "B") return "blue";
    }
  };
}

export default {
  controller: usersController,
  template: require("./contacts.component.html"),
  styles: [require("./contacts.component.scss")]
};
