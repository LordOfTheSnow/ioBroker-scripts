var callerName, caller;


// Display an incoming call via the Fritzbox TR064 protocol on a LG webOS TV
on({id: "tr-064.0.callmonitor.ringing"/*ringing*/, val: true}, async function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  if (getState("lgtv.0.info.connection").val == true) {
    // set Pause to 1s to give the adapter time to update caller,  callerName etc. Otherwise the variables below will still contain the values from the previous call
    await wait(1000);
    callerName = getState("tr-064.0.callmonitor.inbound.callerName").val;
    if (callerName == '') {
      callerName = 'unbekannt';
    }
    caller = getState("tr-064.0.callmonitor.inbound.caller").val;
    if (caller == '') {
      caller = 'unbekannte Rufnummer';
    }
    setState("lgtv.0.states.popup"/*Show popup text on TV*/, (['Anruf von ',callerName,' (',caller,') -> ',getState("tr-064.0.callmonitor.inbound.callee").val].join('')));
    setState("lgtv.0.states.volume"/*Current volume*/, 6);
  }
});
