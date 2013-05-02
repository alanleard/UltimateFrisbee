function Controller() {
    function logout() {
        Cloud.Users.logout(function(e) {
            e.success ? Alloy.createController("index").getView().open() : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.label1 = Ti.UI.createLabel({
        text: "Home",
        id: "label1",
        color: "#999"
    });
    $.__views.__alloyId10.add($.__views.label1);
    logout ? $.__views.label1.addEventListener("click", logout) : __defers["$.__views.label1!click!logout"] = true;
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        id: "homeTab",
        title: "Home"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    __defers["$.__views.label1!click!logout"] && $.__views.label1.addEventListener("click", logout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;