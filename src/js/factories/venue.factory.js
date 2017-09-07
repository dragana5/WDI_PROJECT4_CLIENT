angular
  .module('project-4-client')
  .factory('Venue', venueFactory);

venueFactory.$inject = ['API', '$resource'];
function venueFactory(API, $resource){
  return $resource(`${API}/venues/:id`, { id: '@_id'},{
    update: {method: 'PUT'}
  });
}
