import angular from "angular";
import UsersComponent from "./components/users/users.component";
import usersService from "./services/usersService";

angular
  .module("app", [])
  .service("usersService", usersService)
  .component("usersComponent", UsersComponent);
