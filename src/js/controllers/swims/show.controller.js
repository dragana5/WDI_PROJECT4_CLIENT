angular
  .module('project-4-client')
  .controller('SwimsShowCtrl', SwimsShowCtrl);

SwimsShowCtrl.$inject = ['Swim', '$stateParams', '$state'];
function SwimsShowCtrl(Swim, $stateParams, $state) {
  const vm = this;

  vm.swim = Swim.get({ id: $stateParams.id });

  function deleteSwim() {
    Swim
    .findById(vm.swim.id)
    .exec()
    .swim.delete()
    .exec()
    .then(() => $state.go('swimsIndex'));
  }
  function editSwim() {
    Swim
    .findById(vm.swim.id)
    .exec()
    .save()({ swim: vm.swim })
    .$promise
    .then(() => $state.go('swimsShow'));
  }
}
