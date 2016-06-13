import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lightbox-entry', 'Integration | Component | lightbox entry', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lightbox-entry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lightbox-entry}}
      template block text
    {{/lightbox-entry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
