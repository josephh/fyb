import Ember from 'ember';
import layout from '../templates/components/map-with-place-autocomplete';

const { typeOf, isEqual, isEmpty, isPresent, computed, observer, run } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['google-map'],

  init() {
    this._super();

    let component = this;

    // use google to get the current location and a geoObject
    let navigator = component.get('navigator') || window.navigator, google, geocoder;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        if(component.get('google')){
          // TODO - why is service not initialized and available here (via the addon)???
          console.log('registered google map service found');
          google = component.get('google');
          geocoder = new google.Geocoder();
        } else {
          google = window.google;
          geocoder = new google.maps.Geocoder();
        }
        geocoder.geocode( { location: {lat: position.coords.latitude, lng: position.coords.longitude} },
          function(resultArray, status) {
            if(resultArray.length > 0){
              let geoObject = resultArray[0];
              component.set('lat', geoObject.geometry.location.lat());
              component.set('lng', geoObject.geometry.location.lng());
              component.set('placeId', geoObject.place_id);
              component.set('formattedAddress', geoObject.formatted_address);
            }
          },
          function(err) {
            console.log(`Error in geocode() call.  Missing google api key? (Error details : ${err}`);
          }
        );
      });
    }
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
      let placeId = this.get('placeId');
      if(isPresent(placeId)) {  // initial marker once current position has been established and set
        this.setMarkerAndBounds();
      }
    }

  },

  willDestroy() {
      if (isPresent(this.get('map') || isPresent(this.get('searchBox')))) {
        let google = this.get('google') || window.google;
        google.maps.event.clearInstanceListeners(this.get('map'));
        google.maps.event.clearInstanceListeners(this.get('searchBox'));
      }
    },

  placeChanged: observer('placeId', function() {
    let map = this.get('map'), component = this;
    if(isPresent(map)){
      var service = new google.maps.places.PlacesService(map);
      service.getDetails({ placeId: this.get('placeId') }, function(place, status) {
        if(status ==  google.maps.places.PlacesServiceStatus.OK) {
          component.placesChanged(place);
        }
      });
    }
  }),

  placesChanged(place) {
    if(!place) {
      let searchBox = this.get('searchBox'), place, places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      } else {
        place = places[0]
      }
    }

    this.setMarkerAndBounds(place);

    this._callCallback('placeChangedCallback', place);
  },

  _callCallback(callback, place) {
    let callbackFn = this.attrs[callback];
    if (isEqual(typeOf(callbackFn), 'function')) {
      callbackFn(place);
    } else {
      let actionName = this.get(callback);
      if (isPresent(this.get('handlerController')) && isPresent(actionName)) {
        this.get('handlerController').send(actionName, place);
      }
    }
  },

  permittedOptionsChanged: observer('permittedOptions', function() {
    run.once(this, 'setOptions');
  }),

  setMarkerAndBounds(place) {
    let map = this.get('map'), marker = this.get('marker');

    // clear any previous
    if(isPresent(marker)) {
      marker.setMap(null);
    }
    // get the place's icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    var icon = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    // Create a marker for each place.
    this.set('marker', new google.maps.Marker({
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

    map.fitBounds(bounds);
  },

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
    const map = this.get('map'),
      lat = this.get('lat'),
      lng = this.get('lng');

    if (isPresent(map) &&
    isPresent(lat) &&
    isPresent(lng) &&
    (typeof FastBoot === 'undefined')) {
      const center = new google.maps.LatLng(lat, lng);
      map.setCenter(center);
    }
  }

  });
