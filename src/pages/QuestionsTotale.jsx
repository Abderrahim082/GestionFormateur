import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addQuestionToTotal, addQuestionsToExam } from '../store/examsSlice';

export default function QuestionsTotale() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allQuestions = useSelector(state => state.exams.allQuestions);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ 
    text: '', 
    options: ['', '', '', ''], 
    correctAnswer: '' 
  });

  const handleSaveChanges = () => {
    const selectedQuestionsData = allQuestions.filter(q => selectedQuestions.includes(q.id));
    dispatch(addQuestionsToExam({ examId: parseInt(id), questions: selectedQuestionsData }));
    navigate(`/question-quiz/${id}`);
  };

  const handleCheckboxChange = (questionId) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleInputChange = (e, field) => {
    setNewQuestion(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...newQuestion.options];
    newOptions[index] = value;
    setNewQuestion(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const handleAddNewQuestion = (e) => {
    e.preventDefault();
    const question = { ...newQuestion, id: Date.now() };
    dispatch(addQuestionToTotal(question));
    setNewQuestion({ text: '', options: ['', '', '', ''], correctAnswer: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-base-content">All Questions</h1>
    <div className="space-x-4">
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
        Add New Question
      </button>
      <button onClick={handleSaveChanges} className="btn btn-success">
        Save Changes
      </button>
    </div>
  </div>
  
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th className="bg-base-200">Select</th>
          <th className="bg-base-200">Question</th>
          <th className="bg-base-200">Options</th>
        </tr>
      </thead>
      <tbody className="bg-base-100 divide-y divide-base-200">
            {allQuestions.map((question) => (
              <tr key={question.id} className="hover:bg-base-200 transition-colors duration-200">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedQuestions.includes(question.id)}
                    onChange={() => handleCheckboxChange(question.id)}
                    className="checkbox checkbox-primary"
                  />
                </td>
                <td className="p-4 text-sm">
                  {question.text}
                </td>
                <td className="p-4">
                  <ul className="space-y-1">
                    {question.options.map((option, idx) => (
                      <li 
                        key={idx} 
                        className={`text-sm ${option === question.correctAnswer 
                          ? 'text-success font-semibold' 
                          : 'text-base-content/60'}`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="mt-6 flex justify-start">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2 shadow-md"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>Back</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add New Question</h2>
              <form onSubmit={handleAddNewQuestion} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Question Text
                  </label>
                  <input
                    type="text"
                    value={newQuestion.text}
                    onChange={(e) => handleInputChange(e, 'text')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    required
                  />
                </div>
                
                <div className="space-y-4">
                  {newQuestion.options.map((option, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Option {index + 1}
                      </label>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Correct Answer
                  </label>
                  <select
                    value={newQuestion.correctAnswer}
                    onChange={(e) => handleInputChange(e, 'correctAnswer')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    required
                  >
                    <option value="">Select correct answer</option>
                    {newQuestion.options.map((option, index) => (
                      option && <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
