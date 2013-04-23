function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.exploreWin = Ti.UI.createWindow({
        id: "exploreWin"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "Explore!",
        id: "label1",
        color: "#999"
    });
    $.__views.exploreWin.add($.__views.label1);
    $.__views.exploreTab = Ti.UI.createTab({
        window: $.__views.exploreWin,
        id: "exploreTab",
        title: "Explore"
    });
    $.__views.exploreTab && $.addTopLevelView($.__views.exploreTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;