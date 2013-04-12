$.login.open();

function cancelButton(){
	alert("Canceled");
}

function loginButton(){
	alert("Logged in");
	Alloy.createController('tabGroupView').getView().open();
}

function forgotUser(){
	alert("That's too bad! TODO: Create page to retrieve user info.");
}

function forgotPass(){
	alert("That's too bad! TODO: Create page to retrieve user info.");
}

function signup(){
	alert("TODO:Make signup page");
}


