<<<<<<< Updated upstream


var firebaseUsers = new Firebase("https://blinding-inferno-7166.firebaseio.com/users");
var firebaseSkills = new Firebase("https://blinding-inferno-7166.firebaseio.com/skills");



// document.getElementById("submitBtn").unbind("click");
document.getElementById("submitBtn").addEventListener("click",function()
{
	var email = document.getElementById("inputEmail").value;  
	var password = document.getElementById("inputPassword").value;
	var skills = document.getElementById("inputCourses").value;

	firebaseUsers.push(
		{ user:{
			email: email,
			password: password
		}
	});

	firebaseSkills.push(
	{
		skills: skills
	});

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




=======
var myemail = $('#inputEmail').val();
var mypassword = $('#inputPassword').val();

$('#submitBtn').on("click", function (){

db.inventory.insert(
   {
     user: "user1" ,
     email: myemail,
     password: mypassword
   }
)
}
>>>>>>> Stashed changes
