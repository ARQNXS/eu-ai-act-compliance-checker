import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import questions from './questions';
import logo from './logo.png'; 

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || { answers: [] };
  const [complianceScore, setComplianceScore] = useState(0);

  useEffect(() => {
    const compliantCount = answers.filter(answer => answer === true).length;
    const score = Math.round((compliantCount / answers.length) * 100);
    setComplianceScore(score);
  }, [answers]);

  const getComplianceLevel = (score) => {
    if (score >= 90) return { level: 'High', color: '#4CAF50' };
    if (score >= 70) return { level: 'Moderate', color: '#FFC107' };
    return { level: 'Low', color: '#F44336' };
  };

  const complianceLevel = getComplianceLevel(complianceScore);

  const generateAdvice = () => {
    const advice = {};
    answers.forEach((answer, index) => {
      if (answer === false) {
        const category = questions[index].category;
        if (!advice[category]) {
          advice[category] = [];
        }
        advice[category].push({ text: questions[index].advice, article: questions[index].text });
      }
    });
    return advice;
  };

  const adviceByCategory = generateAdvice();

  const handleContactClick = () => {
    const subject = encodeURIComponent("Request for AI Act Compliance Assistance");
    const body = encodeURIComponent(`Hello Nigel,

I recently completed the EU AI Act Compliance Check and would like to discuss how ARQNXS can help improve or build my AI application within the EU AI Act guidelines.

My compliance score: ${complianceScore}%
Compliance level: ${complianceLevel.level}

I look forward to hearing from you.

Best regards,
[Your Name]`);

    window.location.href = `mailto:nigel@arqnxs.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div 
      className="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <a href="https://www.arqnxs.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="ARQNXS Logo" className="logo" />
        </a>
      </header>
      <h1>EU AI Act Compliance Results</h1>
      
      <motion.div 
        className="compliance-score"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#e0e0e0" strokeWidth="10" />
          <circle 
            cx="100" 
            cy="100" 
            r="90" 
            fill="none" 
            stroke={complianceLevel.color} 
            strokeWidth="10" 
            strokeDasharray={`${complianceScore * 5.65}, 565`}
            transform="rotate(-90 100 100)"
          />
          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="36" fill={complianceLevel.color}>
            {complianceScore}%
          </text>
        </svg>
        <p>Compliance Level: <strong style={{ color: complianceLevel.color }}>{complianceLevel.level}</strong></p>
      </motion.div>

      <motion.div 
        className="advice-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2>Compliance Improvement Advice</h2>
        {Object.keys(adviceByCategory).length > 0 ? (
          Object.entries(adviceByCategory).map(([category, adviceList]) => (
            <motion.div 
              key={category}
              className="category-advice"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{category}</h3>
              {adviceList.map((advice, index) => (
                <div key={index} className="advice-item">
                  <p className="advice-text">{advice.text}</p>
                  <p className="advice-article"><strong>Relevant Article:</strong> {advice.article}</p>
                </div>
              ))}
            </motion.div>
          ))
        ) : (
          <p>Congratulations! Your AI system appears to be fully compliant with the EU AI Act based on your responses.</p>
        )}
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <h3>Need expert assistance with EU AI Act compliance?</h3>
        <p>Contact ARQNXS for personalized guidance on improving or building your AI application within EU AI Act guidelines.</p>
        <button className="cta-button" onClick={handleContactClick}>
          Contact ARQNXS for Assistance
        </button>
      </motion.div>

      <motion.div
        className="action-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button onClick={() => navigate('/')}>Retake Questionnaire</button>
        <button onClick={() => window.print()}>Print Results</button>
      </motion.div>
    </motion.div>
  );
};

export default Result;