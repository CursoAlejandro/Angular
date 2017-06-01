angular.module("miApp", [])
angular.module("miApp")


 .controller("MainController", ["$scope","$service", function($scope, $service){
    $scope.titulo = "Pensamientos"
    $scope.nombre = 'Pepe';
	$scope.numero = '7';
	var inc = document.querySelector("btnIncrementar");

 }]) // Fin de Maincontroller

