import angular from "angular";
import uirouter from "angular-ui-router";
// import routing from "router";
// import MainController from "./MainController"
import homemodule from "./features/home/home.module";

var moduleName='app';
angular.module(moduleName, [uirouter,homemodule]);
// .config(routing)
// .controller("MainController",MainController);

export default moduleName;