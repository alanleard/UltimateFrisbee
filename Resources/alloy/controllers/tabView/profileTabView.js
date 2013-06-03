function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "profileWin"
    });
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.profileWin.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        top: "25sp",
        left: "120sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.first_name = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "first_name"
    });
    $.__views.__alloyId12.add($.__views.first_name);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: '"',
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.nickname = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "0",
        color: "black",
        id: "nickname"
    });
    $.__views.__alloyId12.add($.__views.nickname);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "0",
        color: "black",
        text: '"',
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.last_name = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "last_name"
    });
    $.__views.__alloyId12.add($.__views.last_name);
    $.__views.__alloyId15 = Ti.UI.createView({
        top: "10sp",
        left: "120sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    $.__views.__alloyId11.add($.__views.__alloyId15);
    $.__views.city = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "city"
    });
    $.__views.__alloyId15.add($.__views.city);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "0",
        color: "black",
        text: ",",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.state = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "state"
    });
    $.__views.__alloyId15.add($.__views.state);
    $.__views.country = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "15sp",
        color: "black",
        id: "country"
    });
    $.__views.__alloyId15.add($.__views.country);
    $.__views.__alloyId17 = Ti.UI.createView({
        top: "50sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.__alloyId11.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "Team:",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.team = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "team"
    });
    $.__views.__alloyId17.add($.__views.team);
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "15sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId11.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "League:",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.league = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "league"
    });
    $.__views.__alloyId19.add($.__views.league);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "15sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId11.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "Age:",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.age = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "age"
    });
    $.__views.__alloyId21.add($.__views.age);
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "15sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.__alloyId11.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "Experience:",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.experience = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "experience"
    });
    $.__views.__alloyId23.add($.__views.experience);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "15sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.__alloyId11.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "Gender:",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.gender = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "gender"
    });
    $.__views.__alloyId25.add($.__views.gender);
    $.__views.__alloyId27 = Ti.UI.createView({
        top: "15sp",
        left: "15sp",
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.__alloyId11.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        text: "Email:",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.email = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "5sp",
        color: "black",
        id: "email"
    });
    $.__views.__alloyId27.add($.__views.email);
    $.__views.profileTab = Ti.UI.createTab({
        window: $.__views.profileWin,
        id: "profileTab",
        title: "Profile"
    });
    $.__views.profileTab && $.addTopLevelView($.__views.profileTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var profilePic = Titanium.UI.createButton({
        id: "profilePic",
        backgroundImage: "/images/test/laughing.png",
        top: "10sp",
        left: "10sp",
        width: "100sp",
        height: "100sp"
    });
    profilePic.addEventListener("click", function() {
        alert("TODO:Add Picture uploader");
    });
    $.profileWin.add(profilePic);
    Cloud.Users.showMe(function(e) {
        if (e.success) {
            var user = e.users[0];
            $.first_name.text = user.first_name;
            $.nickname.text = user.custom_fields.nickname;
            $.last_name.text = user.last_name;
            $.city.text = user.custom_fields.city;
            $.state.text = user.custom_fields.state;
            $.country.text = user.custom_fields.country;
            $.team.text = user.custom_fields.team;
            $.league.text = user.custom_fields.league;
            $.age.text = user.custom_fields.age;
            $.experience.text = user.custom_fields.experience;
            $.gender.text = user.custom_fields.gender;
            $.email.text = user.email;
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;