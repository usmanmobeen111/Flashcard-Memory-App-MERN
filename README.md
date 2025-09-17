# 🧠 Flashcard Memory App

A modern, interactive flashcard application built with the MERN stack to help you master your knowledge through spaced repetition and engaging animations.

![Flashcard App](https://img.shields.io/badge/React-19.1.1-blue) ![Express](https://img.shields.io/badge/Express-5.1.0-green) ![MongoDB](https://img.shields.io/badge/MongoDB-8.18.1-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-blue) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.13-purple)

## ✨ Features

- 🎴 **Interactive Flashcards**: Click to flip between questions and answers
- ➕ **Create & Edit**: Easily add new flashcards or modify existing ones
- 🗑️ **Delete**: Remove flashcards you no longer need
- 🎨 **Modern Design**: Beautiful gradients and smooth animations
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🚀 **Fast & Smooth**: Powered by Framer Motion for buttery animations
- 🔄 **Real-time Updates**: Changes reflect instantly with MongoDB backend

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19** - Modern React with hooks
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🎭 **Framer Motion** - Animation library for React
- 🎯 **React Icons** - Beautiful icons from React Icons
- 🌐 **Axios** - HTTP client for API calls

### Backend
- 🚀 **Express.js** - Fast, unopinionated web framework
- 🍃 **MongoDB** - NoSQL database
- 🧩 **Mongoose** - Elegant MongoDB object modeling
- 🔒 **CORS** - Cross-Origin Resource Sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flashcard-memory-app.git
   cd flashcard-memory-app
   ```

2. **Install dependencies**

   For the server:
   ```bash
   cd server
   npm install
   ```

   For the client:
   ```bash
   cd ../client
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/flashcardapp
   PORT=5000
   ```

4. **Start the application**

   Start the server:
   ```bash
   cd server
   npm start
   ```

   In a new terminal, start the client:
   ```bash
   cd client
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown by Vite)

## 📁 Project Structure

```
flashcard-memory-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/            # API calls
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # App entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json
└── README.md
```

## 🎯 Usage

1. **Add a Flashcard**: Click the "Add New Flashcard" button
2. **Fill in Question & Answer**: Enter your question and corresponding answer
3. **Save**: Click save to add it to your collection
4. **Study**: Click on any flashcard to flip between question and answer
5. **Edit**: Use the edit button to modify existing flashcards
6. **Delete**: Remove flashcards with the delete button

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

---

Made with ❤️ and lots of ☕
