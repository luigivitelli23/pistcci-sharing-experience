const Map = require('ti.map');
var items = require('./interviste.json');
var createDettaglio = require('./intervista').createWindow;

var win = Ti.UI.createWindow();

const map = Map.createView({
  mapType: Map.SATELLITE_TYPE,
  region: getRegion(items),
  animate: true,
  regionFit: true,
  userLocation: true,
  annotations: createPins()
});
map.addEventListener('click', function(event) {
  var s = event.clicksource;
  if(s == 'infoWindow' || s == 'title' || s == 'subtitle') {
    createDettaglio(items[event.annotation.index]);
  }
});
win.add(map);

function createPins() {
  var annotations = [];
  for(var i = 0; i<items.length; i++) {
    var item = items[i];

    annotations[i] = Map.createAnnotation({
      latitude: item.coordinate[0],
      longitude: item.coordinate[1],
      title: item.titolo,
      subtitle: item.intervistato,
      pincolor: Map.ANNOTATION_RED,
      index: i
    });
  }
  return annotations;
}

function getRegion (items) {
  var maxCoords = [-10000, -10000];
  var minCoords = [10000, 10000]
  for (var i = 0; i<items.length; i++) {
    var item = items[i];
    if(item.coordinate[0] > maxCoords[0]) {
      maxCoords[0] = item.coordinate[0]
    }
    if(item.coordinate[0] < minCoords[0]) {
      minCoords[0] = item.coordinate[0]
    }
    if(item.coordinate[1] > maxCoords[1]) {
      maxCoords[1] = item.coordinate[1]
    }
    if(item.coordinate[1] < minCoords[1]) {
      minCoords[1] = item.coordinate[1]
    }
  }
  return {
    latitude: (maxCoords[0] - minCoords[0]) / 2 + minCoords[0],
    longitude: (maxCoords[1] - minCoords[1]) / 2 + minCoords[1],
    latitudeDelta: Math.max((maxCoords[0] - minCoords[0]) * 2, 0.01),
    longitudeDelta: Math.max((maxCoords[1] - minCoords[1]) * 2, 0.01),
  };
}

exports.window = win;