function Controller() {
    function termsPage(e) {
        e.source.color = "red";
        alert("Terms clicked");
    }
    function privacyPage(e) {
        e.source.color = "red";
        alert("Privacy clicked");
    }
    function cancelButton() {
        Alloy.createController("index").getView().open();
    }
    function createUser(e) {
        e.source.enabled = false;
        var user = $.userName.value;
        var first_name = $.firstName.value;
        var last_name = $.lastName.value;
        var email_addr = $.email.value;
        var password = $.password.value;
        var confirm = $.confirm.value;
        Cloud.Users.create({
            email: email_addr,
            username: user,
            first_name: first_name,
            last_name: last_name,
            password: password,
            password_confirmation: confirm,
            custom_fields: {
                experience: "A godly 0 years",
                gender: "Undecided",
                age: "500",
                city: "Rome",
                country: "Sparta"
            }
        }, function(e) {
            if (e.success) {
                alert("An email has been sent for to confirm your account!");
                Alloy.createController("tabGroupView").getView().open();
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
        e.source.enabled = true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.createUser = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "createUser"
    });
    $.__views.createUser && $.addTopLevelView($.__views.createUser);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId15"
    });
    $.__views.createUser.add($.__views.__alloyId15);
    $.__views.title = Ti.UI.createLabel({
        color: "#700",
        font: {
            fontSize: "20sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Create Your Sky'd Profile",
        id: "title"
    });
    $.__views.__alloyId15.add($.__views.title);
    $.__views.__alloyId16 = Ti.UI.createView({
        top: "7%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.userName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "userName"
    });
    $.__views.__alloyId16.add($.__views.userName);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "First Name:",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.firstName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "firstName"
    });
    $.__views.__alloyId18.add($.__views.firstName);
    $.__views.__alloyId20 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId20"
    });
    $.__views.__alloyId15.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Last Name:",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.lastName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "lastName"
    });
    $.__views.__alloyId20.add($.__views.lastName);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        horizontalWrap: "false",
        id: "__alloyId22"
    });
    $.__views.__alloyId15.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Email:",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.email = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "email"
    });
    $.__views.__alloyId22.add($.__views.email);
    $.__views.__alloyId24 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId24"
    });
    $.__views.__alloyId15.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.password = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "password"
    });
    $.__views.__alloyId24.add($.__views.password);
    $.__views.__alloyId26 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.__alloyId15.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Confirm:",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.confirm = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "confirm"
    });
    $.__views.__alloyId26.add($.__views.confirm);
    $.__views.__alloyId28 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "40sp",
        right: "40sp",
        id: "__alloyId28"
    });
    $.__views.__alloyId15.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "By clicking the button below,",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "you agree to Sky'd's",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Terms of Service",
        right: "3sp",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    termsPage ? $.__views.__alloyId31.addEventListener("click", termsPage) : __defers["$.__views.__alloyId31!click!termsPage"] = true;
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "and",
        id: "__alloyId32"
    });
    $.__views.__alloyId28.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Privacy Page.",
        id: "__alloyId33"
    });
    $.__views.__alloyId28.add($.__views.__alloyId33);
    privacyPage ? $.__views.__alloyId33.addEventListener("click", privacyPage) : __defers["$.__views.__alloyId33!click!privacyPage"] = true;
    $.__views.__alloyId34 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId34"
    });
    $.__views.__alloyId15.add($.__views.__alloyId34);
    $.__views.signUp = Ti.UI.createButton({
        width: "120sp",
        font: {
            fontSize: "16sp"
        },
        title: "SignUp",
        id: "signUp"
    });
    $.__views.__alloyId34.add($.__views.signUp);
    createUser ? $.__views.signUp.addEventListener("click", createUser) : __defers["$.__views.signUp!click!createUser"] = true;
    $.__views.cancel = Ti.UI.createButton({
        width: "120sp",
        font: {
            fontSize: "16sp"
        },
        left: "10sp",
        title: "Cancel",
        id: "cancel"
    });
    $.__views.__alloyId34.add($.__views.cancel);
    cancelButton ? $.__views.cancel.addEventListener("click", cancelButton) : __defers["$.__views.cancel!click!cancelButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    __defers["$.__views.__alloyId31!click!termsPage"] && $.__views.__alloyId31.addEventListener("click", termsPage);
    __defers["$.__views.__alloyId33!click!privacyPage"] && $.__views.__alloyId33.addEventListener("click", privacyPage);
    __defers["$.__views.signUp!click!createUser"] && $.__views.signUp.addEventListener("click", createUser);
    __defers["$.__views.cancel!click!cancelButton"] && $.__views.cancel.addEventListener("click", cancelButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;