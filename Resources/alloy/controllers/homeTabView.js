function Controller() {
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
    $.__views.homeWin = Ti.UI.createWindow({
        id: "homeWin"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "Home",
        id: "label1",
        color: "#999"
    });
    $.__views.homeWin.add($.__views.label1);
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.homeWin,
        id: "homeTab",
        title: "Home"
    });
    $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud"), args = arguments[0] || {}, title = args.customTitle || "home", TABTOTAL = 4, tabTitle = new Array("Home", "Explore", "News", "Profile");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;