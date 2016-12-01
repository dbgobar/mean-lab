angular
  .module("Sundae", [
    "ui.router",
    "ngResource"
  ])
.config([
  "$stateProvider",
  Router
])

function Router($stateProvider){
  $stateProvider
  .state("index", {
    url: "/",
    templateUrl:"/assets/js/ng-views/index.html"
  })
}
