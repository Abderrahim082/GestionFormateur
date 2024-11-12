// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exams from './pages/Exams';
import QuestionsTotale from './pages/QuestionsTotale';
import QuestionQuiz from './pages/QuestionQuiz';
import EditExam from './pages/EditExam';
import DarkModeToggle from './components/DarkModeToggle';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <DarkModeToggle />
          <Routes>
            <Route path="/" element={<Exams />} />
            <Route path="/questions-totale/:id" element={<QuestionsTotale />} />
            <Route path="/question-quiz/:id" element={<QuestionQuiz />} />
            <Route path="/edit-exam/:id" element={<EditExam />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
