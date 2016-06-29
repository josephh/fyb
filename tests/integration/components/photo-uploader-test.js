import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-uploader', 'Integration | Component | photo uploader', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photo-uploader}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#photo-uploader}}
      template block text
    {{/photo-uploader}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
