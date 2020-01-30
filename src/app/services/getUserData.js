export default function getUsersData($q) {
  return function() {
    return $q(function(resolve, reject) {
      if (localStorage.getItem("users") === null) {
        import("../dist/users.json").then(function(users) {
          localStorage.setItem("users", JSON.stringify(users));
          resolve();
        });
        return;
      }
      resolve();
    });
  };
}
