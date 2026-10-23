(function () {
  const app = angular.module('cityguide', []);
  app.controller('BlogController', function () {
    this.menuOpen = false;
    this.choose = function () { this.menuOpen = false; };
  });
})();
