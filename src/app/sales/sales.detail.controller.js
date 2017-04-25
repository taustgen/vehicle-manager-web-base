(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['ui.select', 'ngSanitize','SweetAlert','salesFactory', '$stateParams'];

    /* @ngInject */
    function SalesDetailController(ui.select, ngSanitize,SweetAlert, salesFactory, $stateParams) {
        var vm = this;
        vm.state=$stateParams;

        activate();

        function activate() {
          var saleId=$stateParams.id;
          if(saleId){
            salesFactory
              .getById(saleId)
              .then(function(sale){
                vm.sale=sale;
              })
              .catch(function(error){
                alert(error);
              })
          }
        }
        function save(){
          var saleId=$stateParams.id;
          if(saleId){
            salesFactory
              .update(vm.sale.saleId, vm.sale)
              .then(function(){
                SweetAlert.swal("sale saved!","well done", "success")
              })
            } else {
                salesFactory
                  .create(vm.sale)
                  .then(function(){
                    SweetAlert.swal("Sale saved!", "New sale created", "success")
                  })
            }
        }
    }
})();
