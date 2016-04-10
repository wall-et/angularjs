/*use strict*/

var app = angular.module('AngularBindingPracticeApp',[]);
app.controller('FirstCtrl',function($scope){
	$scope.data = {
		plainControllerText: "plain text from controller",
		moreText: "Hi!",
	};
});
