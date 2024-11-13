import React from 'react';
import { Pencil, Trash2, Eye, Plus, Award } from 'lucide-react';

export default function ExamCard({ exam, onDelete, onEdit, onView, onAddQuestions }) {
  const statusColors = {
    active: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    draft: 'bg-amber-100 text-amber-800 border border-amber-200',
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
    <div className="card-body">
      <div className="relative">
        <img 
          src={exam.image} 
          alt={exam.title} 
          className="w-full h-48 object-cover rounded-lg shadow-md" 
        />
        <span className={`badge ${exam.status === 'active' ? 'badge-success' : 'badge-warning'} absolute top-2 right-2`}>
          {exam.status}
        </span>
      </div>
      <h3 className="card-title text-base-content">{exam.title}</h3>
      <div className="flex items-center gap-2">
        <Award className="text-primary w-4 h-4" />
        <p className="text-base-content/70">{exam.course}</p>
      </div>
      <p className="text-base-content/60 text-sm">
        Created: {new Date(exam.createdAt).toLocaleString()}
      </p>
      <div className="card-actions justify-between  mt-4">
        <button onClick={() => onDelete(exam.id)} className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-full transition-all duration-300 w-100">
          <Trash2 className="w-4 h-4" />
        </button>
        <button onClick={() => onEdit(exam.id)} className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 rounded-full transition-all duration-300">
          <Pencil className="w-4 h-4" />
        </button>
        <button onClick={() => onView(exam.id)} className="text-emerald-500 hover:text-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 p-2 rounded-full transition-all duration-300">
          <Eye className="w-4 h-4" />
        </button>
        <button onClick={() => onAddQuestions(exam.id)} className="text-purple-500 hover:text-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-2 rounded-full transition-all duration-300">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
  

  );
}
