(function() {
    'use strict';

    angular
        .module('app.sales')
        .factory('salesFactory', salesFactory);

    salesFactory.$inject = ['$http', 'apiURL'];

    /* @ngInject */
    function salesFactory($http, apiURL) {
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
            .get(apiURL+'Sales/')
            .then(function (response) {
              return response.data;
            });
        }
        function getById(id){
          return $http
            .get(apiURL+'Sales/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
        function update(id, sales){
          return $http.put(apiURL+'Sales/'+ id, sales);
        }
        function create(sales){
          return $http
            .post(apiURL+'Sales', sales)
            .then(function (response) {
              return response.data;
            });
        }
        function remove(id){
          return $http
            .delete(apiURL+'Sales/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
    }
})();
