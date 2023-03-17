function feedback(evt){
	evt.preventDefault()

	alert("Good Choice!");
}
let button = document.querySelector('#feedback')
button.addEventListener('submit',feedback)


function favColor(evt){
	evt.preventDefault()

	alert('My favorite color is blue.')
}
let color = document.querySelector('#color')
color.addEventListener('click',favColor)


function favPlace(evt){
	evt.preventDefault()

	alert('My favorite place is Cozumel.')
}
let place = document.querySelector('#place')
place.addEventListener('click',favPlace)


function favRitual(evt){
	evt.preventDefault()

	alert('My favorite ritual is eating German Pancakes every Christmas morning.')
}
let ritual = document.querySelector('#ritual')
ritual.addEventListener('click',favRitual)