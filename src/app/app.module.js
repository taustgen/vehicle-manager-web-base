(function() {
    'use strict';

    angular
        .module('app', ['ui.router','app.customers', 'app.sales', 'app.vehicles', 'app.dashboard'])
        .value('apiURL','http://localhost:51227/api/')
        .config(function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/dashboard')
          $stateProvider.state('dashboard',{
            url: '/dashboard', //http://localhost:3000/#/dashboard
            controller: 'DashboardController as dashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.html'
          })
          .state('customers',{
            url:'/customers',
            abstract: true,
            template: '<div ui-view></div>'
          })
          .state('customers.grid',{
            url:'/grid',
            controller: 'CustomersGridController as customersGridCtrl',
            templateUrl: 'app/customers/customers.grid.html'
          })
          .state('customers.detail',{
            url:'/detail/:id',
            controller: 'CustomersDetailController as customerDetailCtrl',
            templateUrl: 'app.customers.customers.detail.html'
          })
      });
})();
