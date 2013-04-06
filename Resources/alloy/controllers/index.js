function Controller() {
    function cancelButton() {
        alert("Canceled");
    }
    function loginButton() {
        alert("Logged in");
        $.win.open();
    }
    function showUser(evt) {
        alert(evt.rowData.userData);
    }
    function getPlayers() {
        Cloud.Users.query({
            page: 1,
            per_page: 100
        }, function(e) {
            if (e.success) {
                var rows = [];
                for (var i in e.users) {
                    var user = e.users[i], row = Ti.UI.createTableViewRow({
                        title: user.first_name,
                        userData: user
                    });
                    rows.push(row);
                }
                $.players.setData(rows);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function createPlayer(e) {
        e.source.backgroundColor = "red";
        var name = "test_" + Math.random() * 100;
        Cloud.Users.create({
            username: name,
            first_name: name,
            last_name: "test_lastname",
            password: "test_password",
            password_confirmation: "test_password"
        }, function(e) {
            if (e.success) {
                getPlayers();
                Cloud.Users.logout(function(e) {
                    e.success ? alert("Success: Logged out") : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
                });
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function createEvent() {
        Cloud.Events.create({
            name: "Celebration",
            start_time: new Date,
            duration: 3600,
            recurring: "monthly",
            recurring_count: 5
        }, function(e) {
            if (e.success) {
                var event = e.events[0];
                alert("Success:\nid: " + event.id + "\n" + "name: " + event.name + "\n" + "updated_at: " + event.updated_at);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win"
    });
    $.addTopLevelView($.__views.win);
    $.__views.createEvent = Ti.UI.createButton({
        top: 40,
        width: 100,
        title: "Create Event",
        id: "createEvent"
    });
    $.__views.win.add($.__views.createEvent);
    createEvent ? $.__views.createEvent.addEventListener("click", createEvent) : __defers["$.__views.createEvent!click!createEvent"] = !0;
    $.__views.createPlayer = Ti.UI.createButton({
        top: 20,
        width: 100,
        title: "Create Player",
        id: "createPlayer"
    });
    $.__views.win.add($.__views.createPlayer);
    createPlayer ? $.__views.createPlayer.addEventListener("click", createPlayer) : __defers["$.__views.createPlayer!click!createPlayer"] = !0;
    $.__views.players = Ti.UI.createTableView({
        id: "players"
    });
    $.__views.win.add($.__views.players);
    showUser ? $.__views.players.addEventListener("click", showUser) : __defers["$.__views.players!click!showUser"] = !0;
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "login"
    });
    $.addTopLevelView($.__views.login);
    $.__views.frontTitle = Ti.UI.createLabel({
        title: "Sky'd",
        top: 20,
        color: "blue",
        minimumFontSize: 24,
        id: "frontTitle"
    });
    $.__views.login.add($.__views.frontTitle);
    $.__views.username = Ti.UI.createLabel({
        color: "black",
        top: 10,
        left: 30,
        title: "Username:",
        id: "username"
    });
    $.__views.login.add($.__views.username);
    $.__views.password = Ti.UI.createLabel({
        color: "black",
        top: 10,
        left: 30,
        title: "Password:",
        id: "password"
    });
    $.__views.login.add($.__views.password);
    $.__views.forgot = Ti.UI.createLabel({
        color: "black",
        top: 10,
        left: 30,
        title: "Forgot Username or Password?",
        id: "forgot"
    });
    $.__views.login.add($.__views.forgot);
    $.__views.loginButton = Ti.UI.createButton({
        top: 20,
        width: 100,
        title: "Login",
        id: "loginButton"
    });
    $.__views.login.add($.__views.loginButton);
    loginButton ? $.__views.loginButton.addEventListener("click", loginButton) : __defers["$.__views.loginButton!click!loginButton"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    var Cloud = require("ti.cloud");
    getPlayers();
    __defers["$.__views.createEvent!click!createEvent"] && $.__views.createEvent.addEventListener("click", createEvent);
    __defers["$.__views.createPlayer!click!createPlayer"] && $.__views.createPlayer.addEventListener("click", createPlayer);
    __defers["$.__views.players!click!showUser"] && $.__views.players.addEventListener("click", showUser);
    __defers["$.__views.loginButton!click!loginButton"] && $.__views.loginButton.addEventListener("click", loginButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;