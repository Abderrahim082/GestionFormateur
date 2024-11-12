import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExam, addExam } from '../store/examsSlice';
import ExamCard from '../components/ExamCard';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

export default function Exams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exams = useSelector(state => state.exams.list);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExam, setNewExam] = useState({ title: '', course: '', createdAt: '', status: 'draft' });

  useEffect(() => {
    const uniqueCourses = [...new Set(exams.map(exam => exam.course))];
    setCourses(uniqueCourses);
  }, [exams]);

  const filteredExams = selectedCourse
    ? exams.filter(exam => exam.course === selectedCourse)
    : exams;

  const handleDelete = (id) => {
    dispatch(removeExam(id));
  };

  const handleView = (id) => {
    navigate(`/question-quiz/${id}`);
  };
  
  const handleAddQuestions = (id) => {
    navigate(`/questions-totale/${id}`);
  };
  
  const handleEdit = (id) => {
    navigate(`/edit-exam/${id}`);
  };
  

  const handleAddExam = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(addExam({ ...newExam, id, questions: [], image: '/placeholder.svg?height=150&width=250' }));
    setNewExam({ title: '', course: '', createdAt: '', status: 'draft' });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Exams</h1>
      <div className="flex justify-between items-center mb-6">
      <div className="relative">
    <select
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
      className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
      text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-lg shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
      hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-200
      cursor-pointer min-w-[200px]"
    >
      <option value="" className="text-gray-600 dark:text-gray-300">
        All Courses
      </option>
      {courses.map(course => (
        <option 
          key={course} 
          value={course}
          className="text-gray-800 dark:text-gray-200"
        >
          {course}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg 
        className="w-5 h-5 text-gray-400 dark:text-gray-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
  <button
    onClick={() => setIsModalOpen(true)}
    className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 
    hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-lg
    transform hover:scale-105 transition-all duration-200 space-x-2
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    active:scale-95"
  >
    <PlusCircle className="w-5 h-5" />
    <span className="font-semibold">Add Exam</span>
  </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.length > 0 ? (
          filteredExams.map(exam => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onView={handleView}
              onAddQuestions={handleAddQuestions}
            />
          ))
        ) : (
          <p className="text-gray-600 col-span-3 text-center">No exams available.</p>
        )}
      </div>

      
  {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add New Exam</h2>
      <form onSubmit={handleAddExam} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            value={newExam.title}
            onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Course
          </label>
          <select
            value={newExam.course}
            onChange={(e) => setNewExam({ ...newExam, course: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date and Time
          </label>
          <input
            type="datetime-local"
            value={newExam.createdAt}
            onChange={(e) => setNewExam({ ...newExam, createdAt: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <select
            value={newExam.status}
            onChange={(e) => setNewExam({ ...newExam, status: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="draft">Draft</option>
            <option value="active">Active</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Image URL
          </label>
          <input
            type="text"
            value={newExam.image}
            onChange={(e) => setNewExam({ ...newExam, image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Save Exam
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}