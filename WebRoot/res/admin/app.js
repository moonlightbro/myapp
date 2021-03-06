'use strict';
// Declare app level module which depends on filters, and services
define([
        'angular',
        'controllers/category',
        'controllers/user',
        'controllers/role',
        'controllers/menu',
        'common/directives',
        'common/services'
],function(angular, category, user, role,menu){
	var app =  angular.module('adminApp', ['ngRoute','CommDirectives','CommServices']);
	
		app.config(['$routeProvider','$locationProvider',  function($routeProvider, $locationProvider) {
			  $routeProvider.when('/', {templateUrl: 'core/admin/topic/category_list.html', controller: category.list})
			  				.when('/component_icons', {templateUrl:'core/icons.html', controller: null})
			  				.when('/user_list', {templateUrl:'core/admin/sys/user_list.html', controller: user.list})
			  				.when('/user_info', {templateUrl:'core/admin/sys/user_info.html', controller: user.info})
			  				.when('/user_grant', {templateUrl:'core/admin/sys/user_grant.html', controller: user.grant})
			  				.when('/role_list', {templateUrl:'core/admin/sys/role_list.html', controller: role.list})
//			  				.when('/role_grant', {templateUrl:'core/admin/sys/role_grant.html', controller: role.grant})
			  				.when('/menu_list', {templateUrl:'core/admin/sys/menu_list.html', controller: menu.list})
			  				.when('/menu_info', {templateUrl:'core/admin/sys/menu_info.html', controller: menu.info})
			  				.otherwise({redirectTo: '/'});
			  				
			  	// configure html5		
			  	//$locationProvider.html5Mode(true);
			}]);
	return app;
});