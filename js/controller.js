angular
    .module("controller", [])
    .controller("pagina1", goToPage1)
    .controller("pagina2", goToPage2);

/* funciones */
function goToPage1($scope, $location) {
    $scope.nombre = "Soy pagina 1";
    $scope.buttonName = "ir pagina 1";
    $scope.go = function () {
        return $location.path("/pagina1");
    }
};

function goToPage2($scope, $location) {
    $scope.nombre = "Soy pagina 2";
    $scope.buttonName = "ir pagina 2";
    $scope.go = function () {
        return $location.path("/pagina2");
    }
};
