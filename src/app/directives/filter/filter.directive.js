export default function appFilter() {
  return {
    // restrict: "E",
    // transclude: true,
    scope: {
      outerVal: '=searchText'
    },
    template: require("./filter.directive.html"),
    styles: [require("./filter.directive.scss")],
    // controller: ['$scope', function($scope, element, attrs) {
    // }],
    link: function($scope, element, attrs) {
      $scope.$watch('searchText', function(newValue, oldValue) {
        $scope.$parent.searchText = newValue;
      });

      // $scope.$parent.$watch('selectedName', function(newValue, oldValue) {
      //   console.log(newValue)
        // $scope.$parent.searchText = newValue;
      // });

      // attrs.$observe('ngModel', function(value){
      //   $scope.$watch(value, function(newValue){
      //     console.log(newValue);
      //   });
      // });

      // $scope.$apply();

      // $scope.$watch(attrs.className, function() {
      //   // $scope.$parent.showPhones = !$scope.$parent.showPhones;
      //   // $scope.$parent.orderByName = !$scope.$parent.orderByName;
      // });
    }
  };
}
