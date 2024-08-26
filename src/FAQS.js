// src/components/FAQ.js
import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.faq}>
      <div style={styles.question}>
        <h3>{question}</h3>
        <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <p style={styles.answer}>{answer}</p>}
    </div>
  );
};

const FAQList = () => {
  const questions = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How do you use React?',
      answer: 'You can use React by creating components and managing state.',
    },
    {
      question: 'What is a component?',
      answer: 'A component is a reusable piece of UI in a React application.',
    },
  ];

  return (
    <div style={styles.faqList}>
      {questions.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const styles = {
  faq: {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleButton: {
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  answer: {
    marginTop: '10px',
  },
  faqList: {
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default FAQList;
