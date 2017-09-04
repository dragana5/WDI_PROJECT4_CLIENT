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
  .state('venuesIndex', {
    url: '/venues',
    templateUrl: '/js/views/venues/index.html',
    controller: 'VenuesIndexCtrl',
    controllerAs: 'venuesIndex'
  })
  .state('venuesCreate', {
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
  .state('swimsCreate', {
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
  });

  $urlRouterProvider.otherwise('/');
}
