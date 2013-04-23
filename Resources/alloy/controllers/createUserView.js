function Controller() {
    function termsPage(e) {
        e.source.backgroundColor = "red";
        alert("Terms clicked");
    }
    function privacyPage() {
        alert("Privacy clicked");
    }
    function createUser() {
        Cloud.Users.create({
            email: $.email.value,
            first_name: $.firstName.value,
            last_name: $.lastName.value,
            password: $.password.value,
            password_confirmation: $.confirm.value
        }, function(e) {
            e.success ? alert("Success") : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.createUser = Ti.UI.createWindow({
        backgroundColor: "white",
        top: "1%",
        bottom: "1%",
        left: "1%",
        right: "1%",
        id: "createUser"
    });
    $.__views.createUser && $.addTopLevelView($.__views.createUser);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.createUser.add($.__views.__alloyId0);
    $.__views.title = Ti.UI.createLabel({
        color: "#700",
        font: {
            fontSize: 24
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Create Your Sky'd Profile",
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "First Name:",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.firstName = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "10%",
        id: "firstName"
    });
    $.__views.__alloyId1.add($.__views.firstName);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Last Name:",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.lastName = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "10%",
        id: "lastName"
    });
    $.__views.__alloyId3.add($.__views.lastName);
    $.__views.__alloyId5 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        horizontalWrap: "false",
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Email:",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.email = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "10%",
        id: "email"
    });
    $.__views.__alloyId5.add($.__views.email);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId7"
    });
    $.__views.__alloyId0.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.password = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "10%",
        id: "password"
    });
    $.__views.__alloyId7.add($.__views.password);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId9"
    });
    $.__views.__alloyId0.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Confirm:",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.confirm = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "10%",
        id: "confirm"
    });
    $.__views.__alloyId9.add($.__views.confirm);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.__alloyId0.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "black",
        right: "1%",
        text: "By clicking the button below,",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "black",
        right: "1%",
        text: "you agree to Sky'd's",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Terms of Service",
        right: "1%",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
    termsPage ? $.__views.__alloyId14.addEventListener("click", termsPage) : __defers["$.__views.__alloyId14!click!termsPage"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "black",
        right: "1%",
        text: "and",
        id: "__alloyId15"
    });
    $.__views.__alloyId11.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Privacy Page.",
        id: "__alloyId16"
    });
    $.__views.__alloyId11.add($.__views.__alloyId16);
    privacyPage ? $.__views.__alloyId16.addEventListener("click", privacyPage) : __defers["$.__views.__alloyId16!click!privacyPage"] = true;
    $.__views.__alloyId17 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.__alloyId0.add($.__views.__alloyId17);
    $.__views.signUp = Ti.UI.createButton({
        top: "5%",
        left: "10%",
        width: 100,
        title: "SignUp",
        id: "signUp"
    });
    $.__views.__alloyId17.add($.__views.signUp);
    createUser ? $.__views.signUp.addEventListener("click", createUser) : __defers["$.__views.signUp!click!createUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    __defers["$.__views.__alloyId14!click!termsPage"] && $.__views.__alloyId14.addEventListener("click", termsPage);
    __defers["$.__views.__alloyId16!click!privacyPage"] && $.__views.__alloyId16.addEventListener("click", privacyPage);
    __defers["$.__views.signUp!click!createUser"] && $.__views.signUp.addEventListener("click", createUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;