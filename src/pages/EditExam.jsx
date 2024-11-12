import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateExam } from '../store/examsSlice';

export default function EditExam() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const exam = useSelector(state => state.exams.list.find(e => e.id === parseInt(id)));
  const courses = useSelector(state => [...new Set(state.exams.list.map(exam => exam.course))]);
  
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    createdAt: '',
    status: '',
    image: ''
  });

  useEffect(() => {
    if (exam) {
      setFormData({
        title: exam.title,
        course: exam.course,
        createdAt: exam.createdAt,
        status: exam.status,
        image: exam.image
      });
    }
  }, [exam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExam({ id: parseInt(id), ...formData }));
    navigate('/');
  };

  return (
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title text-base-content">Edit Exam</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="input input-bordered"
          required
        />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Course</span>
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          className="select select-bordered"
          required
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>
          <div className="form-control">
            <label className="label">
            <span className="label-text">Date and Time</span>  
            </label>
            <input
              type="datetime-local"
              name="createdAt"
              value={formData.createdAt.slice(0, 16)}
              onChange={(e) => setFormData({ ...formData, createdAt: e.target.value })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="select select-bordered"
              required
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
             <span className="label-text">Image URL</span>  
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="card-actions justify-end">
        <button type="button" onClick={() => navigate('/')} className="btn btn-ghost">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Update Exam
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
