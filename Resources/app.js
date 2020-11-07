var mappa = require('./mappa').window;
var tabMappa = Ti.UI.createTab({
    titleColor: '#ffffff',
    activeTitleColor: '#ffffff',
    window: mappa,
    title: 'Intorno a te'
});

var lista = require('./lista').window;
var tabLista = Ti.UI.createTab({
    titleColor: '#ffffff',
    activeTitleColor: '#ffffff',
    window: lista,
    title: 'Tutti'
});

tabGroup = Ti.UI.createTabGroup({
    title: 'Pisticci Sharing Experience',
    color: '#ffffff',
    tabs: [tabMappa, tabLista]
});

tabGroup.activity.onCreateOptionsMenu = function(e) { 
    var menu = e.menu; 
    var menuItem = menu.add({
        icon: "assets/images/book-information-variant.png", 
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM 
    }); 
    menuItem.addEventListener("click", function(e) { 
        require('./info').window.open();
    }); 
};
tabGroup.open();

