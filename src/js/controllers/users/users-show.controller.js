// angular
// .module('project-4-client')
// .controller('UsersShowCtrl', UsersShowCtrl);
//
// UsersShowCtrl.$inject = ['$stateParams', 'User', 'Swim'];
// function UsersShowCtrl($stateParams, User, Swim){
//   const vm = this;
//   vm.user = User.get($stateParams);
//   // console.log(vm.user);
//   vm.swims = Swim.query();
  // vm.userCreatedSwims = [];

//   vm.swims
//   .$promise
//   .then(()=>{
//     for (var i = 0; i < vm.swims.length; i++) {
//       // for (var a = 0; a < vm.swims[i].contributions.length; a++) {
//       // if(vm.stories[i].contributions[a].contributor.id === vm.user.id){
//       // vm.userContributions.push(vm.stories[i]);
//     }
//   });
// }


angular
  .module('project-4-client')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

  function deleteUser() {
    User
    .findById(vm.user.id)
    .exec()
    .user.delete()
    .exec()
    .then(() => $state.go('swimsIndex'));
  }
}
