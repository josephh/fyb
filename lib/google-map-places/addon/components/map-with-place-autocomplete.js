import Ember from 'ember';
import layout from '../templates/components/map-with-place-autocomplete';

const { isEmpty, isPresent, computed, observer, run } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['google-map'],

  init() {
    this._super();
  },

  didInsertElement() {
    this._super();
    if (isEmpty(this.get('map')) &&
    (typeof FastBoot === 'undefined')) {
      const canvas = this.$().find('.g-map-canvas').get(0);
      this.set('map', new google.maps.Map(canvas));
    }
    this.setZoom();
    this.setCenter();

    if( isEmpty(this.get('searchBox')) && typeof FastBoot === 'undefined' ) {
      const input = document.getElementById('pac-input');
      var searchBox = new google.maps.places.SearchBox(input);
      this.set('searchBox', searchBox);
      let map = this.get('map');
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
              });
      searchBox.addListener('places_changed', this.placesChanged.bind(this));
    }
  },

  placesChanged() {
    // move the map to the new location
    // get the place, set the formatted address and add a marker to the map

    // debugger;
    let searchBox = this.get('searchBox'), map = this.get('map');

    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    var markers = [];
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

  },

  permittedOptionsChanged: observer('permittedOptions', function() {
    run.once(this, 'setOptions');
  }),

  setOptions() {
    const map = this.get('map');
    const options = this.get('permittedOptions');
    if (isPresent(map)) {
      map.setOptions(options);
    }
  },

  zoomChanged: observer('zoom', function() {
    run.once(this, 'setZoom');
  }),

  setZoom() {
    const map = this.get('map');
    const zoom = this.get('zoom');
    if (isPresent(map)) {
      map.setZoom(zoom);
    }
  },

  coordsChanged: observer('lat', 'lng', function() {
    run.once(this, 'setCenter');
  }),

  setCenter() {
    const map = this.get('map');
    const lat = this.get('lat');
    const lng = this.get('lng');

    if (isPresent(map) &&
    isPresent(lat) &&
    isPresent(lng) &&
    (typeof FastBoot === 'undefined')) {
      const center = new google.maps.LatLng(lat, lng);
      map.setCenter(center);
    }
  },

  registerMarker(marker) {
    this.get('markers').addObject(marker);
  },

  unregisterMarker(marker) {
    this.get('markers').removeObject(marker);
  },

  registerPolyline(polyline) {
    this.get('polylines').addObject(polyline);
  },

  unregisterPolyline(polyline) {
    this.get('polylines').removeObject(polyline);
  },

  shouldFit: computed('markersFitMode', function() {
    return Ember.A(['init', 'live']).contains(this.get('markersFitMode'));
  }),

  markersChanged: observer('markers.@each.lat', 'markers.@each.lng', function() {
    if (this.get('markersFitMode') === 'live') {
      run.once(this, 'fitToMarkers');
    }
  }),

  fitToMarkers() {
    const markers = this.get('markers').filter((marker) => {
      return isPresent(marker.get('lat')) && isPresent(marker.get('lng'));
    });

    if (markers.length > 0 &&
      (typeof FastBoot === 'undefined')) {
        const map = this.get('map');
        const bounds = new google.maps.LatLngBounds();
        const points = markers.map((marker) => {
          return new google.maps.LatLng(marker.get('lat'), marker.get('lng'));
        });

        points.forEach((point) => bounds.extend(point));
        map.fitBounds(bounds);
      }
    },

    groupMarkerClicked(marker, group) {
      let markers = this.get('markers').without(marker).filterBy('group', group);
      markers.forEach((marker) => marker.closeInfowindow());
    }
  });
