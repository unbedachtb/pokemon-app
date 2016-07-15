angular.module("app").controller("mainCtrl", function($scope, mainService) {
    $scope.showPokemon = function() {
        mainService.getPokemon().then(function(response) {
            console.log(response);
            $scope.pokemon = response;
        });
    };
    $scope.showPokemon();
});
