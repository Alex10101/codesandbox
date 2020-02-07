export function contactsController($scope, contactsService) {
  var ctrl = this;

  ctrl.contactsService = contactsService;
  ctrl.addUser = contactsService.addUser.bind(contactsService);
  ctrl.refreshStorage = contactsService.refreshStorage.bind(contactsService);

  ctrl.setColorByName = function(name) {
    if (name) {
      if (name[0] === "A") return "red";
      if (name[0] === "B") return "blue";
    }
  };
}

export default {
  // todo: how to declare this in index.js and use in views like ng-controller
  controller: contactsController,
  template: require("./contacts.component.html"),
  styles: [require("./contacts.component.scss")]
};
