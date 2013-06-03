function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroupView = Ti.UI.createTabGroup({
        id: "tabGroupView"
    });
    $.__views.__alloyId29 = Alloy.createController("tabView/homeTabView", {
        id: "__alloyId29"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId29.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId30 = Alloy.createController("tabView/exploreTabView", {
        id: "__alloyId30"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId30.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId31 = Alloy.createController("tabView/newsTabView", {
        id: "__alloyId31"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId31.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId32 = Alloy.createController("tabView/profileTabView", {
        id: "__alloyId32"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId32.getViewEx({
        recurse: true
    }));
    $.__views.tabGroupView && $.addTopLevelView($.__views.tabGroupView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;