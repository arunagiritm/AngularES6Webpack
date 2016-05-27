import angular from "angular";
import routing from "./home.router";
import HomeController from "./home.controller";

var moduleName="home.module";

angular.module(moduleName, [])
.config(routing)
.controller("home.controller",HomeController);

export default moduleName;