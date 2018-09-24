// Press the "Let's Begin Button to start"
$('#start').on('click', function(){
    console.log("Button Clicked");
    game.start();

});

// Questions and answers array
var questions = [{
    question:"Who directed the cult movie Pulp Fiction?",
    answers: ["Zack Snyder", "Quentin Tarantino", "James Cameron", "Martin Scorcesi"],
    correctAnswer: "Quentin Tarantino"
},

{
    question:"Who sings the hit song 'Hotel California'?",
    answers: ["The Beatles", "The Grateful Dead", "Jimi Hendrix", "The Eagles"],
    correctAnswer: "The Eagles"
},

{
    question:"Whose famous father defended OJ Simpson in his murder trial?",
    answers: ["Kim Kardashian", "Paris Hilton", "Lindsay Lohan", "Jessica Simpson"],
    correctAnswer: "Kim Kardashian"
},

{
    question:"What are the names of the four main characters in South Park?",
    answers: ["Tweak, Token, Stan, Kenny", "Stan, Kyle, Eric, Kenny", "Fry, Bender, Leela, Zoidberg", "Wendy, Stan, Bender, Archer"],
    correctAnswer: "Stan, Kyle, Eric, Kenny"
},

{
    question:"Who created the hit show Family Guy?",
    answers: ["Matt Stone and Trey Parker", "Matt Groening", "Seth MacFarlane", "Gary Gygax"],
    correctAnswer: "Seth MacFarlane"
},

{
    question:"This Japanese anime features a man named Goku defending planet Earth against a number of major threats",
    answers: ["One Piece", "Berserk", "Sailor Moon", "Dragon Ball Z"],
    correctAnswer: "Dragon Ball Z"
},

{
    question:"This professional wrestler was known in his run as 'The Rattlesnake'",
    answers: ["The Rock", "Stone Cold Steve Austin", "Antonio Inoki", "Randy Savage"],
    correctAnswer: "Steve Austin"
},

{
    question:"Led Zeppelin is best known for which of the following songs?",
    answers: ["Stairway to Heaven", "Purple Haze", "I am the Walrus", "Fire and Rain"],
    correctAnswer: "Stairway to Heaven"
},

{
    question:"This movie, based off of a graphic novel of the same name, was released in 2009",
    answers: ["300", "Spider-Man", "Suckerpunch", "Watchmen"],
    correctAnswer: "Watchmen"
},

{
    question:"Famous rapper Eminem was associated with what band?",
    answers: ["Rage Against the Machine", "D12", "Wu-Tang Clan", "Black Hippie"],
    correctAnswer: "D12"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time's Up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id = "counter">60</span> Seconds</h2>')
        $('#start').remove();
        for(var i = 0; i < questions.length; i++){
            $('#subwrapper').append('<h2>' +questions[i].question + '</h2>');
            for(var j = 0; j < questions[i].answers.length; j++){
                $('#subwrapper').append("<input type = 'radio' name = 'question-"+i+"' value='" +questions[i].answers[j] +"'>"+questions[i].answers[j]);
            }
        } 
    },
    done: function(){
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-1]":checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-2]":checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-3]":checked'), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-4]":checked'), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-5]":checked'), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-6]":checked'), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-7]":checked'), function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-8]":checked'), function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($('input[name="question-9]":checked'), function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
    this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers:" +this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers:" +this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: " +(questions.length - (this.incorrect + this.correct))+"</h3>");
    }
}