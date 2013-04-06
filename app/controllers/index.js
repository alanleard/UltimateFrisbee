$.win.open();

var Cloud = require("ti.cloud");

getPlayers();

function cancelButton(){
	alert("Canceled");
}

function loginButton(){
	alert("Logged in");
	$.win.open();
}

function showUser(evt){
    alert(evt.rowData.userData);
}

function getPlayers(){
    Cloud.Users.query({
        page: 1,
        per_page: 100,
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

function createPlayer(e){
    e.source.backgroundColor ="red";
    var name = 'test_'+(Math.random()*100)
    Cloud.Users.create({
        username: name,
        first_name: name,
        last_name: 'test_lastname',
        password: 'test_password',
        password_confirmation: 'test_password'
    }, function (e) {
        if (e.success) {
            // var user = e.users[0];
            // alert('Success:\n' +
                // 'id: ' + user.id + '\n' +
                // 'sessionId: ' + Cloud.sessionId + '\n' +
                // 'first name: ' + user.first_name + '\n' +
                // 'last name: ' + user.last_name);
                getPlayers();
                Cloud.Users.logout(function (e) {
                    if (e.success) {
                        alert('Success: Logged out');
                    } else {
                        alert('Error:\n' +
                            ((e.error && e.message) || JSON.stringify(e)));
                    }
                });
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function createEvent(){
    
    Cloud.Events.create({
        name: 'Celebration',
        start_time: new Date(),
        duration: 3600,
        recurring: 'monthly',
        recurring_count: 5
    }, function (e) {
        if (e.success) {
            var event = e.events[0];
            alert('Success:\n' +
                'id: ' + event.id + '\n' +
                'name: ' + event.name + '\n' +
                'updated_at: ' + event.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
    
}
