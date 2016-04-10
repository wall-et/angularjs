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


/*use strict*/

var app = angular.module('AngularBindingPracticeApp',[]);
app.controller('FirstCtrl',function($scope){
	$scope.data = {
		plainControllerText: "plain text from controller",
		moreText: "Hi!",
	};
});


/* use strict */

/*var app = angular.module('MyApp', [])
app.controller('MainController', function ($scope)
{
	$scope.labelName = "New Button";
	$scope.newElement = angular.element('<div class="btn btn-default">' +
		$scope.labelName + '</div>');
})

.directive('pageDirective', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a new button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('pre');
					iElement.html('<div class="panel panel-default">Now a panel</div>');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('post');
					iElement.append(scope.newElement);
					debugger;
				}
			}
		}
	}
})

.directive('pageDirectiveTwo', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a second button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('2 compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('2 pre');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('2 post');
					iElement.append(scope.newElement);
					debugger;
				}
			}
		}
	}
})

.directive('pageDirectiveThree', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a third button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('3 compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('3 pre');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('3 post');
					debugger;
				}
			}
		}
	}
})
*/

/*use strict*/

/*var app = angular.module('AngularPokemonApp',[]);*/




/*use strict*/
/*efrat jsFile*/
/*
var app = angular.module('AngularPracticeApp',[]);


app.controller('TestCtrl',function($scope){

	
	$scope.avengersNames = {
		ironman:[],
		hawkeye:[],
		blackwidow:[]		
	};
	console.log("scope.avengersNames inits : ",$scope.avengersNames);


});

app.directive("efratraube",function(){
	return {
		restrict: 'E',
		transclude: true,
		template: '<h4>Hi! wave... I came from the directive.. <br>Efrat is an element now</h4>'
	}
})
.directive("jacob",function(){
	return {
		restrict: 'E',
		transclude: true,
		link: function(scope,element,attrs){
			
		}
	}
	/ return function(scope,element){}
})

.directive('specialBtn',function(){
	return {
		restrict: 'A',
		link: function(scope,element,attrs){
			element.bind('mouseenter',function(){
				console.log(element);
				element[0].innerText = "changed text";
			});
			element.bind('mouseleave',function(){
				console.log(element);
				element[0].innerText = "original text";
			});
		}
	}
})
.controller('AvengersCtrl',function($scope){
	this.addIronman = function(){
		$scope.avengersNames.ironman.push("IromMan: Anthony (Tony) Edward Stark");
	};
	this.addHawkeye = function(){
		$scope.avengersNames.hawkeye.push("Clinton Francis Barton");
	};
	this.addBlackwidow = function(){
		$scope.avengersNames.blackwidow.push("Natalia Alianovna Romanova");
	};
})
.directive('theavengers',function(){
	return {
		restrict: 'E',
		//scope:{},
		controller: "AvengersCtrl",
		link: function(scope,elem,attrs){
			elem.bind('mouseenter',function(){
				console.log(scope.avengersNames);
				//elem[0].innerText = scope.avengersNames;
			});
		}
	}
})
.directive('ironman',function(){
	return {
		restrict: "A",
		require: 'theavengers',
		link: function(scope, elem ,attrs, AvengersCtrl){
			elem.bind('mouseenter',function(){
				AvengersCtrl.addIronman();
			})
		}
	}
})
.directive('hawkeye',function(){
	return {
		restrict: "A",
		require: 'theavengers',
		link: function(scope,elem,attrs,AvengersCtrl){
			elem.bind('mouseenter',function(){
				AvengersCtrl.addHawkeye();
			})
		}
	}
})
.directive('blackwidow',function(){
	return {
		restrict: "A",
		require: 'theavengers',
		link: function(scope,elem,attrs,AvengersCtrl){
			elem.bind('mouseenter',function(){
				AvengersCtrl.addBlackwidow();
			})
		}
	}
})


.controller('FirstCtrl',function($scope){
	$scope.data = {
		plainControllerText: "plain text from controller",
		moreText: "Hi!",
	};
});
*/