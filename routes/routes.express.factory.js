const express = require('express');
const Router = express.Router();

const Route = {};

var ROUTE = function (routes) {
    return {
        router: Router,
        isNull: function (Routes) {
            return (Routes.router == {} || Routes.router === null || Routes.router == undefined);
        },
        createRoute: function (element, index, array) {
            return ROUTE.router[element.method](element.url, element.callback);
        },
        createModuleRoutes: function (router, routes) {
             if (this.isNull(Routes))
                return false;

            // default Express
            if(router)
                ROUTE.Router = router;

            return routes.forEach(ROUTE.createRoute);
        }
    }
};

const RoutesExpress = function (RoutesConfig) {
    var Route = ROUTE(RoutesConfig);

    return Route.createModuleRoutes(Route.router, RoutesConfig);
};

module.exports = RoutesExpress;