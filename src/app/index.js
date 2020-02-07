import angular from "angular";

import contactsComponent from "./components/contacts/contacts.component";

import appFilter from "./directives/filter/filter.directive";
import contactsList from "./directives/contactsList/contactsList.directive";
import contact from "./directives/contact/contact.directive";
import addColor from "./directives/addColor/addColor.directive";

import contactsService from "./services/contacts.service";
import filterService from "./services/filter.service";

angular
  .module("app", [])
  .service("contactsService", contactsService)
  .service("filterService", filterService)
  .directive("appFilter", appFilter)
  .directive("contact", contact)
  .directive("contactsList", contactsList)
  .directive("addColor", addColor)
  .component("contactsComponent", contactsComponent);
