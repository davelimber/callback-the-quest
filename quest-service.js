console.log(1)
function QuestService(getQuestion){
  console.log(5)
  if(typeof getQuestion !== 'function'){
    return console.error('I\'m sorry dave I cannot do that')
  }


  // [].forEach(console.log)



  var currentQuestionIndex = 0
  var currentQuestion = null
  var questions = null
  var baseUrl = 'https://api.myjson.com/bins/utw41'


  function loadQuestions(){
    console.log(7)
    $.get(baseUrl).then(function(response){
      console.log(13)
      console.log(response)
      questions = response
      
      getQuestion()
      console.log(15)
    })
  }
  console.log(6)
  loadQuestions()
  console.log(8)


  // var questions = [{
  //   narrative: 'As you are walking you see a large canyon with a spanning bridge. As you approach the bridge Suddenly before you appears a crazy old dude and asks...',
  //   body: 'What is you name',
  //   answer: 'jake'
  // },{
  //   body: 'What is your quest',
  //   answer: 'i seek the holy grail'
  // },{
  //   body: 'What is you favorite color',
  //   answer: 'green'
  // }]

  this.getNextQuestion = function(){
    
    if(currentQuestionIndex > questions.length - 1){
      return {victory: true}
    }

    currentQuestion = questions[currentQuestionIndex]

    

    return {body: currentQuestion.body, narrative: currentQuestion.narrative}
  }

  this.checkAnswer = function(guess){
    if(guess == currentQuestion.answer.toLowerCase()){
      currentQuestionIndex++
      return true
    }else{
      return false
    }
  }

console.log(9)
}