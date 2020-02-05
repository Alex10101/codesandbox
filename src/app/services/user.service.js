export default function userService($q) {
  var users = [{name: "1", phone: '2'}]

  function addUser() {
    users.push({name: "123", phone: '456'})
    // localStorage.setItem("users", JSON.stringify(usersGlobal));
  }

  function deleteUser() {
    users.pop()
  }

  return {
    users,
    addUser,
    deleteUser
  }
}




$q(function(resolve, reject) {
  if (localStorage.getItem("users") === null) {
    import("../dist/users.json").then(function(users) {
      localStorage.setItem("users", JSON.stringify(users));
      resolve(users.data);
    });
    return;
  }
  this.users = JSON.parse(localStorage.getItem("users")).data
  resolve(this.users);
})
