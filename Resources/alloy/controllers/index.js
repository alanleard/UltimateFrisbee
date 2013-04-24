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
        alert("TODO:Make signup page");
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
        top: "1%",
        layout: "vertical",
        id: "__alloyId20"
    });
    $.__views.login.add($.__views.__alloyId20);
    $.__views.title = Ti.UI.createLabel({
        top: "1%",
        color: "#700",
        font: {
            fontSize: 48
        },
        shadowColor: "#aaa",
        shadowOffset: {
            x: 10,
            y: 10
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Sky'd",
        id: "title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId20.add($.__views.title);
    $.__views.username = Ti.UI.createLabel({
        top: 50,
        left: 20,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "username"
    });
    $.__views.__alloyId20.add($.__views.username);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        top: 5,
        left: 20,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "125",
        layout: "horizontal",
        id: "__alloyId22"
    });
    $.__views.login.add($.__views.__alloyId22);
    $.__views.loginButton = Ti.UI.createButton({
        top: 90,
        left: 20,
        width: "30%",
        title: "Login",
        id: "loginButton"
    });
    $.__views.__alloyId22.add($.__views.loginButton);
    loginButton ? $.__views.loginButton.addEventListener("click", loginButton) : __defers["$.__views.loginButton!click!loginButton"] = true;
    $.__views.signupButton = Ti.UI.createButton({
        top: 90,
        left: 15,
        width: "30%",
        title: "Signup",
        id: "signupButton"
    });
    $.__views.__alloyId22.add($.__views.signupButton);
    signup ? $.__views.signupButton.addEventListener("click", signup) : __defers["$.__views.signupButton!click!signup"] = true;
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "260",
        layout: "horizontal",
        id: "__alloyId23"
    });
    $.__views.login.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        top: 5,
        left: 20,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Forgot",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.forgotLabel = Ti.UI.createLabel({
        color: "#200",
        top: 5,
        left: 5,
        text: "Username",
        id: "forgotLabel"
    });
    $.__views.__alloyId23.add($.__views.forgotLabel);
    forgotUser ? $.__views.forgotLabel.addEventListener("click", forgotUser) : __defers["$.__views.forgotLabel!click!forgotUser"] = true;
    $.__views.__alloyId25 = Ti.UI.createLabel({
        top: 5,
        left: "5",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "or",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.forgotLabel = Ti.UI.createLabel({
        color: "#200",
        top: 5,
        left: 5,
        text: "Password",
        id: "forgotLabel"
    });
    $.__views.__alloyId23.add($.__views.forgotLabel);
    forgotPass ? $.__views.forgotLabel.addEventListener("click", forgotPass) : __defers["$.__views.forgotLabel!click!forgotPass"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.createController("createUserView").getView().open();
    __defers["$.__views.loginButton!click!loginButton"] && $.__views.loginButton.addEventListener("click", loginButton);
    __defers["$.__views.signupButton!click!signup"] && $.__views.signupButton.addEventListener("click", signup);
    __defers["$.__views.forgotLabel!click!forgotUser"] && $.__views.forgotLabel.addEventListener("click", forgotUser);
    __defers["$.__views.forgotLabel!click!forgotPass"] && $.__views.forgotLabel.addEventListener("click", forgotPass);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;