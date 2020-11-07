
exports.execute = finished => {
  // Check if Google Play Services validation is enabled on startup. (Enabled by default.)
  // Can be disabled via "tiapp.xml" entry:
  // <ti:app>
  //   <property name="ti.playservices.validate.on.startup" type="bool">false</property>
  // </ti:app>
  const isEnabled = Ti.App.Properties.getBool('ti.playservices.validate.on.startup', true);
  if (!isEnabled) {
    finished();
    return;
  }

  // Check if Google Play Services is available (ie: installed/updated) on devices that support it.
  // If not available, will display Google's standard dialog asking end-user to install/update it.
  try {
    const PlayServices = require('ti.playservices');
    PlayServices.makeGooglePlayServicesAvailable(e => {
      if (e.success) {
        // Play Services is installed/updated. Proceed to load "app.js".
        finished();
      } else if (e.code === PlayServices.RESULT_SERVICE_INVALID) {
        // Device does not support Google Play (such as an Amazon device) or it's a hacked version.
        // Proceed to load "app.js". (It's impossible to install on device anyways.)
        finished();
      } else {
        // Exit the app, because the end-user refused to install/update Play Services when prompted.
        const activity = Ti.Android.currentActivity;
        if (activity) {
          activity.finish();
        }
      }
    });
  } catch (err) {
    Ti.API.error(err);
    finished();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpLnBsYXlzZXJ2aWNlcy5ib290c3RyYXAuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImV4ZWN1dGUiLCJmaW5pc2hlZCIsImlzRW5hYmxlZCIsIlRpIiwiQXBwIiwiUHJvcGVydGllcyIsImdldEJvb2wiLCJQbGF5U2VydmljZXMiLCJyZXF1aXJlIiwibWFrZUdvb2dsZVBsYXlTZXJ2aWNlc0F2YWlsYWJsZSIsImUiLCJzdWNjZXNzIiwiY29kZSIsIlJFU1VMVF9TRVJWSUNFX0lOVkFMSUQiLCJhY3Rpdml0eSIsIkFuZHJvaWQiLCJjdXJyZW50QWN0aXZpdHkiLCJmaW5pc2giLCJlcnIiLCJBUEkiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjtBQUNBQSxPQUFPLENBQUNDLE9BQVIsR0FBbUJDLFFBQUQsSUFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsVUFBUCxDQUFrQkMsT0FBbEIsQ0FBMEIscUNBQTFCLEVBQWlFLElBQWpFLENBQWxCO0FBQ0EsTUFBSSxDQUFDSixTQUFMLEVBQWdCO0FBQ2ZELElBQUFBLFFBQVE7QUFDUjtBQUNBOztBQUVEO0FBQ0E7QUFDQSxNQUFJO0FBQ0gsVUFBTU0sWUFBWSxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7QUFDQUQsSUFBQUEsWUFBWSxDQUFDRSwrQkFBYixDQUE4Q0MsQ0FBRCxJQUFPO0FBQ25ELFVBQUlBLENBQUMsQ0FBQ0MsT0FBTixFQUFlO0FBQ2Q7QUFDQVYsUUFBQUEsUUFBUTtBQUNSLE9BSEQsTUFHTyxJQUFJUyxDQUFDLENBQUNFLElBQUYsS0FBV0wsWUFBWSxDQUFDTSxzQkFBNUIsRUFBb0Q7QUFDMUQ7QUFDQTtBQUNBWixRQUFBQSxRQUFRO0FBQ1IsT0FKTSxNQUlBO0FBQ047QUFDQSxjQUFNYSxRQUFRLEdBQUdYLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXQyxlQUE1QjtBQUNBLFlBQUlGLFFBQUosRUFBYztBQUNiQSxVQUFBQSxRQUFRLENBQUNHLE1BQVQ7QUFDQTtBQUNEO0FBQ0QsS0FmRDtBQWdCQSxHQWxCRCxDQWtCRSxPQUFPQyxHQUFQLEVBQVk7QUFDYmYsSUFBQUEsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPQyxLQUFQLENBQWFGLEdBQWI7QUFDQWpCLElBQUFBLFFBQVE7QUFDUjtBQUNELENBcENEIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnRzLmV4ZWN1dGUgPSAoZmluaXNoZWQpID0+IHtcblx0Ly8gQ2hlY2sgaWYgR29vZ2xlIFBsYXkgU2VydmljZXMgdmFsaWRhdGlvbiBpcyBlbmFibGVkIG9uIHN0YXJ0dXAuIChFbmFibGVkIGJ5IGRlZmF1bHQuKVxuXHQvLyBDYW4gYmUgZGlzYWJsZWQgdmlhIFwidGlhcHAueG1sXCIgZW50cnk6XG5cdC8vIDx0aTphcHA+XG5cdC8vICAgPHByb3BlcnR5IG5hbWU9XCJ0aS5wbGF5c2VydmljZXMudmFsaWRhdGUub24uc3RhcnR1cFwiIHR5cGU9XCJib29sXCI+ZmFsc2U8L3Byb3BlcnR5PlxuXHQvLyA8L3RpOmFwcD5cblx0Y29uc3QgaXNFbmFibGVkID0gVGkuQXBwLlByb3BlcnRpZXMuZ2V0Qm9vbCgndGkucGxheXNlcnZpY2VzLnZhbGlkYXRlLm9uLnN0YXJ0dXAnLCB0cnVlKTtcblx0aWYgKCFpc0VuYWJsZWQpIHtcblx0XHRmaW5pc2hlZCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIENoZWNrIGlmIEdvb2dsZSBQbGF5IFNlcnZpY2VzIGlzIGF2YWlsYWJsZSAoaWU6IGluc3RhbGxlZC91cGRhdGVkKSBvbiBkZXZpY2VzIHRoYXQgc3VwcG9ydCBpdC5cblx0Ly8gSWYgbm90IGF2YWlsYWJsZSwgd2lsbCBkaXNwbGF5IEdvb2dsZSdzIHN0YW5kYXJkIGRpYWxvZyBhc2tpbmcgZW5kLXVzZXIgdG8gaW5zdGFsbC91cGRhdGUgaXQuXG5cdHRyeSB7XG5cdFx0Y29uc3QgUGxheVNlcnZpY2VzID0gcmVxdWlyZSgndGkucGxheXNlcnZpY2VzJyk7XG5cdFx0UGxheVNlcnZpY2VzLm1ha2VHb29nbGVQbGF5U2VydmljZXNBdmFpbGFibGUoKGUpID0+IHtcblx0XHRcdGlmIChlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0Ly8gUGxheSBTZXJ2aWNlcyBpcyBpbnN0YWxsZWQvdXBkYXRlZC4gUHJvY2VlZCB0byBsb2FkIFwiYXBwLmpzXCIuXG5cdFx0XHRcdGZpbmlzaGVkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGUuY29kZSA9PT0gUGxheVNlcnZpY2VzLlJFU1VMVF9TRVJWSUNFX0lOVkFMSUQpIHtcblx0XHRcdFx0Ly8gRGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgR29vZ2xlIFBsYXkgKHN1Y2ggYXMgYW4gQW1hem9uIGRldmljZSkgb3IgaXQncyBhIGhhY2tlZCB2ZXJzaW9uLlxuXHRcdFx0XHQvLyBQcm9jZWVkIHRvIGxvYWQgXCJhcHAuanNcIi4gKEl0J3MgaW1wb3NzaWJsZSB0byBpbnN0YWxsIG9uIGRldmljZSBhbnl3YXlzLilcblx0XHRcdFx0ZmluaXNoZWQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEV4aXQgdGhlIGFwcCwgYmVjYXVzZSB0aGUgZW5kLXVzZXIgcmVmdXNlZCB0byBpbnN0YWxsL3VwZGF0ZSBQbGF5IFNlcnZpY2VzIHdoZW4gcHJvbXB0ZWQuXG5cdFx0XHRcdGNvbnN0IGFjdGl2aXR5ID0gVGkuQW5kcm9pZC5jdXJyZW50QWN0aXZpdHk7XG5cdFx0XHRcdGlmIChhY3Rpdml0eSkge1xuXHRcdFx0XHRcdGFjdGl2aXR5LmZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdFRpLkFQSS5lcnJvcihlcnIpO1xuXHRcdGZpbmlzaGVkKCk7XG5cdH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9Vc2Vycy9sdWlnaXZpdGVsbGkvTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0L1RpdGFuaXVtL21vZHVsZXMvYW5kcm9pZC90aS5wbGF5c2VydmljZXMvMTcuMS4xL1Jlc291cmNlcy90aS5wbGF5c2VydmljZXMifQ==
