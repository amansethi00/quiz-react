import './App.css';
import {useState} from "react";

var results= [
  {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?",
      "correct_answer": "Objective-C",
      "options": [
        "Objective-C",
          "C#",
          "Ruby",
          "C++"
      ]
  },
  {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is the lead singer of the British pop rock band Coldplay?",
      "correct_answer": "Chris Martin",
      "options": [
        "Chris Martin",
          "Jonny Buckland",
          "Guy Berryman",
          "Will Champion"
      ]
  },
  {
      "category": "Celebrities",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does film maker Dan Bell typically focus his films on?",
      "correct_answer": "Abandoned Buildings and Dead Malls",
      "options": [
        "Abandoned Buildings and Dead Malls",
          "Historic Landmarks",
          "Action Films",
          "Documentaries "
      ]
  },
  {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these is NOT a Humongous Entertainment game franchise?",
      "correct_answer": "Commander Keen",
      "options": [
        "Commander Keen",
          "Pajama Sam",
          "Putt-Putt",
          "Freddi Fish"
      ]
  },
  {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which Beatles album does NOT feature any of the band members on it&#039;s cover?",
      "correct_answer": "The Beatles (White Album)",
      "options": [
        
          "Rubber Soul",
          "The Beatles (White Album)",
          "Abbey Road",
          "Magical Mystery Tour"
      ]
  },
  {
      "category": "Entertainment: Board Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which one of these is not a real game in the Dungeons &amp; Dragons series?",
      "correct_answer": "Extreme Dungeons &amp; Dragons",
      "options": [
          "Advanced Dungeons &amp; Dragons",
          "Dungeons &amp; Dragons 3.5th edition",
          "Extreme Dungeons &amp; Dragons",
          "Advanced Dungeons &amp; Dragons 2nd edition"
      ]
  },
  {
      "category": "Science: Gadgets",
      "type": "multiple",
      "difficulty": "easy",
      "question": "When was the DVD invented?",
      "correct_answer": "1995",
      "options": [
          "2000",
          "1990",
          "1980",
          "1995",
      ]
  },
  {
      "category": "Geography",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
      "correct_answer": "Sri Lanka",
      "options": [
          "Kiribati",
          "Sri Lanka",
          "Scotland",
          "Bhutan"
      ]
  },
  {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which country, not including Japan, has the most people of japanese decent?",
      "correct_answer": "Brazil",
      "options": [
        "Brazil",
          "China",
          "South Korea",
          "United States of America"
      ]
  },
  {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The Nike apparel and footwear brand takes it&#039;s name from the Greek goddess of what?",
      "correct_answer": "Victory",
      "options": [
          "Courage",
          "Strength",
          "Honor",
          "Victory",
      ]
  }
];
function App() {
  const [questionNumber,setQuestionNumber]=useState(0);
  const [showScore,setShowScore] = useState(false);
  const [score,setScore] = useState(0);
  function handleAnswerOptionClick(value){
    if(value === results[questionNumber].correct_answer){
      setScore(score+1);
    }
    if(questionNumber < (results.length-1)){
      setQuestionNumber(questionNumber+1);
    }
    else{
      setShowScore(true);
    }
    
  }
  return (
    <div className="App">
      <header className="head">G.K Quiz</header>
      <div className="container">
        {showScore? (<div className="showScore">You scored {score} out of {results.length}</div>):(
        
        <>
           <div className="question-container">
            Question {questionNumber+1} of {results.length}
            <div className="question">{results[questionNumber]["question"]}</div>
            </div>
          <div className="answer-container">
          {results[questionNumber]["options"].map((value, index) => {
          return (
            <li key={index} id="output" className="options" value={value} onClick={() => handleAnswerOptionClick(value)}>
               {value}
            </li>
          );
        })}
          </div>
        </>
        )}
         
         
      </div>
     </div>
            
	);
}

export default App;
