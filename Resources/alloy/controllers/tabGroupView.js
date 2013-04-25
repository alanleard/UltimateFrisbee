function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroupView = Ti.UI.createTabGroup({
        id: "tabGroupView"
    });
    $.__views.__alloyId31 = Alloy.createController("homeTabView", {
        id: "__alloyId31"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId31.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId32 = Alloy.createController("exploreTabView", {
        id: "__alloyId32"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId32.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId33 = Alloy.createController("newsTabView", {
        id: "__alloyId33"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId33.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId34 = Alloy.createController("profileTabView", {
        id: "__alloyId34"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId34.getViewEx({
        recurse: true
    }));
    $.__views.tabGroupView && $.addTopLevelView($.__views.tabGroupView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;