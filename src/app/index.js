import angular from "angular";
import contactsComponent from "./components/contacts/contacts.component";
import contactsService from "./services/contacts.service";

angular
  .module("app", [])
  .service("contactsService", contactsService)
  .component("contactsComponent", contactsComponent);
