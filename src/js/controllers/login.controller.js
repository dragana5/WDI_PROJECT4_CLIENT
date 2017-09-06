angular
  .module('project-4-client')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;
  vm.login = login;

  function login() {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
        $state.go('swimsIndex');
      });
  }
  console.log('LOGINNNNNN');
}
