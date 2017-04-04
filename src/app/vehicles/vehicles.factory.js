(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .factory('vehiclesFactory', vehiclesFactory);

    vehiclesFactory.$inject = ['$http', 'apiURL'];

    /* @ngInject */
    function vehiclesFactory($http, apiURL) {
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
            .get(apiURL+'Vehicles/')
            .then(function (response) {
              return response.data;
            });
        }
        function getById(id){
          return $http
            .get(apiURL+'Vehicles/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
        function update(id, vehicle){
          return $http.put(apiURL+'Vehicles/'+ id, vehicle);
        }
        function create(vehicle){
          return $http
            .post(apiURL+'Vehicles', vehicle)
            .then(function (response) {
              return response.data;
            });
        }
        function remove(id){
          return $http
            .delete(apiURL+'Vehicles/'+ id)
            .then(function (response) {
              return response.data;
            });
        }
    }
})();
