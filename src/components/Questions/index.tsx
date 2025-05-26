'use client'
import React, { useState } from 'react';
import styles from './index.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Questions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: 'What is your return policy?', answer: 'Our return policy allows you to return products within 30 days of purchase. Yes, we offer international shipping to many countries' },
    { question: 'Do you ship internationally?', answer: 'Yes, we offer international shipping to many countries.' },
    { question: 'How can I track my order?', answer: 'You can track your order status in the "My Orders" section of your account.' },
    { question: 'Can I change my shipping address?', answer: 'Yes, you can update your shipping address before the order is processed.' },
    { question: 'Do you offer gift cards?', answer: 'Yes, we offer gift cards which can be purchased online.' },
  ];

  return (
    <div className={styles.container} id='faq'>
      <img src="Frame (2).png" alt="" className={styles.topImage} />
      <div className={styles.content}>
        <div className={styles.qAndA}>Q&A</div>
        <div className={styles.questionsTitle}>Questions & Answers</div>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => toggleIndex(index)}
            >
              <div className={styles.faqIcon}>
                {index === activeIndex ? <FaMinus /> : <FaPlus />}
              </div>
              <div className={styles.faqText}>
                <div className={styles.faqQuestion}>{item.question}</div>
                {index === activeIndex && <div className={styles.faqAnswer}>{item.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="Frame (3).png" alt="" className={styles.bottomImage} />
    </div>
  );
};

export default Questions;
