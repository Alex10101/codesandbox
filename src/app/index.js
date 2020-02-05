import angular from "angular";
import UsersComponent from "./components/users/users.component";

import appFilter from "./directives/filter/filter.directive";
import contactsList from "./directives/contactsList/contactsList.directive";
import contact from "./directives/contact/contact.directive";
import hoverColor from "./directives/hoverColor/hoverColor.directive";

import userService from "./services/user.service";

angular
  .module("app", [])
  .component("usersComponent", UsersComponent)
  .service("userService", userService)
  .directive("appFilter", appFilter)
  .directive("contactsList", contactsList)
  .directive("contact", contact)
  .directive("hoverColor", hoverColor);
