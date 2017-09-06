angular
  .module('project-4-client')
  .controller('SwimsNewCtrl', SwimsNewCtrl);

SwimsNewCtrl.$inject = ['Swim', 'User', 'Venue','$state', 'CurrentUserService'];
function SwimsNewCtrl(Swim, User, Venue, $state, CurrentUserService){

  const vm      = this;
  vm.addSwim    = addSwim;
  vm.venues     = Venue.query();
  vm.swim      = { user_ids: [] };

  function addSwim() {
    vm.swim.created_by = CurrentUserService.currentUser.id;

    Swim
      .save({ swim: vm.swim })
      .$promise
      .then(swim => {
        swim.user_ids.push(CurrentUserService.currentUser.id);
        Swim.update({ id: swim.id }, { swim: swim });
        $state.go('swimsIndex');
      });
  }
}


// do I need to selectVenue in order to create a new swim???????
//   function selectVenue(id) {
//     if (vm.swim.venue_ids.indexOf(id) !== -1) {
//       const index = vm.swim.venue_ids.indexOf(id);
//       vm.swim.venue_ids.splice(index, 1);
//     } else {
//       vm.swim.venue_ids.push(id);
//     }
//   }
// }
