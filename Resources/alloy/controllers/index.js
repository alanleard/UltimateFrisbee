function Controller() {
    function loginButton() {
        Alloy.createController("tabGroupView").getView().open();
    }
    function forgotUser() {
        alert("That's too bad! TODO: Create page to retrieve user info.");
    }
    function forgotPass() {
        alert("That's too bad! TODO: Create page to retrieve user info.");
    }
    function signup() {
        Alloy.createController("createUserView").getView().open();
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
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId20"
    });
    $.__views.login.add($.__views.__alloyId20);
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
    $.__views.__alloyId20.add($.__views.title);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "20%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: "90sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.username = Ti.UI.createTextField({
        left: "7sp",
        color: "black",
        right: "3%",
        width: "55%",
        height: "40sp",
        id: "username"
    });
    $.__views.__alloyId21.add($.__views.username);
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: "90sp",
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.password = Ti.UI.createTextField({
        left: "7sp",
        color: "black",
        right: "3%",
        width: "55%",
        height: "40sp",
        id: "password"
    });
    $.__views.__alloyId23.add($.__views.password);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "2%",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.__alloyId20.add($.__views.__alloyId25);
    $.__views.loginButton = Ti.UI.createButton({
        top: "5%",
        width: "120sp",
        title: "Login",
        font: {
            fontSize: "16sp"
        },
        id: "loginButton"
    });
    $.__views.__alloyId25.add($.__views.loginButton);
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
    $.__views.__alloyId25.add($.__views.signupButton);
    signup ? $.__views.signupButton.addEventListener("click", signup) : __defers["$.__views.signupButton!click!signup"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
        top: "0",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.__alloyId20.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Forgot",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        color: "blue",
        left: "5sp",
        text: "Username",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    forgotUser ? $.__views.__alloyId28.addEventListener("click", forgotUser) : __defers["$.__views.__alloyId28!click!forgotUser"] = true;
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "or",
        left: "5",
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp"
        },
        color: "blue",
        left: "5sp",
        text: "Password?",
        id: "__alloyId30"
    });
    $.__views.__alloyId26.add($.__views.__alloyId30);
    forgotPass ? $.__views.__alloyId30.addEventListener("click", forgotPass) : __defers["$.__views.__alloyId30!click!forgotPass"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.login.open();
    __defers["$.__views.loginButton!click!loginButton"] && $.__views.loginButton.addEventListener("click", loginButton);
    __defers["$.__views.signupButton!click!signup"] && $.__views.signupButton.addEventListener("click", signup);
    __defers["$.__views.__alloyId28!click!forgotUser"] && $.__views.__alloyId28.addEventListener("click", forgotUser);
    __defers["$.__views.__alloyId30!click!forgotPass"] && $.__views.__alloyId30.addEventListener("click", forgotPass);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;