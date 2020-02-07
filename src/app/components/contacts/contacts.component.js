export function contactsController($scope, contactsService) {
  var ctrl = this;

  ctrl.contactsService = contactsService;
  ctrl.addUser = contactsService.addUser.bind(contactsService);
  ctrl.refreshStorage = contactsService.refreshStorage.bind(contactsService);
}

export default {
  // todo: how to declare this in index.js and use in views like ng-controller
  controller: contactsController,
  template: require("./contacts.component.html"),
  styles: [require("./contacts.component.scss")]
};
