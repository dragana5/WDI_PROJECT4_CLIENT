angular
  .module('project-4-client')
  .controller('SwimsIndexCtrl', SwimsIndexCtrl);

SwimsIndexCtrl.$inject = ['Swim'];
function SwimsIndexCtrl(Swim){
  const vm = this;
  vm.swims = Swim.query();
}
