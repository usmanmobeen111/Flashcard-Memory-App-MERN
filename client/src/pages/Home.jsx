import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import FlashCard from '../components/FlachCard';
import FlashCardForm from '../components/FlashCardForm';
import Header from '../components/Header';
import { getFlashcards, createFlashcard, updateFlashcard, deleteFlashcard } from '../api/flashcards';

const Home = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const data = await getFlashcards();
      setFlashcards(data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  const handleCreate = async (card) => {
    try {
      const newCard = await createFlashcard(card);
      setFlashcards([...flashcards, newCard]);
      setShowForm(false);
    } catch (error) {
      console.error('Error creating flashcard:', error);
    }
  };

  const handleUpdate = async (id, card) => {
    try {
      const updatedCard = await updateFlashcard(id, card);
      setFlashcards(flashcards.map(fc => fc._id === id ? updatedCard : fc));
      setEditingCard(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating flashcard:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFlashcard(id);
      setFlashcards(flashcards.filter(fc => fc._id !== id));
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  const handleEdit = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 text-purple-600">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Flashcard Memory App</h1>
          <p className="text-xl text-slate-600">Master your knowledge with interactive flashcards</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center mx-auto mb-8"
        >
          <FaPlus className="mr-2" />
          Add New Flashcard
        </motion.button>

        {showForm && (
          <FlashCardForm
            onSubmit={editingCard ? (card) => handleUpdate(editingCard._id, card) : handleCreate}
            onCancel={() => { setShowForm(false); setEditingCard(null); }}
            initialData={editingCard}
          />
        )}

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {flashcards.map((card, index) => (
            <motion.div
              key={card._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <FlashCard card={card} />
              <div className="flex justify-center mt-4 space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEdit(card)}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FaEdit />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(card._id)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTrash />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
