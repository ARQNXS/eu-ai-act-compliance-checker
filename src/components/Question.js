import React from 'react';
import { motion } from 'framer-motion';

const Question = ({ question, index, handleAnswer }) => {
  return (
    <motion.div
      className="question"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{index + 1}. {question.text}</h2>
      <p className="category">Category: <strong>{question.category}</strong></p>
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(true)}
        >
          Yes
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(false)}
        >
          No
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Question;