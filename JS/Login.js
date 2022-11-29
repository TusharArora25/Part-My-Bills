const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function login(){
	var a=document.getElementById("us").value;
	var b=document.getElementById("ps").value;
	var name=sessionStorage.setItem('name',a);
	if(a==b)
	{
		location.href="Home.html";
	}
	else
	{
		alert("Wrong password");
	}
}
