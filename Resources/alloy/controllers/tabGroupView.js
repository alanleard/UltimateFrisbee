function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroupView = Ti.UI.createTabGroup({
        id: "tabGroupView"
    });
    $.__views.__alloyId22 = Alloy.createController("homeTabView", {
        id: "__alloyId22"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId22.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId23 = Alloy.createController("exploreTabView", {
        id: "__alloyId23"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId23.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId24 = Alloy.createController("newsTabView", {
        id: "__alloyId24"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId24.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId25 = Alloy.createController("profileTabView", {
        id: "__alloyId25"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId25.getViewEx({
        recurse: true
    }));
    $.__views.tabGroupView && $.addTopLevelView($.__views.tabGroupView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;