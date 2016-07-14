export function initialize(application) {
// TODO figure out what's wrong - this registration doesn't seem to fire, or inject this service correctly
  application.register('google:main', window.google, { instantiate: false });
  application.inject('component', 'google', 'google:main');
}

export default {
  name: 'register-google',
  initialize: initialize
};
