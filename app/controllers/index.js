$.login.open();

function cancelButton(){
	alert("Canceled");
}

function loginButton(){
	alert("Logged in");
	var homeCtrl = Alloy.createController('home');
	homeCtrl.getView().open();
	$.login.close();
	$.login = null;
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


