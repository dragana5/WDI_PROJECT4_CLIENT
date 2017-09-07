// angular
//   .module('project-4-client')
//   .controller('SwimsDeleteCtrl', SwimsDeleteCtrl);
//
// SwimsDeleteCtrl.$inject = ['Swim', 'User', '$state'];
//
// function SwimsDeleteCtrl(Swim, User, $state){
//
//   const vm         = this;
//   vm.deleteSwim    = deleteSwim;
//   console.log('jwgwkgk');
//
//   vm.users       = User.query();
//   // add if user_id === currentUser_id then deleteSwim()
//   vm.swim         = { user_ids: [] };
//
//   function deleteSwim() {
//     Swim
//     .findById(vm.swim.id)
//     .exec()
//     .swim.delete()
//     .exec()
//     .then(() => $state.go('swimsIndex'));
//   }
// }
//
//
//     // console.log(story.contributions, '<--------------------- STORY CONTRIBUTIONS');
//     // for (var i = 0; i < story.contributions.length; i++) {
//     //   story.contributions[i].contributor = req.body.contributions[i].contributor._id;
//     // }
//
//     // for (var i = 0; i < story.contributions.length; i++) {
//     //   console.log(story.contributions[i], 'BEFORE');
//     //   story.contributions[i].contributor = story.contributions[i].contributor.id;
//     //   console.log(story.contributions[i], 'AFTER');
//     // }
//
//     // story.contributions = req.body.contributions;
