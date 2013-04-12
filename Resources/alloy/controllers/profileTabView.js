function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.profileWin = Ti.UI.createWindow({
        id: "profileWin"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "Profile!",
        id: "label1",
        color: "#999"
    });
    $.__views.profileWin.add($.__views.label1);
    $.__views.profileTab = Ti.UI.createTab({
        window: $.__views.profileWin,
        id: "profileTab",
        title: "Profile"
    });
    $.addTopLevelView($.__views.profileTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;