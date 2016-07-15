angular.module("app").service("mainService", function($http) {
    this.getPokemon = function() {
        return $http({
            method: "GET",
            url: "http://pokeapi.co/api/v2/pokemon/1/"
        }).then(function(response) {
            return response.data.name;
        });
    };
});
