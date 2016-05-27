export default function routing($urlRouterProvider,$locationProvider,$stateProvider){

	$locationProvider.html5Mode(true);
	// $urlRouterProvider.otherWise('/');
	$stateProvider
	.state('home',{
		url:'/home',
		template:require('./home.html'),
		controller:'home.controller',
		controllerAs:'vm'
	})

}
routing.$inject=['$urlRouterProvider','$locationProvider','$stateProvider'];
