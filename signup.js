

var firebaseUsers = new Firebase("https://blinding-inferno-7166.firebaseio.com/users");
var firebaseSkills = new Firebase("https://blinding-inferno-7166.firebaseio.com/skills");



// document.getElementById("submitBtn").unbind("click");
document.getElementById("submitBtn").addEventListener("click",function()
{
	var email = document.getElementById("inputEmail").value;  
	var password = document.getElementById("inputPassword").value;
	var skills = document.getElementById("inputCourses").value;

	firebaseUsers.set(
		{ "email":{
			password: password
		}
	});

	console.log("Clicky");

}, false);

// document.getElementById("submitBtn").addEventListener("click", addUser);

// function addUser()
// {
// 	firebaseUsers.set(
// 		{ 	user1:{
// 			email: "werty@duke.edu",
// 			password: "enter123"
// 		}
// 	});
// }




