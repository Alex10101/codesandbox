import angular from "angular";
import UsersComponent from "./components/users/users.component";
import usersService from "./services/usersService";

angular
  .module("app", [])
  .component("usersComponent", UsersComponent)
  .service("usersService", usersService);
