export function contactsController($scope, contactsService) {
  var ctrl = this;

  ctrl.contactsService = contactsService;
  ctrl.updateUser = contactsService.updateUser.bind(contactsService);
  ctrl.addUser = contactsService.addUser.bind(contactsService);
  ctrl.deleteUser = contactsService.deleteUser.bind(contactsService);
  ctrl.refreshStorage = contactsService.refreshStorage.bind(contactsService);

  ctrl.setColorByName = function(name) {
    if (name) {
      if (name[0] === "A") return "red";
      if (name[0] === "B") return "blue";
    }
  };
}

export default {
  controller: contactsController,
  template: require("./contacts.component.html"),
  styles: [require("./contacts.component.scss")]
};
