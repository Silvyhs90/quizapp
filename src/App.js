import React, { useEffect, useState } from 'react';
import { Questionaire } from './components';

const API_URL ='https://opentdb.com/api.php?amount=20&category=14&difficulty=easy&type=multiple';

function App() {

const [questions, setQuestions] = useState([]);

useEffect(() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    setQuestions(data.results);
  });
}, []);

const handleAnswer= (answer) => {
  
};

  return questions.length > 0 ? (
    <div className="container"> 
    <Questionaire data={questions[0]} handleAnswer={handleAnswer} />
    </div> 
    ) : (
        <h2 className="text-2xl text-white front-bold">
          Cargando preguntas...!</h2>
    );
}

export default App;