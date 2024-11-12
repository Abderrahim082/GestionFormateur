// QuestionQuiz.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams,useNavigate} from 'react-router-dom';
import { Trash2 } from 'lucide-react'; // Import the trash icon
import { removeQuestionFromExam } from '../store/examsSlice'; // Add this action to your slice

export default function QuestionQuiz() {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const dispatch = useDispatch();
  const exam = useSelector(state => 
    state.exams.list.find(exam => exam.id === parseInt(id))
  );
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleCheckboxChange = (questionId) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleDeleteQuestion = (questionId) => {
    dispatch(removeQuestionFromExam({ examId: parseInt(id), questionId }));
  };

  if (!exam || !exam.questions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Select
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Question
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Options
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {exam.questions.map((question, index) => (
              <tr key={`${exam.id}-question-${question.id}-${index}`} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedQuestions.includes(question.id)}
                    onChange={() => handleCheckboxChange(question.id)}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  {question.text}
                </td>
                <td className="px-6 py-4">
                  <ul className="space-y-1">
                    {question.options.map((option, optionIndex) => (
                      <li 
                        key={`${exam.id}-question-${question.id}-option-${optionIndex}`}
                        className={`text-sm ${option === question.correctAnswer 
                          ? 'text-emerald-600 dark:text-emerald-400 font-semibold' 
                          : 'text-gray-500 dark:text-gray-400'}`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteQuestion(question.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-full transition-all duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-start">
        <button
          onClick={() => navigate(-1)} // This will go back to the previous page
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
