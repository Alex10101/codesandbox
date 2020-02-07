export default function contacts() {
  return {
    scope: {
      user: "=",
    },
    replace: true,
    transclude:true,
    template: require("./contact.directive.html"),
    styles: [require("./contact.directive.scss")],
    link: function($scope, element, attrs) {
      console.log($scope)
    }
  };
}
