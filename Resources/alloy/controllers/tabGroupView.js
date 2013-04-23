function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroupView = Ti.UI.createTabGroup({
        id: "tabGroupView"
    });
    $.__views.__alloyId24 = Alloy.createController("homeTabView", {
        id: "__alloyId24"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId24.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId25 = Alloy.createController("exploreTabView", {
        id: "__alloyId25"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId25.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId26 = Alloy.createController("newsTabView", {
        id: "__alloyId26"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId26.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId27 = Alloy.createController("profileTabView", {
        id: "__alloyId27"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.tabGroupView && $.addTopLevelView($.__views.tabGroupView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;