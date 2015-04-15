angular.module('app', [])
	.controller('coffeeController', ['$scope','$timeout', function ($scope,$timeout) {
		//Ambito
		$scope.disableOption=false;
		$scope.disableMoney=true;
		$scope.selectedOption=null;
		$scope.count=0;
		$scope.options=[
			{name:"Cafe",value:1200, selected:false},
			{name:"Cappucino",value:2500, selected:false},
			{name:"Moka",value:2000, selected:false},
			{name:"Cafe+Leche",value:1800, selected:false},
			{name:"Expresso",value:2100, selected:false},
			{name:"Americano",value:2400, selected:false}
		];
		$scope.display="Elija una opcion de cafe..";
		$scope.devuelta="";

		$scope.selectOption=function(optionSelected){
			$scope.disableOption=true;
			$scope.display="Usted ha elegido la opcion: "+optionSelected;
			
			angular.forEach($scope.options,function(element, index){
				if (element.name==optionSelected) {
					$scope.selectedOption=element;
					console.log("TR");
				};
			});
			$timeout(function(){
			$scope.display="Ingrese su dinero..";
			$scope.disableMoney=false;
			},2500);
		};
		
		$scope.cancel=function(){
			if ($scope.count>0) $scope.devuelta="Retire su dinero: "+$scope.count;			
			$scope.display="Cancelando operacion.."
			
			$timeout(function(){
					$scope.reset();
			},2500)
		}

		$scope.reset=function(){
			$scope.display="Elija una opcion de cafe..";			
			$scope.devuelta="";
			$scope.disableOption=false;
			$scope.count=0;
			$scope.selectedOption=null;
		}

		$scope.selectMoney=function(money){
			$scope.count +=money;
			if ($scope.count < $scope.selectedOption.value) {
				$scope.display="Su saldo es: "+$scope.count+"$, faltan: "
				+($scope.selectedOption.value-$scope.count)+"$";
			}else{
				$scope.display="Disfrute su cafe.. "
				$scope.devuelta="Devuelta: "+($scope.count-$scope.selectedOption.value)+"$";

				$scope.disableMoney=true;
				
				$timeout(function(){
					$scope.reset();
				},2500)
			}
		};
	}]);