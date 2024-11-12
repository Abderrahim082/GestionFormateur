import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Exams from './pages/Exams';
import QuestionsTotale from './pages/QuestionsTotale';
import QuestionQuiz from './pages/QuestionQuiz';
import EditExam from './pages/EditExam';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Exams />} />
          <Route path="/questions-totale/:id" element={<QuestionsTotale />} />
          <Route path="/question-quiz/:id" element={<QuestionQuiz />} />
          <Route path="/edit-exam/:id" element={<EditExam />} />
        </Routes>
        <DarkModeToggle />
      </Router>
    </div>
  );
}

export default App;
