import angular from "angular";
import UsersComponent from "./components/users/users.component";
import getUsersData from "./services/getUserData";

angular
  .module("app", [])
  .component("usersComponent", UsersComponent)
  .factory("getUsersData", getUsersData);
