export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route:index', 'authService', 'service:authentication');
  application.inject('route:users', 'authService', 'service:authentication');
}

export default {
  name: 'authentication',
  initialize
};
