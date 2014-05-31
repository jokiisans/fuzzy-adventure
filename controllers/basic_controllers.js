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
        {name:'Aamir', city:'Khi'},
        {name:'Affan', city: 'rwp'},
        {name:'Sanan', city:'Isb'}
    ];
    
    
}

controllers.ProgressDemoCtrl = function($scope){
    
    $scope.max = 100;
    $scope.count = 0;
    
    $scope.incrementBar = function(){
        
        $scope.count++;
        var temp = Math.floor($scope.count);
        var type;
        
        if (temp < 25) {
      type = 'danger';//danger
    } else if (temp < 50) {
      type = 'warning';//warning
    } else if (temp < 75) {
      type = 'info';//info
    } else {
      type = 'success';//success
    }
     
        if(temp >= 100){
            temp = 100;
        }
        
    $scope.count = temp;
    $scope.type = type;
        
    }
    $scope.incrementBar();
    
    //Success messages will be showed based on these functions!
    $scope.earlySuccess = function(){
        
        return 25 >= $scope.count;
        
    }
    $scope.medSuccess = function(){
        return ($scope.count > 25 && $scope.count <= 75)
    }
    $scope.almostSuccess = function(){
        return($scope.count > 75 && $scope.count <= 99);
    }
    $scope.Success = function(){
        return 100 <= $scope.count;
    }
    
    
}

controllers.getUserDataCtrl = function($scope, $http, $templateCache){
    
    $scope.theVar = 4;
    
    $scope.method = 'GET';
    $scope.url = 'http://api.randomuser.me/?results=5&seed=foobar';

    $scope.fetch = function() {
          $scope.code = null;
          $scope.response = null;

          $http({
              method: $scope.method, 
              url: $scope.url,
              cache: $templateCache
          }).
          success(function(data, status) {
              $scope.status = status;
              $scope.data = data;
          }).
          error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
          });

    };  
    $scope.fetch();
    
}



    
fuzzyApp.controller(controllers);

