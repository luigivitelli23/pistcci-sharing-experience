function createWindow (photos, selected) {
  var win = Ti.UI.createWindow({
    backgroundColor: 'black'
  });
  var scrollableView = Ti.UI.createScrollableView({
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    views: photos.map(p => Ti.UI.createImageView({
      width: Ti.UI.FILL,
      image: p
    })),
    currentPage: selected,
  });
  win.add(scrollableView);
  win.addEventListener('open', function () {
    win.activity.actionBar.hide();
 });
  win.open();
}

exports.createWindow = createWindow;