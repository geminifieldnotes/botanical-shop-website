function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(field){
	
	if(field.value == null || trim(field.value) == ""){

		return false;
	}

	return true;

}

function formHasErrors(){

	var errorFlag = false;
	var fields = ["nameInput", "telInput", "emailInput"];

	for(let i=0; i<fields.length; i++){
		var textField = document.getElementById(fields[i]);

		if(!formFieldHasInput(textField)){
			document.getElementById(fields[i] + "_error").style.display = "block";

		if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}

			// Raise error flag
			errorFlag = true;
		}
	}

		var regex = new RegExp(/^\d{10}$/);
		var telephone = document.getElementById("telInput").value;

		if(!regex.test(telephone)){
			document.getElementById("invalidNumber_error").style.display = "block";

			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		}

		var pattern = new RegExp(/\S+@\S+\.\S+/);
		var email = document.getElementById("emailInput").value;

		if(!pattern.test(email)){
			document.getElementById("invalidEmail_error").style.display = "block";

			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		} 

	return errorFlag;

}

function clearData(){
	document.getElementById("nameInput").value = "";
	document.getElementById("telInput").value = "";
	document.getElementById("emailInput").value = "";
	document.getElementById("feedbackInput").value = "";
}


function hideErrors(){

	let fieldErrors = document.getElementsByClassName("error");

	for(let i=0; i<fieldErrors.length; i++){
		fieldErrors[i].style.display = "none";
	}
}


function resetForm(e){
	if(confirm("Are you sure you want to reset the form?")){
		clearData();

		hideErrors();

		document.getElementById("nameInput").focus();

		return true;
	}

	e.preventDefault();
	return false;
}


function validate(e){

	// Hide all error elements on the page
	hideErrors();

	if(formHasErrors()){
		// Prevents the form from submitting
		e.preventDefault();
		return false;
	}

	return true;
}


function load(){
		document.getElementById("form").addEventListener("submit", validate, false);
		document.getElementById("form").reset();
		document.getElementById("form").addEventListener("reset", resetForm, false);
 		
 		// Actions for buttons
	 	document.getElementById("resetButton").addEventListener("click", resetForm);	
	 	//document.getElementById("submitButton").addEventListener("click", submitData);

	 	hideErrors();
 }


document.addEventListener("DOMContentLoaded", load);