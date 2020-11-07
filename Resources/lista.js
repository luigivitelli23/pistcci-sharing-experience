const IMAGE_W = 4, IMAGE_H = 3;
var items = require('./interviste.json');
var createDettaglio = require('./intervista').createWindow;

var win = Ti.UI.createWindow({
    backgroundColor: '#d9d9d9'
});

var list = createList();
win.add(list);

exports.window = win;

function createList () {
    var scrollView = Ti.UI.createScrollView();

    var listView = Ti.UI.createView({
        layout: 'vertical',
        height: Ti.UI.SIZE,
        left: 8, right: 8, top: 8, bottom: 8
    })
    scrollView.add(listView);

    for(var i = 0; i<items.length; i++) {
        var row = createRow(items[i]);
        listView.add(row);
    }

    return scrollView;
}

function createRow(item) {

    var mainRow = Ti.UI.createView({
        backgroundColor: 'white',
        borderRadius: 6,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: 'vertical',
        left: 8, right: 8, top: 8, bottom: 8
    });

    var mainImage = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundImage: item.immagineCover
    });
    mainImage.addEventListener('postlayout', () => {
        mainImage.height = mainImage.size.width/IMAGE_W*IMAGE_H
    })
    mainRow.add(mainImage);

    var row = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: 'horizontal',
        right: 4, left: 4, top: 0, bottom: 4
    });
    mainRow.add(row)

    var image = Ti.UI.createView({
        width: 56,
        height: 56,
        borderRadius: 28,
        right: 8, left: 8, top: 12, bottom: 8
    });
    row.add(image);

    var picture = Ti.UI.createView({
        width: 56/IMAGE_H*IMAGE_W,
        height: 56,
        backgroundImage: item.immagineProfilo,
    })
    image.add(picture);

    var textLayout = Ti.UI.createView({
        top: 8,
        bottom: 8,
        right: 8,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: 'vertical'
    })
    row.add(textLayout);

    var title = Ti.UI.createLabel({
        color: 'black',
        font: {
            fontSize: 20
        },
        text: item.titolo,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
    });
    textLayout.add(title);

    var subtitle = Ti.UI.createLabel({
        color: 'black',
        font: {
            fontSize: 13
        },
        top: 4,
        text: item.intervistato + ': ' + item.abstract,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
    });
    textLayout.add(subtitle);

    mainRow.on('click', function () {
      createDettaglio(item);
    })
    return mainRow;
}

