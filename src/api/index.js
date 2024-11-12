import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchExams = () => axios.get(`${API_URL}/exams`);
export const fetchCourses = () => axios.get(`${API_URL}/courses`);
export const fetchQuestions = () => axios.get(`${API_URL}/questions`);
export const addExam = (exam) => axios.post(`${API_URL}/exams`, exam);
export const updateExam = (id, exam) => axios.put(`${API_URL}/exams/${id}`, exam);
export const deleteExam = (id) => axios.delete(`${API_URL}/exams/${id}`);
export const addQuestion = (question) => axios.post(`${API_URL}/questions`, question);
export const updateQuestion = (id, question) => axios.put(`${API_URL}/questions/${id}`, question);
export const deleteQuestion = (id) => axios.delete(`${API_URL}/questions/${id}`);
   

