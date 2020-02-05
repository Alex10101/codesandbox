export default function getUsersData($q) {
  return function() {
    return $q(function(resolve, reject) {
      if (localStorage.getItem("users") === null) {
        import("../dist/users.json").then(function(users) {
          console.log(users)
          localStorage.setItem("users", JSON.stringify(users).data);
          resolve(users);
        });
        return;
      }
      resolve(JSON.parse(localStorage.getItem("users")).data);
    });
  };
}
