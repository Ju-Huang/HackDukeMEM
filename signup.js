<!--

var firebaseUsers = new Firebase("https://blinding-inferno-7166.firebaseio.com/users");
var firebaseSkills = new Firebase("https://blinding-inferno-7166.firebaseio.com/skills");

var email = document.getElementById("inputEmail");  
var password = document.getElementById("inputPassword");
var skills = document.getElementById("inputSkills");

document.getElementById("submitBtn").addEventListener("click", addUser);

function addUser()
{
	firebaseUsers.set(
		{ 	user1:{
			email: "werty@duke.edu",
			password: "enter123"
		}
	});
}




-->