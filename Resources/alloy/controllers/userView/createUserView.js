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
                nickname: "Batman",
                team: "None",
                league: "None",
                experience: "A godly 0 years",
                gender: "Undecided",
                age: 500,
                city: "Rome",
                state: "California",
                country: "USA"
            }
        }, function(e) {
            if (e.success) {
                alert("An email has been sent for to confirm your account!");
                Alloy.createController("tabView/tabGroupView").getView().open();
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
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId33"
    });
    $.__views.createUser.add($.__views.__alloyId33);
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
    $.__views.__alloyId33.add($.__views.title);
    $.__views.__alloyId34 = Ti.UI.createView({
        top: "7%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.userName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "userName"
    });
    $.__views.__alloyId34.add($.__views.userName);
    $.__views.__alloyId36 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "First Name:",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.firstName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "firstName"
    });
    $.__views.__alloyId36.add($.__views.firstName);
    $.__views.__alloyId38 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId38"
    });
    $.__views.__alloyId33.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Last Name:",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.lastName = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "lastName"
    });
    $.__views.__alloyId38.add($.__views.lastName);
    $.__views.__alloyId40 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        horizontalWrap: "false",
        id: "__alloyId40"
    });
    $.__views.__alloyId33.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Email:",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.email = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "email"
    });
    $.__views.__alloyId40.add($.__views.email);
    $.__views.__alloyId42 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId42"
    });
    $.__views.__alloyId33.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.password = Ti.UI.createTextField({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "password",
        passwordMask: "true"
    });
    $.__views.__alloyId42.add($.__views.password);
    $.__views.__alloyId44 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId44"
    });
    $.__views.__alloyId33.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: "100sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Confirm:",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.confirm = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "35sp",
        id: "confirm",
        passwordMask: "true"
    });
    $.__views.__alloyId44.add($.__views.confirm);
    $.__views.__alloyId46 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "40sp",
        right: "40sp",
        id: "__alloyId46"
    });
    $.__views.__alloyId33.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "By clicking the button below,",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "you agree to Sky'd's",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Terms of Service",
        right: "3sp",
        id: "__alloyId49"
    });
    $.__views.__alloyId46.add($.__views.__alloyId49);
    termsPage ? $.__views.__alloyId49.addEventListener("click", termsPage) : __defers["$.__views.__alloyId49!click!termsPage"] = true;
    $.__views.__alloyId50 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        color: "black",
        right: "3sp",
        text: "and",
        id: "__alloyId50"
    });
    $.__views.__alloyId46.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Privacy Page.",
        id: "__alloyId51"
    });
    $.__views.__alloyId46.add($.__views.__alloyId51);
    privacyPage ? $.__views.__alloyId51.addEventListener("click", privacyPage) : __defers["$.__views.__alloyId51!click!privacyPage"] = true;
    $.__views.__alloyId52 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId33.add($.__views.__alloyId52);
    $.__views.signUp = Ti.UI.createButton({
        width: "120sp",
        font: {
            fontSize: "16sp"
        },
        title: "SignUp",
        id: "signUp"
    });
    $.__views.__alloyId52.add($.__views.signUp);
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
    $.__views.__alloyId52.add($.__views.cancel);
    cancelButton ? $.__views.cancel.addEventListener("click", cancelButton) : __defers["$.__views.cancel!click!cancelButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    __defers["$.__views.__alloyId49!click!termsPage"] && $.__views.__alloyId49.addEventListener("click", termsPage);
    __defers["$.__views.__alloyId51!click!privacyPage"] && $.__views.__alloyId51.addEventListener("click", privacyPage);
    __defers["$.__views.signUp!click!createUser"] && $.__views.signUp.addEventListener("click", createUser);
    __defers["$.__views.cancel!click!cancelButton"] && $.__views.cancel.addEventListener("click", cancelButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;