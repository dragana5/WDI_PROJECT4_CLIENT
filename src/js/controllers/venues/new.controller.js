angular
  .module('project-4-client')
  .controller('VenuesNewCtrl', VenuesNewCtrl);

VenuesNewCtrl.$inject = ['Venue', '$state'];
function VenuesNewCtrl(Venue, $state){

  const vm      = this;
  vm.addVenue    = addVenue;

  // add a form in html with all the fields for a new venue
  function addVenue() {
    Venue
    .save({ venue: vm.venue })
    .$promise
    .then(() => $state.go('venuesIndex'));
  }
}
