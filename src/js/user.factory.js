angular
  .module('project-4-client')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    login: {method: 'POST', url: `${API}/login`},
    register: {method: 'POST', url: `${API}/register`}
  });
}
