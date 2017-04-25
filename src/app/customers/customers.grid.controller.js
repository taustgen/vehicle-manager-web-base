(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController);

    CustomersGridController.$inject = ['SweetAlert','customersFactory'];

    /* @ngInject */
    function CustomersGridController(SweetAlert, customersFactory) {
        var vm = this;
        vm.customers=[];
        activate();
        vm.remove=remove;
        function activate() {
          customersFactory
          .getAll()
          .then(function(customers){
            vm.customers=customers;
          });

        }
        function remove(customer){
          SweetAlert.swal({
           title: "Are you sure?",
           text: `Your will not be able to recover ${customer.firstName}'s data!'`,
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#DD6B55",
           confirmButtonText: "Yes, delete it!",
           cancelButtonText: "Cancel",
           closeOnConfirm: false,
           closeOnCancel: false},
           function(isConfirm){
              if (isConfirm) {
                customersFactory
                  .remove(customer.customerId)
                  .then(function(){
                    SweetAlert.swal("Deleted!", `${customer.firstName} has been deleted.`, "success");
                    vm.customers.splice(vm.customers.indexOf(customer), 1);
                  });

              } else {
                 SweetAlert.swal("Cancelled", `${customer.firstName} lives... for now`, "error");
              }
        });

        }
    }
})();
