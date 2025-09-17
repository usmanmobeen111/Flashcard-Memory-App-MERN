import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlashCardForm = ({ onSubmit, onCancel, initialData }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setAnswer(initialData.answer);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    onSubmit({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg max-w-md mx-auto mb-8"
    >
      <div className="mb-4">
        <label htmlFor="question" className="block text-gray-700 font-semibold mb-2">
          Question
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500 text-gray-800"
          placeholder="Enter the question"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="answer" className="block text-gray-700 font-semibold mb-2">
          Answer
        </label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500 text-gray-800"
          placeholder="Enter the answer"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <motion.button
          type="button"
          onClick={onCancel}

          className="px-4 py-2 rounded border border-purple-600 hover:bg-purple-600 hover:text-white duration-300 transition cursor-pointer"
        >
          Cancel
        </motion.button>
        <motion.button
          type="submit"

          className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition duration-300 cursor-pointer"
        >
          Save
        </motion.button>
      </div>
    </motion.form>
  );
};

export default FlashCardForm;
