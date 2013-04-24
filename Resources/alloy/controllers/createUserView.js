function Controller() {
    function termsPage(e) {
        e.source.color = "red";
        alert("Terms clicked");
    }
    function privacyPage(e) {
        e.source.color = "red";
        alert("Privacy clicked");
    }
    function createUser() {
        var userName = $.userName.value;
        var first_name = $.firstName.value;
        var last_name = $.lastName.value;
        var email_addr = $.email.value;
        var password = $.password.value;
        var confirm = $.confirm.value;
        Cloud.Users.create({
            user: userName,
            email: email_addr,
            first_name: first_name,
            last_name: last_name,
            password: password,
            password_confirmation: confirm,
            experience: "A godly 0 years",
            gender: "Undecided",
            age: "5000",
            city: "Rome",
            country: "Sparta"
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
            fontSize: "20%"
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
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.userName = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "userName"
    });
    $.__views.__alloyId1.add($.__views.userName);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "First Name:",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.firstName = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "firstName"
    });
    $.__views.__alloyId3.add($.__views.firstName);
    $.__views.__alloyId5 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Last Name:",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.lastName = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "lastName"
    });
    $.__views.__alloyId5.add($.__views.lastName);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        horizontalWrap: "false",
        id: "__alloyId7"
    });
    $.__views.__alloyId0.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Email:",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.email = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "email"
    });
    $.__views.__alloyId7.add($.__views.email);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId9"
    });
    $.__views.__alloyId0.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.password = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "password"
    });
    $.__views.__alloyId9.add($.__views.password);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.__alloyId0.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Confirm:",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.confirm = Ti.UI.createTextArea({
        color: "black",
        right: "3%",
        width: "55%",
        height: "40dp",
        id: "confirm"
    });
    $.__views.__alloyId11.add($.__views.confirm);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId13"
    });
    $.__views.__alloyId0.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "black",
        right: 3,
        text: "By clicking the button below,",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "black",
        right: 3,
        text: "you agree to Sky'd's",
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Terms of Service",
        right: "3",
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    termsPage ? $.__views.__alloyId16.addEventListener("click", termsPage) : __defers["$.__views.__alloyId16!click!termsPage"] = true;
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "black",
        right: 3,
        text: "and",
        id: "__alloyId17"
    });
    $.__views.__alloyId13.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        highlightedColor: "red",
        text: "Privacy Page.",
        id: "__alloyId18"
    });
    $.__views.__alloyId13.add($.__views.__alloyId18);
    privacyPage ? $.__views.__alloyId18.addEventListener("click", privacyPage) : __defers["$.__views.__alloyId18!click!privacyPage"] = true;
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId0.add($.__views.__alloyId19);
    $.__views.signUp = Ti.UI.createButton({
        top: "5%",
        width: 100,
        title: "SignUp",
        id: "signUp"
    });
    $.__views.__alloyId19.add($.__views.signUp);
    createUser ? $.__views.signUp.addEventListener("click", createUser) : __defers["$.__views.signUp!click!createUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    __defers["$.__views.__alloyId16!click!termsPage"] && $.__views.__alloyId16.addEventListener("click", termsPage);
    __defers["$.__views.__alloyId18!click!privacyPage"] && $.__views.__alloyId18.addEventListener("click", privacyPage);
    __defers["$.__views.signUp!click!createUser"] && $.__views.signUp.addEventListener("click", createUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;