function Controller() {
    function cancelButton() {
        alert("Canceled");
    }
    function loginButton() {
        alert("Logged in");
        var homeCtrl = Alloy.createController("home");
        homeCtrl.getView().open();
        $.login.close();
        $.login = null;
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
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "login"
    });
    $.addTopLevelView($.__views.login);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        color: "#700",
        font: {
            fontSize: 48
        },
        shadowColor: "#aaa",
        shadowOffset: {
            x: 10,
            y: 10
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Sky'd",
        id: "title"
    });
    $.__views.login.add($.__views.title);
    $.__views.username = Ti.UI.createLabel({
        top: 50,
        left: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Username:",
        id: "username"
    });
    $.__views.login.add($.__views.username);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        top: 10,
        left: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Password:",
        id: "__alloyId0"
    });
    $.__views.login.add($.__views.__alloyId0);
    $.__views.loginButton = Ti.UI.createButton({
        top: 20,
        width: 100,
        title: "Login",
        left: 30,
        id: "loginButton"
    });
    $.__views.login.add($.__views.loginButton);
    loginButton ? $.__views.loginButton.addEventListener("click", loginButton) : __defers["$.__views.loginButton!click!loginButton"] = !0;
    $.__views.signupButton = Ti.UI.createButton({
        top: 20,
        width: 100,
        title: "Signup",
        left: 20,
        id: "signupButton"
    });
    $.__views.login.add($.__views.signupButton);
    signup ? $.__views.signupButton.addEventListener("click", signup) : __defers["$.__views.signupButton!click!signup"] = !0;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: 10,
        left: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Forgot",
        id: "__alloyId1"
    });
    $.__views.login.add($.__views.__alloyId1);
    $.__views.forgotLabel = Ti.UI.createLabel({
        color: "#200",
        text: "Username",
        id: "forgotLabel"
    });
    $.__views.login.add($.__views.forgotLabel);
    forgotUser ? $.__views.forgotLabel.addEventListener("click", forgotUser) : __defers["$.__views.forgotLabel!click!forgotUser"] = !0;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "or",
        id: "__alloyId2"
    });
    $.__views.login.add($.__views.__alloyId2);
    $.__views.forgotLabel = Ti.UI.createLabel({
        color: "#200",
        text: "Password",
        id: "forgotLabel"
    });
    $.__views.login.add($.__views.forgotLabel);
    forgotPass ? $.__views.forgotLabel.addEventListener("click", forgotPass) : __defers["$.__views.forgotLabel!click!forgotPass"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.login.open();
    __defers["$.__views.loginButton!click!loginButton"] && $.__views.loginButton.addEventListener("click", loginButton);
    __defers["$.__views.signupButton!click!signup"] && $.__views.signupButton.addEventListener("click", signup);
    __defers["$.__views.forgotLabel!click!forgotUser"] && $.__views.forgotLabel.addEventListener("click", forgotUser);
    __defers["$.__views.forgotLabel!click!forgotPass"] && $.__views.forgotLabel.addEventListener("click", forgotPass);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;