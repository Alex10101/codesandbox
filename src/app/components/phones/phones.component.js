import angular from "angular";
import template from "./phones.component.html";
import phones from "../../dist/phones.json";

class PhonesController {
  constructor($scope) {
    $scope.phones = phones;
    $scope.className = "red";
    $scope.changeColor = () => {
      if ($scope.className === "red") {
        $scope.className = "blue";
      } else {
        $scope.className = "red";
      }
    };
  }
}

const component = {
  controller: PhonesController,
  template,
  styles: [require("./phones.component.scss")]
};

export default angular
  .module("app.phones", [])
  .component("phonesComponent", component).name;
