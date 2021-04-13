
var win = Ti.UI.createWindow({
  title: 'Pisticci sharing experience'
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
    bottom: 24,
})
scrollView.add(listView);

var cover = Ti.UI.createView({ height: Ti.UI.SIZE });
listView.add(cover);
cover.add(Ti.UI.createImageView({
  width: '100%',
  height: Ti.UI.SIZE,
  image: 'assets/images/app_cover.png'
}))

function addText(size, fontWeight, text) {
  listView.add(Ti.UI.createLabel({
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    left: 16, right: 16, top: 16, bottom: 4,
    text: text,
    font: {
      fontSize: size,
      fontWeight
    }
  }))
}

addText(12, null, 'progetto Pon 10.2 – Azione 10.2.2')
addText(12, null, 'PENSIERO COMPUTAZIONALE, CREATIVITA’ DIGITALE E di CITTADINANZA DIGITALE')

addText(24, 'bold', 'Diventa cittadino temporaneo di Pisticci');
addText(16, 'bold', 'Istituto comprensivo Padre Pio da Pietrelcina');
addText(12, null, 'Il progetto è un laboratorio formativo finalizzato all’apprendimento teorico/pratico di tecniche e metodologie innovative per l’empowerment della cittadinanza creativa e digitale e per la promozione e la valorizzazione territoriale. Il prodotto finale si declinerà in pacchetti di turismo esperienziale, costruiti insieme agli abitanti di Pisticci  che saranno promossi attraverso video interviste fruibili con un\'app per smartphone e tablet. Il progetto  intende stimolare gli studenti ad un uso creativo e sostenibile delle nuove tecnologie, e vuole offrire una formazione “civica” che consenta loro di utilizzare  in maniera critica e consapevole  gli strumenti digitali per la produzione e post-produzione di video e per la programmazione di app calandoli nel costesto sociale della comunità del teritorio.')

exports.window = win;