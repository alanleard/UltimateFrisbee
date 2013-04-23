function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeWin = Ti.UI.createWindow({
        id: "homeWin"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "Home",
        id: "label1",
        color: "#999"
    });
    $.__views.homeWin.add($.__views.label1);
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.homeWin,
        id: "homeTab",
        title: "Home"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti.cloud");
    var args = arguments[0] || {};
    args.customTitle || "home";
    new Array("Home", "Explore", "News", "Profile");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;