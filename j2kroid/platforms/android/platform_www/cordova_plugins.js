cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-adcolony.AdColony",
      "file": "plugins/cordova-plugin-adcolony/www/AdColony.js",
      "pluginId": "cordova-plugin-adcolony",
      "clobbers": [
        "window.AdColony"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-adcolony": "2.0.0"
  };
});