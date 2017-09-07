angular
.module('project-4-client')
.controller('SwimsShowCtrl', SwimsShowCtrl);

SwimsShowCtrl.$inject = ['Swim', '$stateParams', '$state'];

function SwimsShowCtrl(Swim, $stateParams, $state) {
  const vm       = this;
  vm.swim        = Swim.get({ id: $stateParams.id });


  vm.deleteSwim  = deleteSwim;
  function deleteSwim(){
    Swim
    .delete({ id: vm.swim.id })
    .$promise
    .then(() => {
      $state.go('swimsIndex');
    });
  }
}



// console.log(story.contributions, '<--------------------- STORY CONTRIBUTIONS');
// for (var i = 0; i < story.contributions.length; i++) {
//   story.contributions[i].contributor = req.body.contributions[i].contributor._id;
// }

// for (var i = 0; i < story.contributions.length; i++) {
//   console.log(story.contributions[i], 'BEFORE');
//   story.contributions[i].contributor = story.contributions[i].contributor.id;
//   console.log(story.contributions[i], 'AFTER');
// }

// story.contributions = req.body.contributions;
