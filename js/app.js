angular.module('myApp', ["controller", "ngRoute"])
    .config(function ($routeProvider) {
        //Configuracion y definicion de las rutas
        $routeProvider
            .when("/pagina1", {
                templateUrl: "/pagina1.html",
                controller: "pagina1"
            })
            .when("/pagina2", {
                templateUrl: "/pagina2.html",
                controller: "pagina2"
            })
            //este es digamos, al igual que en un switch el default, en caso que 
            //no hayamos concretado que nos redirija a la página principal
            .otherwise({
                reditrectTo: "/index"
            });
    });
