angular
  .module('project-4-client')
  .controller('VenuesIndexCtrl', VenuesIndexCtrl);

VenuesIndexCtrl.$inject = ['Venue'];
function VenuesIndexCtrl(Venue){
  const vm = this;
  vm.venues = Venue.query();
}
