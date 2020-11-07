
var win = Ti.UI.createWindow({
  title: 'Pisticci sharing experience' });

win.on('open', function () {
  var actionbar = win.activity.actionBar;
  actionbar.displayHomeAsUp = true;
  actionbar.onHomeIconItemSelected = function () {
    win.close();
  };
});

var scrollView = Ti.UI.createScrollView();
win.add(scrollView);

var listView = Ti.UI.createView({
  layout: 'vertical',
  height: Ti.UI.SIZE,
  top: 0,
  bottom: 24 });

scrollView.add(listView);

var cover = Ti.UI.createView({ height: Ti.UI.SIZE });
listView.add(cover);
cover.add(Ti.UI.createImageView({
  width: '100%',
  height: Ti.UI.SIZE,
  image: 'assets/images/interviste/felterino/gallery2.jpg' }));


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
      fontWeight } }));


}

addText(12, null, 'progetto Pon 10.2 – Azione 10.2.2');
addText(12, null, 'PENSIERO COMPUTAZIONALE, CREATIVITA’ DIGITALE E di CITTADINANZA DIGITALE');

addText(24, 'bold', 'Diventa cittadino temporaneo di Pisticci');
addText(16, 'bold', 'Istituto comprensivo Padre Pio da Pietrelcina');
addText(12, null, 'Il progetto è un laboratorio formativo finalizzato all’apprendimento teorico/pratico di tecniche e metodologie innovative per l’empowerment della cittadinanza creativa e digitale e per la promozione e la valorizzazione territoriale. Il prodotto finale si declinerà in pacchetti di turismo esperienziale, costruiti insieme agli abitanti di Pisticci  che saranno promossi attraverso video interviste fruibili con un\'app per smartphone e tablet. Il progetto  intende stimolare gli studenti ad un uso creativo e sostenibile delle nuove tecnologie, e vuole offrire una formazione “civica” che consenta loro di utilizzare  in maniera critica e consapevole  gli strumenti digitali per la produzione e post-produzione di video e per la programmazione di app calandoli nel costesto sociale della comunità del teritorio.');

exports.window = win;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsid2luIiwiVGkiLCJVSSIsImNyZWF0ZVdpbmRvdyIsInRpdGxlIiwib24iLCJhY3Rpb25iYXIiLCJhY3Rpdml0eSIsImFjdGlvbkJhciIsImRpc3BsYXlIb21lQXNVcCIsIm9uSG9tZUljb25JdGVtU2VsZWN0ZWQiLCJjbG9zZSIsInNjcm9sbFZpZXciLCJjcmVhdGVTY3JvbGxWaWV3IiwiYWRkIiwibGlzdFZpZXciLCJjcmVhdGVWaWV3IiwibGF5b3V0IiwiaGVpZ2h0IiwiU0laRSIsInRvcCIsImJvdHRvbSIsImNvdmVyIiwiY3JlYXRlSW1hZ2VWaWV3Iiwid2lkdGgiLCJpbWFnZSIsImFkZFRleHQiLCJzaXplIiwiZm9udFdlaWdodCIsInRleHQiLCJjcmVhdGVMYWJlbCIsImNvbG9yIiwiRklMTCIsInRleHRBbGlnbiIsIlRFWFRfQUxJR05NRU5UX0NFTlRFUiIsImxlZnQiLCJyaWdodCIsImZvbnQiLCJmb250U2l6ZSIsImV4cG9ydHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJQSxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNQyxZQUFOLENBQW1CO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUUsNkJBRG9CLEVBQW5CLENBQVY7O0FBR0FKLEdBQUcsQ0FBQ0ssRUFBSixDQUFPLE1BQVAsRUFBZSxZQUFZO0FBQ3pCLE1BQUlDLFNBQVMsR0FBR04sR0FBRyxDQUFDTyxRQUFKLENBQWFDLFNBQTdCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csZUFBVixHQUE0QixJQUE1QjtBQUNBSCxFQUFBQSxTQUFTLENBQUNJLHNCQUFWLEdBQW1DLFlBQVc7QUFDNUNWLElBQUFBLEdBQUcsQ0FBQ1csS0FBSjtBQUNELEdBRkQ7QUFHRCxDQU5EOztBQVFBLElBQUlDLFVBQVUsR0FBR1gsRUFBRSxDQUFDQyxFQUFILENBQU1XLGdCQUFOLEVBQWpCO0FBQ0FiLEdBQUcsQ0FBQ2MsR0FBSixDQUFRRixVQUFSOztBQUVBLElBQUlHLFFBQVEsR0FBR2QsRUFBRSxDQUFDQyxFQUFILENBQU1jLFVBQU4sQ0FBaUI7QUFDNUJDLEVBQUFBLE1BQU0sRUFBRSxVQURvQjtBQUU1QkMsRUFBQUEsTUFBTSxFQUFFakIsRUFBRSxDQUFDQyxFQUFILENBQU1pQixJQUZjO0FBRzVCQyxFQUFBQSxHQUFHLEVBQUUsQ0FIdUI7QUFJNUJDLEVBQUFBLE1BQU0sRUFBRSxFQUpvQixFQUFqQixDQUFmOztBQU1BVCxVQUFVLENBQUNFLEdBQVgsQ0FBZUMsUUFBZjs7QUFFQSxJQUFJTyxLQUFLLEdBQUdyQixFQUFFLENBQUNDLEVBQUgsQ0FBTWMsVUFBTixDQUFpQixFQUFFRSxNQUFNLEVBQUVqQixFQUFFLENBQUNDLEVBQUgsQ0FBTWlCLElBQWhCLEVBQWpCLENBQVo7QUFDQUosUUFBUSxDQUFDRCxHQUFULENBQWFRLEtBQWI7QUFDQUEsS0FBSyxDQUFDUixHQUFOLENBQVViLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNcUIsZUFBTixDQUFzQjtBQUM5QkMsRUFBQUEsS0FBSyxFQUFFLE1BRHVCO0FBRTlCTixFQUFBQSxNQUFNLEVBQUVqQixFQUFFLENBQUNDLEVBQUgsQ0FBTWlCLElBRmdCO0FBRzlCTSxFQUFBQSxLQUFLLEVBQUUsaURBSHVCLEVBQXRCLENBQVY7OztBQU1BLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxVQUF2QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDdkNkLEVBQUFBLFFBQVEsQ0FBQ0QsR0FBVCxDQUFhYixFQUFFLENBQUNDLEVBQUgsQ0FBTTRCLFdBQU4sQ0FBa0I7QUFDN0JDLElBQUFBLEtBQUssRUFBRSxPQURzQjtBQUU3QlAsSUFBQUEsS0FBSyxFQUFFdkIsRUFBRSxDQUFDQyxFQUFILENBQU04QixJQUZnQjtBQUc3QmQsSUFBQUEsTUFBTSxFQUFFakIsRUFBRSxDQUFDQyxFQUFILENBQU1pQixJQUhlO0FBSTdCYyxJQUFBQSxTQUFTLEVBQUVoQyxFQUFFLENBQUNDLEVBQUgsQ0FBTWdDLHFCQUpZO0FBSzdCQyxJQUFBQSxJQUFJLEVBQUUsRUFMdUIsRUFLbkJDLEtBQUssRUFBRSxFQUxZLEVBS1JoQixHQUFHLEVBQUUsRUFMRyxFQUtDQyxNQUFNLEVBQUUsQ0FMVDtBQU03QlEsSUFBQUEsSUFBSSxFQUFFQSxJQU51QjtBQU83QlEsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFFBQVEsRUFBRVgsSUFETjtBQUVKQyxNQUFBQSxVQUZJLEVBUHVCLEVBQWxCLENBQWI7OztBQVlEOztBQUVERixPQUFPLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxtQ0FBWCxDQUFQO0FBQ0FBLE9BQU8sQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLDBFQUFYLENBQVA7O0FBRUFBLE9BQU8sQ0FBQyxFQUFELEVBQUssTUFBTCxFQUFhLDBDQUFiLENBQVA7QUFDQUEsT0FBTyxDQUFDLEVBQUQsRUFBSyxNQUFMLEVBQWEsK0NBQWIsQ0FBUDtBQUNBQSxPQUFPLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyw2eUJBQVgsQ0FBUDs7QUFFQWEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCeEMsR0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciB3aW4gPSBUaS5VSS5jcmVhdGVXaW5kb3coe1xuICB0aXRsZTogJ1Bpc3RpY2NpIHNoYXJpbmcgZXhwZXJpZW5jZSdcbn0pO1xud2luLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICB2YXIgYWN0aW9uYmFyID0gd2luLmFjdGl2aXR5LmFjdGlvbkJhcjtcbiAgYWN0aW9uYmFyLmRpc3BsYXlIb21lQXNVcCA9IHRydWU7XG4gIGFjdGlvbmJhci5vbkhvbWVJY29uSXRlbVNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgd2luLmNsb3NlKCk7XG4gIH07XG59KTtcblxudmFyIHNjcm9sbFZpZXcgPSBUaS5VSS5jcmVhdGVTY3JvbGxWaWV3KCk7XG53aW4uYWRkKHNjcm9sbFZpZXcpO1xuXG52YXIgbGlzdFZpZXcgPSBUaS5VSS5jcmVhdGVWaWV3KHtcbiAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgaGVpZ2h0OiBUaS5VSS5TSVpFLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDI0LFxufSlcbnNjcm9sbFZpZXcuYWRkKGxpc3RWaWV3KTtcblxudmFyIGNvdmVyID0gVGkuVUkuY3JlYXRlVmlldyh7IGhlaWdodDogVGkuVUkuU0laRSB9KTtcbmxpc3RWaWV3LmFkZChjb3Zlcik7XG5jb3Zlci5hZGQoVGkuVUkuY3JlYXRlSW1hZ2VWaWV3KHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiBUaS5VSS5TSVpFLFxuICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvaW50ZXJ2aXN0ZS9mZWx0ZXJpbm8vZ2FsbGVyeTIuanBnJ1xufSkpXG5cbmZ1bmN0aW9uIGFkZFRleHQoc2l6ZSwgZm9udFdlaWdodCwgdGV4dCkge1xuICBsaXN0Vmlldy5hZGQoVGkuVUkuY3JlYXRlTGFiZWwoe1xuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIHdpZHRoOiBUaS5VSS5GSUxMLFxuICAgIGhlaWdodDogVGkuVUkuU0laRSxcbiAgICB0ZXh0QWxpZ246IFRpLlVJLlRFWFRfQUxJR05NRU5UX0NFTlRFUixcbiAgICBsZWZ0OiAxNiwgcmlnaHQ6IDE2LCB0b3A6IDE2LCBib3R0b206IDQsXG4gICAgdGV4dDogdGV4dCxcbiAgICBmb250OiB7XG4gICAgICBmb250U2l6ZTogc2l6ZSxcbiAgICAgIGZvbnRXZWlnaHRcbiAgICB9XG4gIH0pKVxufVxuXG5hZGRUZXh0KDEyLCBudWxsLCAncHJvZ2V0dG8gUG9uIDEwLjIg4oCTIEF6aW9uZSAxMC4yLjInKVxuYWRkVGV4dCgxMiwgbnVsbCwgJ1BFTlNJRVJPIENPTVBVVEFaSU9OQUxFLCBDUkVBVElWSVRB4oCZIERJR0lUQUxFIEUgZGkgQ0lUVEFESU5BTlpBIERJR0lUQUxFJylcblxuYWRkVGV4dCgyNCwgJ2JvbGQnLCAnRGl2ZW50YSBjaXR0YWRpbm8gdGVtcG9yYW5lbyBkaSBQaXN0aWNjaScpO1xuYWRkVGV4dCgxNiwgJ2JvbGQnLCAnSXN0aXR1dG8gY29tcHJlbnNpdm8gUGFkcmUgUGlvIGRhIFBpZXRyZWxjaW5hJyk7XG5hZGRUZXh0KDEyLCBudWxsLCAnSWwgcHJvZ2V0dG8gw6ggdW4gbGFib3JhdG9yaW8gZm9ybWF0aXZvIGZpbmFsaXp6YXRvIGFsbOKAmWFwcHJlbmRpbWVudG8gdGVvcmljby9wcmF0aWNvIGRpIHRlY25pY2hlIGUgbWV0b2RvbG9naWUgaW5ub3ZhdGl2ZSBwZXIgbOKAmWVtcG93ZXJtZW50IGRlbGxhIGNpdHRhZGluYW56YSBjcmVhdGl2YSBlIGRpZ2l0YWxlIGUgcGVyIGxhIHByb21vemlvbmUgZSBsYSB2YWxvcml6emF6aW9uZSB0ZXJyaXRvcmlhbGUuIElsIHByb2RvdHRvIGZpbmFsZSBzaSBkZWNsaW5lcsOgIGluIHBhY2NoZXR0aSBkaSB0dXJpc21vIGVzcGVyaWVuemlhbGUsIGNvc3RydWl0aSBpbnNpZW1lIGFnbGkgYWJpdGFudGkgZGkgUGlzdGljY2kgIGNoZSBzYXJhbm5vIHByb21vc3NpIGF0dHJhdmVyc28gdmlkZW8gaW50ZXJ2aXN0ZSBmcnVpYmlsaSBjb24gdW5cXCdhcHAgcGVyIHNtYXJ0cGhvbmUgZSB0YWJsZXQuIElsIHByb2dldHRvICBpbnRlbmRlIHN0aW1vbGFyZSBnbGkgc3R1ZGVudGkgYWQgdW4gdXNvIGNyZWF0aXZvIGUgc29zdGVuaWJpbGUgZGVsbGUgbnVvdmUgdGVjbm9sb2dpZSwgZSB2dW9sZSBvZmZyaXJlIHVuYSBmb3JtYXppb25lIOKAnGNpdmljYeKAnSBjaGUgY29uc2VudGEgbG9ybyBkaSB1dGlsaXp6YXJlICBpbiBtYW5pZXJhIGNyaXRpY2EgZSBjb25zYXBldm9sZSAgZ2xpIHN0cnVtZW50aSBkaWdpdGFsaSBwZXIgbGEgcHJvZHV6aW9uZSBlIHBvc3QtcHJvZHV6aW9uZSBkaSB2aWRlbyBlIHBlciBsYSBwcm9ncmFtbWF6aW9uZSBkaSBhcHAgY2FsYW5kb2xpIG5lbCBjb3N0ZXN0byBzb2NpYWxlIGRlbGxhIGNvbXVuaXTDoCBkZWwgdGVyaXRvcmlvLicpXG5cbmV4cG9ydHMud2luZG93ID0gd2luOyJdLCJzb3VyY2VSb290IjoiL1VzZXJzL2x1aWdpdml0ZWxsaS90aXRhbml1bS1wcm9qL1Bpc3RpY2NpRXhwZXJpZW5jZS9SZXNvdXJjZXMifQ==
