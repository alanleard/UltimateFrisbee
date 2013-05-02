var Cloud = require("ti.cloud");

function logout () {
	Cloud.Users.logout(function (e) {
    if (e.success) {
        Alloy.createController('index').getView().open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
	});
	
}
