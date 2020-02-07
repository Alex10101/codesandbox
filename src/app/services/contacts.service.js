import angular from "angular";
import contacts from "../dist/contacts.json";

export default function contactsService() {
  this.users = [];

  this.setUsers = function() {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", angular.toJson(contacts));
    }
    this.users = angular.fromJson(localStorage.getItem("users")).data;
  };

  this.setUsers();

  this.updateUser = function(user, name, phone, index) {
    this.users[this.users.indexOf(user)] = {
      name: name,
      phone: phone,
      $$hashKey: index
    };
    this.updateStorage();
  };

  this.addUser = function(name, phone) {
    if (name && phone) {
      this.users.push({ name: name, phone: phone });
      this.updateStorage();
    }
  };

  this.deleteUser = function(user) {
    this.users.splice(this.users.indexOf(user), 1);
    this.updateStorage();
  };

  this.refreshStorage = function() {
    localStorage.clear();
    this.setUsers();
  };

  this.updateStorage = function() {
    localStorage.setItem("users", angular.toJson({ data: this.users }));
  };
}
