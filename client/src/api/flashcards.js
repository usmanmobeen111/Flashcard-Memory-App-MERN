import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/flashcards';

export const getFlashcards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createFlashcard = async (flashcard) => {
  const response = await axios.post(API_URL, flashcard, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updateFlashcard = async (id, flashcard) => {
  const response = await axios.put(`${API_URL}/${id}`, flashcard, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteFlashcard = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
