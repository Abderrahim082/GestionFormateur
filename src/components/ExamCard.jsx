import React from 'react';
import { Pencil, Trash2, Eye, Plus, Award } from 'lucide-react';

export default function ExamCard({ exam, onDelete, onEdit, onView, onAddQuestions }) {
  const statusColors = {
    active: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    draft: 'bg-amber-100 text-amber-800 border border-amber-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="relative">
          <img 
            src={exam.image} 
            alt={exam.title} 
            className="w-full h-48 object-cover mb-4 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300" 
          />
          <span className={`absolute top-2 right-2 ${statusColors[exam.status]} px-3 py-1 rounded-full text-xs font-semibold shadow-sm`}>
            {exam.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 transition-colors duration-300">{exam.title}</h3>
        <div className="flex items-center mb-2">
          <Award className="w-4 h-4 text-blue-500 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-300">{exam.course}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Created: {new Date(exam.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <button 
          onClick={() => onDelete(exam.id)} 
          className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-full transition-all duration-300"
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onEdit(exam.id)} 
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 rounded-full transition-all duration-300"
        >
          <Pencil className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onView(exam.id)} 
          className="text-emerald-500 hover:text-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 p-2 rounded-full transition-all duration-300"
        >
          <Eye className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onAddQuestions(exam.id)} 
          className="text-purple-500 hover:text-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-2 rounded-full transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
