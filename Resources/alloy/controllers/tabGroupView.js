function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroupView = Ti.UI.createTabGroup({
        id: "tabGroupView"
    });
    $.__views.__alloyId8 = Alloy.createController("homeTabView", {
        id: "__alloyId8"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId8.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId9 = Alloy.createController("exploreTabView", {
        id: "__alloyId9"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId9.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId10 = Alloy.createController("newsTabView", {
        id: "__alloyId10"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId10.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId11 = Alloy.createController("profileTabView", {
        id: "__alloyId11"
    });
    $.__views.tabGroupView.addTab($.__views.__alloyId11.getViewEx({
        recurse: !0
    }));
    $.addTopLevelView($.__views.tabGroupView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;