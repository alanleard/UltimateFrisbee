//TODO: Correct the indented after finished with app
	$.login.open();
	//Alloy.createController('tabGroupView').getView().open();
	

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
	Alloy.createController('createUserView').getView().open();
}


