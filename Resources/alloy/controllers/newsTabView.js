function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.newsWin = Ti.UI.createWindow({
        id: "newsWin"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "News!",
        id: "label1",
        color: "#999"
    });
    $.__views.newsWin.add($.__views.label1);
    $.__views.newsTab = Ti.UI.createTab({
        window: $.__views.newsWin,
        id: "newsTab",
        title: "News Feed"
    });
    $.addTopLevelView($.__views.newsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;