angular
  .module('project-4-client')
  .controller('VenuesShowCtrl', VenuesShowCtrl);

VenuesShowCtrl.$inject = ['Venue', '$stateParams'];
function VenuesShowCtrl(Venue, $stateParams) {
  const vm = this;

  vm.venue = Venue.get({ id: $stateParams.id });

  
}
