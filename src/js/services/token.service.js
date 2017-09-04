angular
  .module('project-4-client')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {
  const self = this;

  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };

  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };

  self.decodeToken = () => {
    // get token from localStorage.
    const token = self.getToken();

    // if there is a token inside localStorage, decode the payload from it and return it when the function is called, return null if there is no token inside localStorage.
    return token ? jwtHelper.decodeToken(token) : null;
  };

  self.removeToken = () => {
    $window.localStorage.clear();
  };
}
