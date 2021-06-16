const STORE = {
 questions: {
  accessibility: [
   {
    question: "The word culture means:",
    code: ``,
    answers: [
     "A part of society that is above the common working class",
     "The beliefs and activities that are common to members of a group",
     "An education in a university or college that extends over many years and results in extensive knowledge of a subject",
     "A chemical formula used to make drugs"
    ],
    correctAnswer: "The beliefs and activities that are common to members of a group"
   },
//    {
//     question: "The expression drug culture means:",
//     code: ` `,
//     answers: [
//      "The degree to which drugs have invaded so many aspects of our society and influence how people lead their lives",
//      "A community or city where drug use is widespread",
//      "The group of scientific people who develop drugs and get them produced and into use in society",
//      "The abuse of drugs by the rich and famous"
//     ],
//     correctAnswer: "The degree to which drugs have invaded so many aspects of our society and influence how people lead their lives"
//    }
//    ,{
//     question: "The word Center for Disease Control (CDC) means:",
//     code: ``,
//     answers: [
//      "A place you go to when you have a disease and need medical care",
//      "The central location in a country where the germs that cause diseases are developed and then spread into the society as a method of population control",
//      "An agency of the US Government that conducts research into the origin and occurrence of diseases and develops methods for their control and prevention",
//      "An establishment in every city where parents take their children to get vaccinations against common diseases"
//     ],
//     correctAnswer: "An agency of the US Government that conducts research into the origin and occurrence of diseases and develops methods for their control and prevention"
//    }
//    ,{
//     question: "The word rush means:",
//     code: ``,
//     answers: [
//      "A sudden intake of air that a person takes when frightened or surprised",
//      "The reddening of the skin when a person gets too warm and is unable to cool down",
//      "The first surge in sensation felt when smoking or injecting a drug, varying in length depending on the drug",
//      "An increase in heart rate"
//     ],
//     correctAnswer: "The first surge in sensation felt when smoking or injecting a drug, varying in length depending on the drug"
//    }
//    ,{
//     question: "The word cocktail means:",
//     code: ``,
//     answers: [
//      "A combination of various drugs taken at the same time",
//      "A hairstyle worn by young drug addicts",
//      "A dessert made with whipped cream, jello and custard",
//      "A type of drug made from the beak of a small bird that is crushed, soaked in oil and then smoked in a pipe;"
//     ],
//     correctAnswer: "A combination of various drugs taken at the same time"
//    }
  ],
  arrays: [
   {
    question: "The word poison means:",
    code: ``,
    answers: [
     "A type of candy made with a lot of sugar",
     "A substance that causes illness, injury or death if taken into the body or produced within the body",
     "The name of a popular rock group that pushes drug use",
     "A dark pink tablet used to produce a deep sleep"
    ],
    correctAnswer: "A substance that causes illness, injury or death if taken into the body or produced within the body"
   }
//    ,{
//     question: "The word stimulant means:",
//     code: ``,
//     answers: [
//      "A drug that increases immediate energy and alertness",
//      "A natural substance that improves growth rate, the ability to digest food and build strong bones",
//      "Loud music with a strong, rhythmic beat",
//      "Causing laughter and enjoyment; funny"
//     ],
//     correctAnswer: "A drug that increases immediate energy and alertness"
//    }
//    ,{
//     question: "The word sedative means:",
//     code: ``,
//     answers: [
//      "An alcoholic drink taken when someone hears bad news",
//      "A place where people go to recover from an illness",
//      "Someone who talks continuously and doesn’t let other people speak",
//      "A medicine or drug that calms or makes one sleep"
//     ],
//     correctAnswer: "A medicine or drug that calms or makes one sleep"
//    }
  ],
  elements: [
    {
            question: "The expression drug culture means:",
            code: ` `,
            answers: [
             "The degree to which drugs have invaded so many aspects of our society and influence how people lead their lives",
             "A community or city where drug use is widespread",
             "The group of scientific people who develop drugs and get them produced and into use in society",
             "The abuse of drugs by the rich and famous"
            ],
            correctAnswer: "The degree to which drugs have invaded so many aspects of our society and influence how people lead their lives"
           }
   
  ],
  flexbox: [
    {
        question: "The word Center for Disease Control (CDC) means:",
        code: ``,
        answers: [
         "A place you go to when you have a disease and need medical care",
         "The central location in a country where the germs that cause diseases are developed and then spread into the society as a method of population control",
         "An agency of the US Government that conducts research into the origin and occurrence of diseases and develops methods for their control and prevention",
         "An establishment in every city where parents take their children to get vaccinations against common diseases"
        ],
        correctAnswer: "An agency of the US Government that conducts research into the origin and occurrence of diseases and develops methods for their control and prevention"
       }
  ],
  forms: [
    {
        question: "The word rush means:",
        code: ``,
        answers: [
         "A sudden intake of air that a person takes when frightened or surprised",
         "The reddening of the skin when a person gets too warm and is unable to cool down",
         "The first surge in sensation felt when smoking or injecting a drug, varying in length depending on the drug",
         "An increase in heart rate"
        ],
        correctAnswer: "The first surge in sensation felt when smoking or injecting a drug, varying in length depending on the drug"
       }
  ],
  loops: [
    {
        question: "The word cocktail means:",
        code: ``,
        answers: [
         "A combination of various drugs taken at the same time",
         "A hairstyle worn by young drug addicts",
         "A dessert made with whipped cream, jello and custard",
         "A type of drug made from the beak of a small bird that is crushed, soaked in oil and then smoked in a pipe;"
        ],
        correctAnswer: "A combination of various drugs taken at the same time"
       },
  ],
  methods: [
    {
        question: "The word stimulant means:",
        code: ``,
        answers: [
         "A drug that increases immediate energy and alertness",
         "A natural substance that improves growth rate, the ability to digest food and build strong bones",
         "Loud music with a strong, rhythmic beat",
         "Causing laughter and enjoyment; funny"
        ],
        correctAnswer: "A drug that increases immediate energy and alertness"
       }
  ],
  CSS: [
    {
        question: "The word sedative means:",
        code: ``,
        answers: [
         "An alcoholic drink taken when someone hears bad news",
         "A place where people go to recover from an illness",
         "Someone who talks continuously and doesn’t let other people speak",
         "A medicine or drug that calms or makes one sleep"
        ],
        correctAnswer: "A medicine or drug that calms or makes one sleep"
       }
  ],
  
 
  }
 };


// Make the quiz. Create a model for our app's state
function makeQuiz(){
	// Creating an object to store the app's state when beginning the quiz
	return {
		// Gathering a random question out of the available questions for each category
		questions: helpers.getRandomQuestions(STORE),
		// Boolean for if the quiz is in progress or not
		midQuiz: false,
		// Array of correct/incorrect answers to use for our progress bar
		progress: {
			progressBar: [],
			incorrectCategories: []
		},
		// Boolean to determine if the end state should display
		completed: false,
		// Monitoring which question we are currently on
		currentQuestion: 0,
		// Keeps track of total correct answers
		correctAnswers: 0,
		// Keeps current selected answer
		currentAnswer: "",
		// Keeps track of % completed
		percCorrect: 0
	}
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState){

	// This is the completed state of of a quiz
	if(appState.completed){
		
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){

				// Display results of the quiz
				$showResults(appState);
				$('.results-wrapper').hide().removeClass('hide');
				$('.question-answer-wrapper, .results-wrapper').fadeIn(500);
	    });

	// This is if the app is just starting
	} else if(appState.midQuiz === false){

		// Set a flag that the app has begun
		appState.midQuiz = true;
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
			.done(function(){
				// Remove any progress from a previous quiz (if any);
				helpers.updateProgressBar(appState);
				$('.progress-count').html('1 / 8');
				$('.progress-perc').html('');
				// Kill previous results
				$('.failures').remove();
				// Lots to do... mostly just setting up a new environment for a new quiz
				$updateQuestion(appState);
				$('progress-bar').empty();
				$('progress-fill').html('Progress: <span class="progress-count">1 / 8</span><span class="progress-perc"></span>');
				$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
				$('.submit-btn, .progress, .progress-bar').removeClass('hide');
				$('.progress, .progress-bar').hide();
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
				if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
	    });

	// This is if the app is in the middle of execution
	} else if(appState.midQuiz){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){
				$updateQuestion(appState);
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
	    });
	}
}

// Work in progress...
function $showResults(appState){
	if(appState.correctAnswers === 8){
		let endMsg = `You got ${appState.percCorrect}% correct!`;
	} else {
		$('.answer-btn').remove();
		let endMsg = `You got ${appState.percCorrect}% correct!`
		let endFeedback = ``;
		if(appState.progress.incorrectCategories.length === 0){
			endFeedback = `You aced it! Good job!`;
		} else {
			endFeedback = `You may want to study up on the following categories:`;
		}
		
		$('.quiz-end-score').html(endMsg);
		let $failList = $('<ul class="failures"></ul>');
		appState.progress.incorrectCategories.map((cat => {
			$failList.append("<li class='category'>" + cat + "</li>");
		}));
		$('.quiz-end-feedback-p').html(endFeedback);
		$('.quiz-end-categories').append($failList);
		$('.results-wrapper').removeClass('hide').css('display', 'flex');
		$('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
	}

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState){
	$('.answer-btn').remove();

	// Update the question and code text with the current question
	$('.question').html(appState.questions[appState.currentQuestion].question);

	// This is a hack to hide/show the code portion
	// Only 1/3 of the questions contain code so we hide it if they aren't present
	if(appState.questions[appState.currentQuestion].code == ``){
		$('.code').addClass('hide');
	} else {
		$('.code').removeClass('hide');
		$('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
	}
	
	// Change continue back to submit
	$('.continue-btn')
		.val("Submit")
		.removeClass('continue-btn')
		.addClass('submit-btn')
		.prop('disabled', true);

	// Add in available answers for the question
	let $answers = [];

	// Adding the answers to a temporary array
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){

		// Add current question answers to an array
		let $answer = $('<button class="answer-btn" type="button"></button>');
		$answer.html(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}

	// Shuffle the answers
	helpers.shuffleAnswers($answers)

	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState){

	// This will be returned true or false based on their answer
	let correct;

	// Add styles to the answers to show if their answer was correct or not
	$('.answer-btn').each(function () {
		if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			// If answer is correct and selected...
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
				appState.questions[appState.currentQuestion];
			}

		// Handle correct answer if selected answer is incorrect
		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail dim-answer');
			correct = "fail";
			appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

		// Dim the other answers to make the correct one more prevalent
		} else {
			$(this).addClass('dim-answer');
		}
	});

	// Add a progress bar indicator to our appState object
	appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
	
	// Update our percent correct (parse a float and set it to a fixed percentage)
	appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

	// Update our current question VS total quiz length
	$('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

	// Update our current correct percentage
	$('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

	// Change submit back to continue
	$('.submit-btn')
		.val("Continue")
		.removeClass('submit-btn')
		.addClass('continue-btn')

	// Disable selecting answers
	$('.answer-btn').prop("disabled", true);

	// Update our progress-bar DOM
	helpers.updateProgressBar(appState);

	// Continue to next question
	appState.currentQuestion++;

	// Verify if we're done or not
	if(appState.currentQuestion === appState.questions.length){
		appState.completed = true;
	}
	
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
		}
	}, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
	// Pick a random question from the available ones
	pickRandomQ: function(obj,section){
		return Math.floor(Math.random() * obj.questions[section].length);		
	},
	// Gather a random question from every category
	getRandomQuestions: function(obj){
		let questions = [];
		let categories = Object.keys(obj.questions);
		categories.forEach((cat) => {
			let randomQ = this.pickRandomQ(obj,cat);
			let question = obj.questions[cat][randomQ];
			question.category = cat;
			questions.push(question);
		});
		return questions;
	},
	// Shuffle the answers so they don't appear in the same order
	shuffleAnswers: function(arr){
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	},
	// Update progress bar DOM element
	updateProgressBar: function(appState){
		$('.progress-bar').empty();
		appState.progress.progressBar.forEach((progInd => {
			$('.progress-bar').append(progInd);
		}))
	}
}

// Lets start the show
$(function(){

	// Kill any form refresh
	$('.answer-wrapper').on('submit', function(e){
		e.preventDefault();
	});

	// Storage for quiz app state
	let quizData;

	// Start quiz
	$('.start-quiz, .retry-btn').on('click', function(){
		quizData = makeQuiz();
		$fade(quizData);
	});

	// Select an answer
	$('.question-answer-wrapper').on('click', '.answer-btn', function(){
		selectAnswer($(this));
	})

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.submit-btn', function(e){
		submitAnswer(quizData);
	});

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.continue-btn', function(){
		$fade(quizData);
	});

	// Easter egg to chastize the user
	$('.quit-quiz').on('click', function(){
		killQuiz();
	})
})
