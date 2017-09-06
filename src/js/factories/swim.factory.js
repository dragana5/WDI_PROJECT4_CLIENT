angular
  .module('project-4-client')
  .factory('Swim', swimFactory);

swimFactory.$inject = ['API', '$resource'];
function swimFactory(API, $resource){
  return $resource(`${API}/swims/:id`, { id: '@_id'},{
  'update': {method: 'PUT'}
});
}
