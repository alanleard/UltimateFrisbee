function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileWin = Ti.UI.createWindow({
        id: "profileWin"
    });
    $.__views.profileTab = Ti.UI.createTab({
        window: $.__views.profileWin,
        id: "profileTab",
        title: "Profile"
    });
    $.__views.profileTab && $.addTopLevelView($.__views.profileTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var profilePic = Titanium.UI.createButton({
        id: "profilePic",
        backgroundImage: "/images/test/laughing.png",
        top: "3%",
        left: "3%",
        width: "22%",
        height: "20%"
    });
    profilePic.addEventListener("click", function() {
        alert("TODO:Add Picture uploader");
    });
    $.profileWin.add(profilePic);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;