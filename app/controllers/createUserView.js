var Cloud = require("ti.cloud");

//TODO: Create and link Terms Page
function termsPage(e){
	e.source.color="red";
	alert("Terms clicked");
}

//TODO: Create and link Privacy Policy
function privacyPage(e){
	e.source.color="red";
	alert("Privacy clicked");
}


function createUser(e){
		var userName = $.userName.value;
		var first_name = $.firstName.value;
		var last_name = $.lastName.value;
		var email_addr = $.email.value;
		var password = $.password.value;
		var confirm = $.confirm.value;
		
	    Cloud.Users.create({
	    user: userName,
        email: email_addr,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password_confirmation: confirm,
        experience:'A godly 0 years',
        gender: 'Undecided',
        age:'5000',
        city:'Rome',
        country:'Sparta'
    }, function (e) {
        if (e.success) {
        	alert("Success");
                      
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}


