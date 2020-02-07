export default function addColor() {
  return {
    link: function($scope, element, attrs) {
      var name = element.scope().name;
      var set = setColorByName(name);

      function setColorByName(name) {
        if (name[0] === "A") return "red";
        if (name[0] === "B") return "blue";
      }

      set && element.addClass(set);
    }
  };
}
