
var profilePic = Titanium.UI.createButton({
	id:"profilePic",
	backgroundImage:'/images/test/laughing.png',
	top:'3%',
	left:'3%',
	width:'22%',
	height:'20%'
});
profilePic.addEventListener('click',function (){
	alert("TODO:Add Picture uploader");
});
$.profileWin.add(profilePic);


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