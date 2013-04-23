var Cloud = require("ti.cloud");

function termsPage(e){
	e.source.backgroundColor="red";
	alert("Terms clicked");
}

function privacyPage(e){
	
	alert("Privacy clicked");
}


function createUser(e){
		var first = $.firstName.value;
		var last = $.lastName.value;
		var email_addr = $.email.value;
		var pass = $.password.value;
		var confirm = $.confirm.value;
		
	    Cloud.Users.create({
        email: email_addr,
        first_name: first,
        last_name: last,
        password: pass,
        password_confirmation: confirm
    }, function (e) {
        if (e.success) {
        	alert("Success");
                      
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}


