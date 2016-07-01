import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this.set('data', Ember.A([
      {
        value: 'metric',
        label: 'Metric',
        lengthUnits: [
          {
            text: 'centimetres',
            symbol: 'cm'
          },
          {
            text: 'millimetres',
            symbol: 'mm'
          }
        ],
        weightUnits: [
          {
            text: 'grams',
            symbol: 'g'
          },
          {
            text: 'milligrams',
            symbol: 'mg'
          }
        ]
      },
      {
        value: 'imperial',
        label: 'Imperial',
        lengthUnits: [
          {
            text: 'feet',
            symbol: '\''
          },
          {
            text: 'inches',
            symbol: '"'
          }
        ],
        weightUnits: [
          {
            text: 'pounds',
            symbol: 'lbs'
          },
          {
            text: 'ounces',
            symbol: 'oz'
          }
        ]
      }
    ]));
  }
});
