import angular from "angular";
import contacts from "../dist/contacts.json";

export default function contactsService() {
  this.users = [];
  setUsers = setUsers.bind(this)
  setUsers()

  function setUsers() {
    console.log(this)
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", angular.toJson(contacts));
      this.users = contacts.data;
      return;
    }
    this.users = angular.fromJson(localStorage.getItem("users")).data;
  }

  this.updateUser = function(user, name, phone, index) {
    this.users[this.users.indexOf(user)] = {
      name: name,
      phone: phone,
      $$hashKey: index
    };
    updateStorage.bind(this)();
  };

  this.addUser = function(name, phone) {
    if (name && phone) {
      this.users.push({ name: name, phone: phone });
      updateStorage.bind(this)();
    }
  };

  this.deleteUser = function(user) {
    console.log(this.users)

    this.users.splice(this.users.indexOf(user), 1);
    updateStorage.bind(this)();
  };

  this.refreshStorage = function() {
    localStorage.clear();
    setUsers()
  };

  function updateStorage() {
    localStorage.setItem("users", angular.toJson({ data: this.users }));
  }
}
