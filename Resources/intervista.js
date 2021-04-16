const IMAGE_W = 4, IMAGE_H = 4;
const Map = require('ti.map');
var openGallery = require('./gallery').createWindow;

function createWindow (intervista) {
  var win = Ti.UI.createWindow({
    title: intervista.titolo
  });
  win.on('open', function () {
    var actionbar = win.activity.actionBar;
    actionbar.displayHomeAsUp = true;
    actionbar.onHomeIconItemSelected = function() {
      win.close();
    };
  });

  var scrollView = Ti.UI.createScrollView();
  win.add(scrollView);

  var listView = Ti.UI.createView({
      layout: 'vertical',
      height: Ti.UI.SIZE,
      top: 0,
  })
  scrollView.add(listView);

  var cover = Ti.UI.createView({ height: Ti.UI.SIZE });
  listView.add(cover);
  cover.add(Ti.UI.createImageView({
    width: '100%',
    height: Ti.UI.SIZE,
    image: intervista.immagineCover
  }))
  cover.add(Ti.UI.createImageView({
    width: 50,
    height: Ti.UI.SIZE,
    image: 'assets/images/youtube.png'
  }));
  cover.on('click', () => Ti.Platform.openURL(intervista.linkVideo))

  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    left: 16, right: 16, top: 16, bottom: 4,
    text: intervista.intervistato,
    font: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  }))
  var image = Ti.UI.createView({
    width: 128,
    height: 128,
    borderRadius: 64,
    top: 4, bottom: 4
  });
  listView.add(image);
  image.add(Ti.UI.createView({
      width: 128/IMAGE_H*IMAGE_W,
      height: 128,
      backgroundImage: intervista.immagineProfilo,
  }));

  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, top: 16, bottom: 4,
    text: intervista.dove,
    font: {
      fontWeight: 'italic'
    }
  }))
  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, top: 4, bottom: 8,
    text: intervista.abstract,
    font: {
      fontWeight: 'bold'
    }
  }))
  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, bottom: 16,
    text: intervista.body,
    font: {
      fontSize: 16,
    }

  }))
  if(intervista.link) {
    var linkView = Ti.UI.createLabel({
      color: '#4286f4',
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE,
      left: 16, right: 16, top: 0, bottom: 8,
      text: intervista.link.label,
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
      font: {
        fontSize: 16,
      }
    })
    linkView.on('click', function () {
      Ti.Platform.openURL(intervista.link.url);
    })
    listView.add(linkView)
  }

  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, top: 8, bottom: 4,
    text: 'Galleria delle foto',
    font: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  }))
  listView.add(createGallery(intervista.foto));

  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, top: 8, bottom: 4,
    text: 'Dove',
    font: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  }))
  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    left: 16, right: 16, top: 0, bottom: 4,
    text: intervista.indirizzo,
    font: {
      fontSize: 16,
    }
  }))
  listView.add(Map.createView({
    height: 150,
    mapType: Map.SATELLITE_TYPE,
    region: {
      latitude: intervista.coordinate[0],
      longitude: intervista.coordinate[1],
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    },
    animate: true,
    regionFit: true,
    userLocation: false,
    bottom: 16,
    annotations: [Map.createAnnotation({
      latitude: intervista.coordinate[0],
      longitude: intervista.coordinate[1],
      pincolor: Map.ANNOTATION_RED,
    })]
  }))
  
  win.open();
}

function createGallery(photos) {
  const scroll = Ti.UI.createScrollView({
    height: Ti.UI.SIZE,
    width: Ti.UI.FILL,
    backgroundColor: '#121212',
    layout: 'horizontal',
    contentWidth: Ti.UI.SIZE,
    horizontalWrap: false,
    scrollType: 'horizontal',
    bottom: 16,
  });

  for(var i = 0; i<photos.length; i++) {
    const index = i;
    const imageView = Ti.UI.createImageView({
      height: 150,
      width: 200,
      image: photos[i],
      borderRadius: 8,
      left: i === 0 ? 16 : 4,
      right: i === photos.length-1 ? 16 : 4,
      top: 8, bottom: 8,
    })
    imageView.on('click', function () {
      openGallery(photos, index);
    })
    scroll.add(imageView)
  }
  return scroll;
}

exports.createWindow = createWindow;