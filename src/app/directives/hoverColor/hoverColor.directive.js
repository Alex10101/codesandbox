export default function hoverColor() {
  return {
    link: function($scope, element, attrs) {
      var name = element.scope().name
      var set = setColorByName(name)

      function setColorByName(name) {
        if (name[0] === "A") return "red";
        if (name[0] === "B") return "blue";
      }

      set && element.addClass(set)
    }
  };
}


// ng-class="{[className]: hover[className + $index], [setColorByName(user.name)]: true}"
// ng-mouseenter="hover[className + $index] = true"
// ng-mouseleave="changeColor()"

// $scope.className = 'red';
//
// $scope.changeColor = function() {
//   if ($scope.className === "red") {
//     $scope.className = "blue";
//   } else {
//     $scope.className = "red";
//   }
// };
