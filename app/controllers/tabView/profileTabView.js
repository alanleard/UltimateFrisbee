var Cloud = require("ti.cloud");

var profilePic = Titanium.UI.createButton({
	id:"profilePic",
	backgroundImage:'/images/test/laughing.png',
	top:'10sp',
	left:'10sp',
	width:'100sp',
	height:'100sp'
});
profilePic.addEventListener('click',function (){
	alert("TODO:Add Picture uploader");
});
$.profileWin.add(profilePic);

Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        $.first_name.text = user.first_name;
        $.nickname.text = user.custom_fields.nickname;
        $.last_name.text= user.last_name;
        $.city.text = user.custom_fields.city;
        $.state.text = user.custom_fields.state;
        $.country.text = user.custom_fields.country;
        $.team.text = user.custom_fields.team;
        $.league.text = user.custom_fields.league;
        $.age.text = user.custom_fields.age;
        $.experience.text = user.custom_fields.experience;
        $.gender.text = user.custom_fields.gender;
        $.email.text = user.email;
        
        // alert('Success:\n' +
            // 'id: ' + user.id + '\n' +
            // 'first name: ' + user.first_name + '\n' +
            // 'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

function changePic(){
	alert("TODO:Add Picture uploader");
}

function getPlayers(){
    Cloud.Users.query({
        page: 1,
        per_page: 100
        // where: {
            // age: { '$gt': 28 },
            // favorite_color: 'blue',
            // first_name: 'joe'
        // }
    }, function (e) {
        if (e.success) {
            var rows = [];
            for (var i  in e.users) {
                var user = e.users[i];
                var row = Ti.UI.createTableViewRow({
                    title:user.first_name,
                    userData:user
                });
                rows.push(row);
                
             }
             $.players.setData(rows);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}