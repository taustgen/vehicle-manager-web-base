(function() {
    'use strict';

    angular
        .module('app.customers')
        .factory('customersFactory', customersFactory);

    customersFactory.$inject = ['$http', 'apiURL'];

    /* @ngInject */
    function customersFactory($http, apiURL) {
        var service = {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            remove: remove
        };

        return service;

        function getAll() {
          return $http
            .get(apiURL+'Customers/')
            .then(function (response) {
              return response.data;
            });
        }
        function getById(id){
          return $http
            .get(apiURL+'Customers/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
        function update(id, customer){
          return $http.put(apiURL+'Customers/'+ id, customer);
        }
        function create(customer){
          return $http
            .post(apiURL+'Customers', customer)
            .then(function (response) {
              return response.data;
            });
        }
        function remove(id){
          return $http
            .delete(apiURL+'Customers/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
    }
})();
