var Cloud = require("ti.cloud");

var textarea = $.firstName;


function termsPage(e){
	e.source.backgroundColor="red";
	alert("Terms clicked");
}

function privacyPage(e){
	
	alert("Privacy clicked");
}

function createUser(e){
		var name = null;
		
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
                
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}


