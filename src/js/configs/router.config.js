angular
  .module('project-4-client')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('venuesIndex', {
    url: '/venues',
    templateUrl: '/js/views/venues/index.html',
    controller: 'VenuesIndexCtrl',
    controllerAs: 'venuesIndex'
  })
  .state('venuesNew', {
    url: '/venues/new',
    templateUrl: '/js/views/venues/new.html',
    controller: 'VenuesNewCtrl',
    controllerAs: 'venuesNew'
  })
  .state('venuesShow', {
    url: '/venues/:id',
    templateUrl: '/js/views/venues/show.html',
    controller: 'VenuesShowCtrl',
    controllerAs: 'venuesShow'
  })
  .state('swimsIndex', {
    url: '/swims',
    templateUrl: '/js/views/swims/index.html',
    controller: 'SwimsIndexCtrl',
    controllerAs: 'swimsIndex'
  })
  .state('swimsNew', {
    url: '/swims/new',
    templateUrl: '/js/views/swims/new.html',
    controller: 'SwimsNewCtrl',
    controllerAs: 'swimsNew'
  })
  .state('swimsShow', {
    url: '/swims/:id',
    templateUrl: '/js/views/swims/show.html',
    controller: 'SwimsShowCtrl',
    controllerAs: 'swimsShow'
  })
  .state('swimsEdit', {
    url: '/swims/:id/edit',
    templateUrl: '/js/views/swims/edit.html',
    controller: 'SwimsEditCtrl',
    controllerAs: 'swimsEdit'
  });

  $urlRouterProvider.otherwise('/');
}
