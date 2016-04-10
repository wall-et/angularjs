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