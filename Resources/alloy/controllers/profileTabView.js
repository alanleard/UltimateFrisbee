function Controller() {
    function changePic() {
        alert("TODO:Add Picture uploader");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.profileWin = Ti.UI.createWindow({
        id: "profileWin"
    });
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.profileWin.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        title: "Button",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    changePic ? $.__views.__alloyId7.addEventListener("click", changePic) : __defers["$.__views.__alloyId7!click!changePic"] = !0;
    $.__views.profileTab = Ti.UI.createTab({
        window: $.__views.profileWin,
        id: "profileTab",
        title: "Profile"
    });
    $.addTopLevelView($.__views.profileTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var profilePic = Titanium.UI.createButton({
        id: "profilePic",
        backgroundImage: "/images/test/laughing.png",
        top: "20%",
        left: "1%",
        width: "20%",
        height: "20%"
    });
    profilePic.addEventListener("click", function() {
        alert("TODO:Add Picture uploader");
    });
    $.profileWin.add(profilePic);
    __defers["$.__views.__alloyId7!click!changePic"] && $.__views.__alloyId7.addEventListener("click", changePic);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;