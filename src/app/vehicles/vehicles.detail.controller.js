(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['SweetAlert','vehiclesFactory', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(SweetAlert, vehiclesFactory, $stateParams) {
        var vm = this;
        vm.save=save;
        activate();
        function activate(){

          var vehicleId=$stateParams.id
          vehiclesFactory
            .getById(vehicleId)
            .then(function(vehicle){
              vm.vehicle= vehicle;
            })
            .catch(function(error){
              alert(error);
            })
        }
        function save(){
          vehiclesFactory
            .update(vm.vehicle.vehicleId, vm.vehicle)
            .then(function(){
              SweetAlert.swal("Vehicle updated","thats some flame shit", "success")
            })
        }
    }
})();
