
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Divide, Trash2, Plus } from 'lucide-react';
import { removeQuestionFromExam } from '../store/examsSlice';

export default function QuestionQuiz() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const exam = useSelector(state =>
    state.exams.list.find(exam => exam.id === parseInt(id))
  );
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  
  const handleDeleteSelected = () => {
    selectedQuestions.forEach(questionId => {
      dispatch(removeQuestionFromExam({ examId: parseInt(id), questionId }));
    });
    setSelectedQuestions([]);
  };
  const handleSelectAll = (e) => {
    if (e.target.checked) {

      setSelectedQuestions(exam.questions.map(q => q.id));
    } else {

      setSelectedQuestions([]);
    }
  }
  const handleCheckboxChange = (questionId) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };


  if (!exam || !exam.questions) {
    return <div>Loading...</div>;
  };
  





  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Questions</h2>
          <div className="flex gap-2">

            {selectedQuestions.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="btn btn-error gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete Selected ({selectedQuestions.length})
              </button>
            )}
            <button
              onClick={() => navigate(`/questions-totale/${id}`)}
              className="btn btn-primary gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Question
            </button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="text-xs uppercase">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedQuestions.length === exam.questions.length}
                    className="checkbox checkbox-primary"
                  />
                </th>
                <th className="text-xs uppercase">Question</th>
                <th className="text-xs uppercase">Options</th>

              </tr>
            </thead>
            <tbody>
              {exam.questions.map((question, index) => (
                <tr key={`${exam.id}-question-${question.id}-${index}`} className="hover">
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedQuestions.includes(question.id)}
                      onChange={() => handleCheckboxChange(question.id)}
                      className="checkbox checkbox-primary"
                    />
                  </td>
                  <td className="text-sm">
                    {question.text}
                  </td>
                  <td>
                    <ul className="space-y-1">
                      {question.options.map((option, optionIndex) => (
                        <li
                          key={`${exam.id}-question-${question.id}-option-${optionIndex}`}
                          className={`text-sm ${option === question.correctAnswer
                            ? 'text-success font-semibold'
                            : 'text-base-content/70'}`}
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
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-neutral gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
