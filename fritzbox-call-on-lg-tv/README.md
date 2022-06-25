# fritzbox-call-on-lg-tv

## What is it?

A script for ioBroker to display an incoming phone call via the Fritzbox TR-064 protocol as a popup on a LG webOS TV.

## Requirements

* ioBroker (see https://iobroker.net)
  * Adapter: AVM TR-064 (tr-064)
    * Object: tr-064.0.callmonitor.ringing
    * Object: tr-064.0.callmonitor.inbound.callee
    * Object: tr-064.0.callmonitor.inbound.caller
    * Object: tr-064.0.callmonitor.inbound.callerName
  * Adapter: LG WebOS SmartTV (lgtv)
    * Object: lgtv.0.states.popup
    * lgtv.0.states.volume
  * Adapter: Scripts (javascript)

* **The Fritzbox call monitor needs to be enabled for this to work**. It can be enabled dialing `#96*5*`on a phone connected to the Fritzbox. The tr-064 instance also needs a Fritzbox user with at least `Smart Home` rights. Internet access should **not** be given to this user (unless neccessary for some good reason).
* When setting up the adapter for the LG TV, you need to confirm access of the script to your TV as shown on the TV display.
* Both devices should be in the same network of course.

This is no ioBroker / Blockly documentation. So see there (well, is there any usable ioBroker documentation at all???) how to set up ioBroker and its adapters / instances.

## Files provided

### displayCalls.js

This code has been copied directly from the Blockly/JS display and can be just copied/pasted into an editor window when you create a new **JavaScript** script.

### displayCalls.xml

This file has been exported directly from the Blockly editor and can be imported with the import button when you create a new **Blockly** script.

### displayCalls.png

Just here for documentation purposes. You can have a look how this script looks like in the Blockly editor

## Disclaimer

The author assumes no responsibility or liability for any errors or omissions in the content of these files. The information contained in these files is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness or timeliness.
