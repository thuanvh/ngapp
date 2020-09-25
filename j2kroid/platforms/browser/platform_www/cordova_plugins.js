cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-adcolony/www/AdColony.js",
        "id": "cordova-plugin-adcolony.AdColony",
        "pluginId": "cordova-plugin-adcolony",
        "clobbers": [
            "window.AdColony"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-adcolony": "2.0.0"
}
// BOTTOM OF METADATA
});