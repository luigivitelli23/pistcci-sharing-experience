const MAX_RETRY = 1;

function makeGooglePlayServicesAvailable(callback, _retry = 0) {
  let result = {
    success: false,
    code: undefined,
    message: undefined };


  // Attempt to load ti.playservices module if available.
  try {
    const PlayServices = require('ti.playservices');
    const playServicesResult = PlayServices.isGooglePlayServicesAvailable();
    const playServicesVersion = PlayServices.GOOGLE_PLAY_SERVICES_VERSION_CODE;

    // Listener callback to determine when the user has returned to the app
    function playServicesResume() {
      Ti.App.removeEventListener('resume', playServicesResume);
      makeGooglePlayServicesAvailable(callback, ++_retry);
    }

    // Google Play Services is available.
    result.code = playServicesResult;
    if (playServicesResult === PlayServices.RESULT_SUCCESS) {
      result.success = true;
      result.message = `Google Play Services is available. (version: ${playServicesVersion})`;
    } else {
      result.success = false;
      result.message = `Google Play Services is unavailable. (${PlayServices.getErrorString(playServicesResult)})`;

      switch (playServicesResult) {

        // Google Play Services is missing or outdated.
        // Attempt to open Google Play store so user can install latest.
        case PlayServices.RESULT_SERVICE_MISSING:
        case PlayServices.RESULT_SERVICE_VERSION_UPDATE_REQUIRED:
        case PlayServices.RESULT_SERVICE_UPDATING:
          if (_retry < MAX_RETRY) {
            const installPlayServicesIntent = Ti.Android.createIntent({
              action: Ti.Android.ACTION_VIEW,
              data: 'market://details?id=com.google.android.gms' });

            Ti.Android.currentActivity.startActivity(installPlayServicesIntent);

            setTimeout(() => {
              Ti.App.addEventListener('resume', playServicesResume);
            }, 1000);
            return;
          }
          break;

        // Google Play Services has been disabled.
        // Attempt to open Google Play Services app info so user can re-enable.
        case PlayServices.RESULT_SERVICE_DISABLED:
          if (_retry < MAX_RETRY) {
            const detailPlayServicesIntent = Ti.Android.createIntent({
              action: 'android.settings.APPLICATION_DETAILS_SETTINGS',
              flags: Ti.Android.FLAG_ACTIVITY_NEW_TASK,
              data: 'package:com.google.android.gms' });

            Ti.Android.currentActivity.startActivity(detailPlayServicesIntent);

            setTimeout(() => {
              Ti.App.addEventListener('resume', playServicesResume);
            }, 1000);
            return;
          }
          break;

        // Google Play Services is invalid.
        // This could be running on an unsupported device.
        case PlayServices.RESULT_SERVICE_INVALID:
          result.message += '\nThis could be an unsupported device.';
          break;}

    }

    // Google Play Services is not available...
  } catch (e) {
    result.success = false;
    result.message = 'Could not load \'ti.playservices\' module.';
  }

  Ti.API.info(`ti.playservices: ${result.message}`);
  callback(result);
}

module.exports = {
  makeGooglePlayServicesAvailable };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpLnBsYXlzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJNQVhfUkVUUlkiLCJtYWtlR29vZ2xlUGxheVNlcnZpY2VzQXZhaWxhYmxlIiwiY2FsbGJhY2siLCJfcmV0cnkiLCJyZXN1bHQiLCJzdWNjZXNzIiwiY29kZSIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJQbGF5U2VydmljZXMiLCJyZXF1aXJlIiwicGxheVNlcnZpY2VzUmVzdWx0IiwiaXNHb29nbGVQbGF5U2VydmljZXNBdmFpbGFibGUiLCJwbGF5U2VydmljZXNWZXJzaW9uIiwiR09PR0xFX1BMQVlfU0VSVklDRVNfVkVSU0lPTl9DT0RFIiwicGxheVNlcnZpY2VzUmVzdW1lIiwiVGkiLCJBcHAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUkVTVUxUX1NVQ0NFU1MiLCJnZXRFcnJvclN0cmluZyIsIlJFU1VMVF9TRVJWSUNFX01JU1NJTkciLCJSRVNVTFRfU0VSVklDRV9WRVJTSU9OX1VQREFURV9SRVFVSVJFRCIsIlJFU1VMVF9TRVJWSUNFX1VQREFUSU5HIiwiaW5zdGFsbFBsYXlTZXJ2aWNlc0ludGVudCIsIkFuZHJvaWQiLCJjcmVhdGVJbnRlbnQiLCJhY3Rpb24iLCJBQ1RJT05fVklFVyIsImRhdGEiLCJjdXJyZW50QWN0aXZpdHkiLCJzdGFydEFjdGl2aXR5Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJSRVNVTFRfU0VSVklDRV9ESVNBQkxFRCIsImRldGFpbFBsYXlTZXJ2aWNlc0ludGVudCIsImZsYWdzIiwiRkxBR19BQ1RJVklUWV9ORVdfVEFTSyIsIlJFU1VMVF9TRVJWSUNFX0lOVkFMSUQiLCJlIiwiQVBJIiwiaW5mbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFNBQVMsR0FBRyxDQUFsQjs7QUFFQSxTQUFTQywrQkFBVCxDQUEwQ0MsUUFBMUMsRUFBb0RDLE1BQU0sR0FBRyxDQUE3RCxFQUFnRTtBQUMvRCxNQUFJQyxNQUFNLEdB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O0FBRUQ7QUFDQSxHQXBFRCxDQW9FRSxPQUFPK0IsQ0FBUCxFQUFVO0FBQ1huQyxJQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsS0FBakI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDSSxPQUFQLEdBQWlCLDRDQUFqQjtBQUNBOztBQUVEUSxFQUFBQSxFQUFFLENBQUN3QixHQUFILENBQU9DLElBQVAsQ0FBYSxvQkFBbUJyQyxNQUFNLENBQUNJLE9BQVEsRUFBL0M7QUFDQU4sRUFBQUEsUUFBUSxDQUFDRSxNQUFELENBQVI7QUFDQTs7QUFFRHNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQjFDLEVBQUFBLCtCQURnQixFQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1BWF9SRVRSWSA9IDE7XG5cbmZ1bmN0aW9uIG1ha2VHb29nbGVQbGF5U2VydmljZXNBdmFpbGFibGUgKGNhbGxiYWNrLCBfcmV0cnkgPSAwKSB7XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0Y29kZTogdW5kZWZpbmVkLFxuXHRcdG1lc3NhZ2U6IHVuZGVmaW5lZFxuXHR9O1xuXG5cdC8vIEF0dGVtcHQgdG8gbG9hZCB0aS5wbGF5c2VydmljZXMgbW9kdWxlIGlmIGF2YWlsYWJsZS5cblx0dHJ5IHtcblx0XHRjb25zdCBQbGF5U2VydmljZXMgPSByZXF1aXJlKCd0aS5wbGF5c2VydmljZXMnKTtcblx0XHRjb25zdCBwbGF5U2VydmljZXNSZXN1bHQgPSBQbGF5U2VydmljZXMuaXNHb29nbGVQbGF5U2VydmljZXNBdmFpbGFibGUoKTtcblx0XHRjb25zdCBwbGF5U2VydmljZXNWZXJzaW9uID0gUGxheVNlcnZpY2VzLkdPT0dMRV9QTEFZX1NFUlZJQ0VTX1ZFUlNJT05fQ09ERTtcblxuXHRcdC8vIExpc3RlbmVyIGNhbGxiYWNrIHRvIGRldGVybWluZSB3aGVuIHRoZSB1c2VyIGhhcyByZXR1cm5lZCB0byB0aGUgYXBwXG5cdFx0ZnVuY3Rpb24gcGxheVNlcnZpY2VzUmVzdW1lICgpIHtcblx0XHRcdFRpLkFwcC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXN1bWUnLCBwbGF5U2VydmljZXNSZXN1bWUpO1xuXHRcdFx0bWFrZUdvb2dsZVBsYXlTZXJ2aWNlc0F2YWlsYWJsZShjYWxsYmFjaywgKytfcmV0cnkpO1xuXHRcdH1cblxuXHRcdC8vIEdvb2dsZSBQbGF5IFNlcnZpY2VzIGlzIGF2YWlsYWJsZS5cblx0XHRyZXN1bHQuY29kZSA9IHBsYXlTZXJ2aWNlc1Jlc3VsdDtcblx0XHRpZiAocGxheVNlcnZpY2VzUmVzdWx0ID09PSBQbGF5U2VydmljZXMuUkVTVUxUX1NVQ0NFU1MpIHtcblx0XHRcdHJlc3VsdC5zdWNjZXNzID0gdHJ1ZTtcblx0XHRcdHJlc3VsdC5tZXNzYWdlID0gYEdvb2dsZSBQbGF5IFNlcnZpY2VzIGlzIGF2YWlsYWJsZS4gKHZlcnNpb246ICR7cGxheVNlcnZpY2VzVmVyc2lvbn0pYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnN1Y2Nlc3MgPSBmYWxzZTtcblx0XHRcdHJlc3VsdC5tZXNzYWdlID0gYEdvb2dsZSBQbGF5IFNlcnZpY2VzIGlzIHVuYXZhaWxhYmxlLiAoJHtQbGF5U2VydmljZXMuZ2V0RXJyb3JTdHJpbmcocGxheVNlcnZpY2VzUmVzdWx0KX0pYDtcblxuXHRcdFx0c3dpdGNoIChwbGF5U2VydmljZXNSZXN1bHQpIHtcblxuXHRcdFx0XHQvLyBHb29nbGUgUGxheSBTZXJ2aWNlcyBpcyBtaXNzaW5nIG9yIG91dGRhdGVkLlxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIG9wZW4gR29vZ2xlIFBsYXkgc3RvcmUgc28gdXNlciBjYW4gaW5zdGFsbCBsYXRlc3QuXG5cdFx0XHRcdGNhc2UgUGxheVNlcnZpY2VzLlJFU1VMVF9TRVJWSUNFX01JU1NJTkc6XG5cdFx0XHRcdGNhc2UgUGxheVNlcnZpY2VzLlJFU1VMVF9TRVJWSUNFX1ZFUlNJT05fVVBEQVRFX1JFUVVJUkVEOlxuXHRcdFx0XHRjYXNlIFBsYXlTZXJ2aWNlcy5SRVNVTFRfU0VSVklDRV9VUERBVElORzpcblx0XHRcdFx0XHRpZiAoX3JldHJ5IDwgTUFYX1JFVFJZKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbnN0YWxsUGxheVNlcnZpY2VzSW50ZW50ID0gVGkuQW5kcm9pZC5jcmVhdGVJbnRlbnQoe1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246IFRpLkFuZHJvaWQuQUNUSU9OX1ZJRVcsXG5cdFx0XHRcdFx0XHRcdGRhdGE6ICdtYXJrZXQ6Ly9kZXRhaWxzP2lkPWNvbS5nb29nbGUuYW5kcm9pZC5nbXMnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFRpLkFuZHJvaWQuY3VycmVudEFjdGl2aXR5LnN0YXJ0QWN0aXZpdHkoaW5zdGFsbFBsYXlTZXJ2aWNlc0ludGVudCk7XG5cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRUaS5BcHAuYWRkRXZlbnRMaXN0ZW5lcigncmVzdW1lJywgcGxheVNlcnZpY2VzUmVzdW1lKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdC8vIEdvb2dsZSBQbGF5IFNlcnZpY2VzIGhhcyBiZWVuIGRpc2FibGVkLlxuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gb3BlbiBHb29nbGUgUGxheSBTZXJ2aWNlcyBhcHAgaW5mbyBzbyB1c2VyIGNhbiByZS1lbmFibGUuXG5cdFx0XHRcdGNhc2UgUGxheVNlcnZpY2VzLlJFU1VMVF9TRVJWSUNFX0RJU0FCTEVEOlxuXHRcdFx0XHRcdGlmIChfcmV0cnkgPCBNQVhfUkVUUlkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGRldGFpbFBsYXlTZXJ2aWNlc0ludGVudCA9IFRpLkFuZHJvaWQuY3JlYXRlSW50ZW50KHtcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnYW5kcm9pZC5zZXR0aW5ncy5BUFBMSUNBVElPTl9ERVRBSUxTX1NFVFRJTkdTJyxcblx0XHRcdFx0XHRcdFx0ZmxhZ3M6IFRpLkFuZHJvaWQuRkxBR19BQ1RJVklUWV9ORVdfVEFTSyxcblx0XHRcdFx0XHRcdFx0ZGF0YTogJ3BhY2thZ2U6Y29tLmdvb2dsZS5hbmRyb2lkLmdtcydcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0VGkuQW5kcm9pZC5jdXJyZW50QWN0aXZpdHkuc3RhcnRBY3Rpdml0eShkZXRhaWxQbGF5U2VydmljZXNJbnRlbnQpO1xuXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0VGkuQXBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc3VtZScsIHBsYXlTZXJ2aWNlc1Jlc3VtZSk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHQvLyBHb29nbGUgUGxheSBTZXJ2aWNlcyBpcyBpbnZhbGlkLlxuXHRcdFx0XHRcdC8vIFRoaXMgY291bGQgYmUgcnVubmluZyBvbiBhbiB1bnN1cHBvcnRlZCBkZXZpY2UuXG5cdFx0XHRcdGNhc2UgUGxheVNlcnZpY2VzLlJFU1VMVF9TRVJWSUNFX0lOVkFMSUQ6XG5cdFx0XHRcdFx0cmVzdWx0Lm1lc3NhZ2UgKz0gJ1xcblRoaXMgY291bGQgYmUgYW4gdW5zdXBwb3J0ZWQgZGV2aWNlLic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gR29vZ2xlIFBsYXkgU2VydmljZXMgaXMgbm90IGF2YWlsYWJsZS4uLlxuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmVzdWx0LnN1Y2Nlc3MgPSBmYWxzZTtcblx0XHRyZXN1bHQubWVzc2FnZSA9ICdDb3VsZCBub3QgbG9hZCBcXCd0aS5wbGF5c2VydmljZXNcXCcgbW9kdWxlLic7XG5cdH1cblxuXHRUaS5BUEkuaW5mbyhgdGkucGxheXNlcnZpY2VzOiAke3Jlc3VsdC5tZXNzYWdlfWApO1xuXHRjYWxsYmFjayhyZXN1bHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0bWFrZUdvb2dsZVBsYXlTZXJ2aWNlc0F2YWlsYWJsZVxufTtcbiJdLCJzb3VyY2VSb290IjoiL1VzZXJzL2x1aWdpdml0ZWxsaS9MaWJyYXJ5L0FwcGxpY2F0aW9uIFN1cHBvcnQvVGl0YW5pdW0vbW9kdWxlcy9hbmRyb2lkL3RpLnBsYXlzZXJ2aWNlcy8xNy4xLjEvUmVzb3VyY2VzL3RpLnBsYXlzZXJ2aWNlcyJ9
