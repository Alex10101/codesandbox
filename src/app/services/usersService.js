export default function usersService() {
  this.users = [];
  var self = this;
  setUsers()

  function setUsers() {
    if (localStorage.getItem("users") === null) {
      import("../dist/users.json").then(function(users) {
        localStorage.setItem("users", JSON.stringify(users));
        self.users = users.data;
      });
      return;
    }
    self.users = JSON.parse(localStorage.getItem("users")).data;
  }

  this.updateUser = function(user, name, phone) {
    self.users[self.users.indexOf(user)] = { name: name, phone: phone };
    updateStorage();
  };

  this.addUser = function(name, phone) {
    if (name && phone) {
      self.users.push({ name: name, phone: phone });
      updateStorage();
    }
  };

  this.deleteUser = function(user) {

    self.users = self.users.filter(function() {
      return !self.users.indexOf(user)
    });
    updateStorage();
  };

  this.refreshStorage = function() {
    localStorage.clear();
    setUsers()
  };

  function updateStorage() {
    localStorage.setItem("users", JSON.stringify({ data: self.users }));
  }

}
