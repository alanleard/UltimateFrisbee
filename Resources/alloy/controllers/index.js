function Controller() {
    function loginButton() {
        var user = $.userName.value;
        var password = $.password.value;
        Cloud.Users.login({
            login: user,
            password: password
        }, function(e) {
            e.success ? Alloy.createController("tabView/tabGroupView").getView().open() : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function forgotUser() {
        alert("That's too bad! TODO: Create page to retrieve user info.");
    }
    function forgotPass() {
        alert("That's too bad! TODO: Create page to retrieve user info.");
    }
    function signup() {
        Alloy.createController("userView/createUserView").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.login.add($.__views.__alloyId0);
    $.__views.title = Ti.UI.createLabel({
        top: "1%",
        color: "#700",
        font: {
            fontSize: "48sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Sky'd",
        id: "title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: "20%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.userName = Ti.UI.createTextField({
        left: "7sp",
        color: "black",
        right: "3%",
        width: "250sp",
        height: "40sp",
        id: "userName",
        hintText: "Username:"
    });
    $.__views.__alloyId1.add($.__views.userName);
    $.__views.__alloyId2 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.password = Ti.UI.createTextField({
        left: "7sp",
        color: "black",
        right: "3%",
        width: "250sp",
        height: "40sp",
        id: "password",
        hintText: "Password:",
        passwordMask: "true"
    });
    $.__views.__alloyId2.add($.__views.password);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.loginButton = Ti.UI.createButton({
        top: "5%",
        width: "120sp",
        title: "Login",
        font: {
            fontSize: "16sp"
        },
        id: "loginButton"
    });
    $.__views.__alloyId3.add($.__views.loginButton);
    loginButton ? $.__views.loginButton.addEventListener("click", loginButton) : __defers["$.__views.loginButton!click!loginButton"] = true;
    $.__views.signupButton = Ti.UI.createButton({
        top: "5%",
        width: "120sp",
        title: "Signup",
        font: {
            fontSize: "16sp"
        },
        left: "10sp",
        id: "signupButton"
    });
    $.__views.__alloyId3.add($.__views.signupButton);
    signup ? $.__views.signupButton.addEventListener("click", signup) : __defers["$.__views.signupButton!click!signup"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        top: "0",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.__alloyId0.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Forgot",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        color: "blue",
        left: "5sp",
        text: "Username",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    forgotUser ? $.__views.__alloyId6.addEventListener("click", forgotUser) : __defers["$.__views.__alloyId6!click!forgotUser"] = true;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "or",
        left: "5",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        color: "blue",
        left: "5sp",
        text: "Password?",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    forgotPass ? $.__views.__alloyId8.addEventListener("click", forgotPass) : __defers["$.__views.__alloyId8!click!forgotPass"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.login.open();
    var Cloud = require("ti.cloud");
    __defers["$.__views.loginButton!click!loginButton"] && $.__views.loginButton.addEventListener("click", loginButton);
    __defers["$.__views.signupButton!click!signup"] && $.__views.signupButton.addEventListener("click", signup);
    __defers["$.__views.__alloyId6!click!forgotUser"] && $.__views.__alloyId6.addEventListener("click", forgotUser);
    __defers["$.__views.__alloyId8!click!forgotPass"] && $.__views.__alloyId8.addEventListener("click", forgotPass);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;