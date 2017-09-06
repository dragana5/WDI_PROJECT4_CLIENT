angular
  .module('project-4-client')
  .controller('SwimsIndexCtrl', SwimsIndexCtrl);

SwimsIndexCtrl.$inject = ['Swim', 'CurrentUserService', '$state'];

function SwimsIndexCtrl(Swim, CurrentUserService, $state){
  const vm  = this;
  vm.swims  = Swim.query();
  vm.joinSwim = joinSwim;

  function joinSwim(swim) {
    console.log(swim);
    swim.user_ids.push(CurrentUserService.currentUser.id);
    Swim
      .update({ id: swim.id }, { swim: swim })
      .$promise
      .then(() => {
        $state.reload();
      });
  }
}
