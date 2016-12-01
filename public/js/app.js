angular
  .module("Sundae", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Sundae", [
    "$resource",
    Sundae
  ])
  .controller("indexController", [
    "$state",
    "Sundae",
    indexController
  ])
  .controller("showController", [
    "$stateParams",
    "Sundae",
    showController
  ])
function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: "/",
    templateUrl: "/assets/js/ng-views/index.html",
    controller: "indexController",
    controllerAs: "vm"
  })
  .state("show", {
    url: "/:flavor",
    templateUrl: "/assets/js/ng-views/show.html",
    controller: "showController",
    controllerAs: "vm"
  })
}
function Sundae ($resource) {
  return $resource("/api/:flavor", {}, {
    update: {method: "PUT"}
  })
}
function indexController ($state, Sundae) {
  this.sundaes = Sundae.query()
  this.newSundae = new Sundae()
  this.create = function() {
    this.newSundae.$save().then(function(sundae){
      $state.go("show", { flavor: sundae.flavor})
    })
  }
}
function showController ($stateParams, Sundae) {
  this.sundae = Sundae.get({flavor: $stateParams.flavor})
}
