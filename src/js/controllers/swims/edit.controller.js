angular
.module('project-4-client')
.controller('SwimsEditCtrl', SwimsEditCtrl);

SwimsEditCtrl.$inject = ['Swim','Venue', '$stateParams', '$state'];

function SwimsEditCtrl(Swim, Venue, $stateParams, $state) {
  const vm       = this;
  vm.venues      = Venue.query();
  vm.swim        = Swim.get($stateParams);

  vm.update      = swimUpdate;

  function swimUpdate() {
    Swim
    .update({id: $stateParams.id}, vm.swim)
    .$promise
    .then(() => $state.go('swimsShow', $stateParams));
  }
}
