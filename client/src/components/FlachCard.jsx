import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlashCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer"
      onClick={handleFlip}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-lg p-6 flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question</h3>
            <p className="text-gray-600">{card.question}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg p-6 flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-center text-white">
            <h3 className="text-lg font-semibold mb-2">Answer</h3>
            <p>{card.answer}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlashCard;
