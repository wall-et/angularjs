/* use strict */
/*efrat*/
var app = angular.module('AngularPokemonApp',['ngRoute']);

app.controller('MainPokemonCtrl',function($scope){
	console.log("on main pokemon controll");
	$scope.tournementLabel = "Pokemon Tournement!!";
	$scope.tournementHeader = "<div><h2>" + $scope.tournementLabel + "</h2></div>";
	$scope.pokedexLabel = "Pokemon Pokedex";
	$scope.pokedexButton = "<div class='btn btn-default'>" + $scope.pokedexButton + "</div>";
})

.config(function($routeProvider){
	$routeProvider
		.when('/',{
			template: "<div>This page does not exist! You are extint!</div>", 
		})
		.when('/fighters',{
			templateUrl: "partials/pokemonfighters.html",
			controller: "MainPokemonCtrl"
		})
		.when('/pokemon/:name',{
			templateUrl: "partials/pokemontemplate.html",
			controller: "SinglePokemonCtrl"
		})
		.when('/pokedex',{
			templateUrl: "partials/pokedex.html",
			controller: "MainPokemonCtrl"
		})
		.otherwise({
			template: "<div>This page does not exist! You are extint!</div>", 
		})
})


.controller('PokCtrl',function ($scope,$element){
	$scope.getAttack = function (name, attacktype, attack){
		console.log(""+name+" attacked a "+attacktype+" type pokemon with a "+attack+"!");
	}
	$scope.attacktypes = ['Normal','Fire','Fighting','Water','Flying',
						'Grass','Poison','Electric','Ground','Psychic',
						'Rock','Ice','Bug','Dragon','Ghost','Dark','Steel','Fairy'];
	$scope.attacktype = $scope.attacktypes[0];
})
.directive("pokemon", function(){
	return {
		restrict: "E",
		scope: {
			"name": "@",
			image: "@",
			attacktype: "@",
			useAttack: "&"
		},
		templateUrl: "partials/single_pokemon.html",
		controller: "PokCtrl"
	}
})


.service('pokemonService',function($http,$q){
	var deferred = $q.defer();
	$http.get('resources/json/pokemonpokedex.json').then(function(data){
		deferred.resolve(data);
	});
	this.getPokemons = function(){
		return deferred.promise;
	}
})
.controller("pokDataCtrl",function($scope,pokemonService){
	var promise = pokemonService.getPokemons();
	promise.then(function(data){
		$scope.pokemons = data.data;
		console.log($scope.pokemons);
	})
})

.controller('SinglePokemonCtrl',function($scope,$routeParams,pokemonService){
	var promise = pokemonService.getPokemons();
	promise.then(function(data){
		$scope.pokemonsNames = [];
		$scope.pokemons = data.data;
		angular.forEach($scope.pokemons,function(singlePok){
			$scope.pokemonsNames.push(singlePok.name);
			if($routeParams.name.toUpperCase() == singlePok.name.toUpperCase()){
				$scope.pok = {
					"image": 	singlePok.image,
					"name": 	singlePok.name,
					"type": 	singlePok.type,
					"ability": 	singlePok.abilities 
				};
			}
		})
		console.log($scope.pokemonsNames);
		console.log($scope.pokemonsNames[0])
		var pokAttack = function(name,attacked){
			console.log("attacked " + attacked);
		}
	})
})
/*.directive("singlepokemon", function(){
	return {
		restrict: "A",
		scope: {
			"name": "@",
			image: "@",
			attacktype: "@",
			pokAttack: "&"
		},
		//templateUrl: "partials/single_pokemon.html",
		controller: "SinglePokemonCtrl"
	}
})*/
