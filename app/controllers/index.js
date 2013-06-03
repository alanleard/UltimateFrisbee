//TODO: Correct the indented after finished with app
	$.login.open();
	
var Cloud = require("ti.cloud");

function loginButton(){
	var user = $.userName.value;
	var password = $.password.value;
	Cloud.Users.login({
    login: user,
    password: password
    
	}, function (e) {
	    if (e.success) {
	        Alloy.createController('tabView/tabGroupView').getView().open();
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function forgotUser(){
	alert("That's too bad! TODO: Create page to retrieve user info.");
}

function forgotPass(){
	alert("That's too bad! TODO: Create page to retrieve user info.");
}

function signup(){
	Alloy.createController('userView/createUserView').getView().open();
}


