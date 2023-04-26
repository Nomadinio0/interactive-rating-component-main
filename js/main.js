let submitBtn = document.querySelector('#submit')
let ratingContainer = document.querySelector('.rating')
let resultContainer = document.querySelector('.result')
let selectedScore = document.querySelector('.selectedScore')

function removeActive() {
	let activeScore = document.querySelector('.active')
	if (activeScore) {
		console.log(activeScore)
		activeScore.classList.remove('active')
	}
}

let setScore = scoreNumber => {
	removeActive()
	document.querySelector('#score' + scoreNumber).classList.add('active')
	document.getElementById('selectedScore').textContent = scoreNumber
}

let setScore1 = () => {
	setScore(1)
}

let setScore2 = () => {
	setScore(2)
}

let setScore3 = () => {
	setScore(3)
}

let setScore4 = () => {
	setScore(4)
}

let setScore5 = () => {
	setScore(5)
}

function submit() {
	ratingContainer.classList.remove('show')
	resultContainer.classList.add('show')
}

score1.addEventListener('click', setScore1)
score2.addEventListener('click', setScore2)
score3.addEventListener('click', setScore3)
score4.addEventListener('click', setScore4)
score5.addEventListener('click', setScore5)

submitBtn.addEventListener('click', submit)
