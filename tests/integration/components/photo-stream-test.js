import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-stream', 'Integration | Component | photo stream', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photo-stream}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#photo-stream}}
      template block text
    {{/photo-stream}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
