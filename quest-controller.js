console.log(2)
function QuestController(){
  console.log(4)
  var qs = new QuestService(getQuestion)
  console.log(10)
  var narrativeElem = document.getElementById('narrative')
  var questionElem = document.getElementById('active-question')


  function getQuestion(){
    console.log(14)
    var question = qs.getNextQuestion()
    if(question.victory){
      return onWin()
    }
    narrativeElem.innerText = question.narrative
    questionElem.innerText = question.body
  }

  this.start = function(){
    getQuestion()
  }

  this.checkGuess = function(e){
    e.preventDefault()

    var form = e.target
    var guess = form['guess'].value

    if(qs.checkAnswer(guess.toLowerCase())){
      getQuestion()
    }else {
      onDeath()
    }
    form.reset()

  }

  function onDeath(){
    narrativeElem.innerText = 'YOU HAVE DIED'
    questionElem.innerText = ''
  }


  function onWin(){
    narrativeElem.innerText = 'The old man steps aside and allows you to continue your quest of epicness ... boring'
    questionElem.innerText = ''
  }


console.log(11)
}