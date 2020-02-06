import template from "./contacts.component.html";
import contacts from "../../dist/contacts.json";

function contactsController($scope) {
  $scope.contacts = contacts.data;
  $scope.setColorByName = function(name) {
    if (name[0] === "A") return "red";
    if (name[0] === "B") return "blue";
  };
}

export default {
  controller: contactsController,
  template: template,
  styles: [require("./contacts.component.scss")]
};
