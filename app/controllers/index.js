//TODO: Correct the indented after finished with app
	//$.login.open();
	//Alloy.createController('tabGroupView').getView().open();
	Alloy.createController('createUserView').getView().open();
	
function cancelButton(){
	alert("Canceled");
}

function loginButton(){
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


