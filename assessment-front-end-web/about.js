console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function mouseOverCat(evt){
	evt.preventDefault()

	alert("You're almost as cute as this cat!");
}


let form = document.querySelector('#contact');

let pic = document.querySelector('#cat');



form.addEventListener('submit', handleSubmit);

pic.addEventListener('mouseover',mouseOverCat);



