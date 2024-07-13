import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import questions from './questions';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png'; 

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const unansweredCount = answers.filter(answer => answer === null).length;
    if (unansweredCount > 0) {
      alert(`Please answer all questions before submitting. ${unansweredCount} question(s) remaining.`);
    } else {
      navigate('/result', { state: { answers } });
    }
  };

  return (
    <div className="questionnaire">
      <header>
        <a href="https://www.arqnxs.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="ARQNXS Logo" className="logo" />
        </a>
      </header>
      <h1>EU AI Act Compliance Questionnaire</h1>
      <p>Answer the following questions to assess your AI system's compliance with the EU AI Act.</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Question
            question={questions[currentQuestion]}
            index={currentQuestion}
            handleAnswer={handleAnswer}
          />
        </motion.div>
      </AnimatePresence>
      <div className="progress-bar">
        <div 
          className="progress"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Questionnaire;