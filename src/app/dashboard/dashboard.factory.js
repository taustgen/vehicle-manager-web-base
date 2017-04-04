(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$http', 'apiURL'];

    /* @ngInject */
    function dashboardFactory($http, apiURL) {
        var service = {
        /*    getAll: getAll,
            getById: getById,
            create: create,
            remove: remove,
            update: update
        */
        };

        return service;
    }
})();
