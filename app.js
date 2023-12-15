let currentQuestionIndex = 0;
let questionObjects = [];
fetch('https://cdn.contentful.com/spaces/f9ludc6g4f0p/environments/master/entries?access_token=eXdjQV-YwAoRMbiHd5NIvIqCZPL_taOIx8xqPve9XMk&hockeyTriviaGame')
.then(response => response.json())
.then(data => {
	questionObjects = data.items.map(item => item.fields);
    populateQuestion(questionObjects[0]);
})
.catch(error => console.error('Error:', error));

function populateQuestion(questionObject) {
	const questionElement = document.querySelector(".question-title");
	questionElement.textContent = questionObject.questions;

	const answerOneElement = document.querySelector(".answer1");
	answerOneElement.textContent = questionObject.correctAnswers;
	
	const answerTwoElement = document.querySelector(".answer2");
	answerTwoElement.textContent = questionObject.wrongAnswers;

    const nextQuestionButton = document.getElementById('nextQuestion');
    nextQuestionButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionObjects.length) {
            populateQuestion(questionObjects[currentQuestionIndex]);
            } else {
            currentQuestionIndex = 0;
            populateQuestion(questionObjects[currentQuestionIndex]);
            }
        populateQuestion(questionObjects[currentQuestionIndex]);
        console.log(currentQuestionIndex);
         };
}