import Flashcard from '../models/Flashcard.js';

// Get all flashcards
export const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
    console.log("Hello");
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new flashcard
export const createFlashcard = async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res.status(400).json({ message: 'Question and answer are required' });
  }
  try {
    const newFlashcard = new Flashcard({ question, answer });
    const savedFlashcard = await newFlashcard.save();
    res.status(201).json(savedFlashcard);
    console.log("Hello 2");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a flashcard
export const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  try {
    const updatedFlashcard = await Flashcard.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );
    if (!updatedFlashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    res.json(updatedFlashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a flashcard
export const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFlashcard = await Flashcard.findByIdAndDelete(id);
    if (!deletedFlashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    res.json({ message: 'Flashcard deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
