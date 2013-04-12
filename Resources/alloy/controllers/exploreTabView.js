function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
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
    $.addTopLevelView($.__views.exploreTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;