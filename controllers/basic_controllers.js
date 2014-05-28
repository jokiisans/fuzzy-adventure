var fuzzyApp = angular.module('basic_controllers', []);

var controllers = {};

controllers.TabController = function(){
	this.tab=0;
	this.selectTab=function(tabNum){
		this.tab=tabNum;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
}

//Just testing out a controller
controllers.DataController = function($scope){
    
    
    $scope.people = [
        {name:'Sanan', city:'Khi'},
        {name:'Affan', city: 'rwp'}
    ];
    
    
}
    
    

fuzzyApp.controller(controllers);

