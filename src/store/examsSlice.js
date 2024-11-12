import { createSlice } from '@reduxjs/toolkit';

const initialExams = [
  {
    id: 1,
    title: 'Introduction to React',
    course: 'Web Development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-fhiBKgYGYJXpmNu12XmMEYd1SdFtTqf5w&s',
    createdAt: '2023-06-01T10:00:00Z',
    status: 'active',
    questions: [
      { id: 1, text: 'What is React?', options: ['A JavaScript library', 'A programming language', 'A database', 'An operating system'], correctAnswer: 'A JavaScript library' },
      { id: 2, text: 'What is JSX?', options: ['A JavaScript extension', 'A React component', 'A styling framework', 'A testing library'], correctAnswer: 'A JavaScript extension' },
    ]
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    course: 'JavaScript',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK8uoM7XCJ-Od4EQvRQhhwLkXvNy9ZTKQnA&s',
    createdAt: '2023-06-02T14:30:00Z',
    status: 'draft',
    questions: [
      { id: 3, text: 'What is a closure in JavaScript?', options: ['A function with access to its outer scope', 'A way to close a browser window', 'A method to end a loop', 'A type of variable'], correctAnswer: 'A function with access to its outer scope' },
      { id: 4, text: 'What is the purpose of the "use strict" directive?', options: ['To enable strict mode', 'To include external scripts', 'To declare global variables', 'To optimize code performance'], correctAnswer: 'To enable strict mode' },
    ]
  },{
    id: 3,
    title: 'CSS Flexbox and Grid',
    course: 'Web Development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmjt9vXR1O9iMUY-heqmfLmNQpuFLvrAKow&s',
    createdAt: '2023-06-05T09:15:00Z',
    status: 'active',
    questions: [
      { id: 5, text: 'What is Flexbox used for?', options: ['Styling images', 'Creating responsive layouts', 'Connecting to databases', 'Debugging code'], correctAnswer: 'Creating responsive layouts' },
      { id: 6, text: 'Which property is used to define a grid container?', options: ['display: grid', 'display: flex', 'grid-template-columns', 'align-items'], correctAnswer: 'display: grid' },
    ]
  },
  {
    id: 4,
    title: 'Introduction to Python',
    course: 'Programming Languages',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeoGU63N0fPrm3AFfRGg1VhXNwKrtGBVoqg&s',
    createdAt: '2023-06-10T12:45:00Z',
    status: 'active',
    questions: [
      { id: 7, text: 'What is Python primarily used for?', options: ['Mobile development', 'Web scraping', 'Building operating systems', 'All of the above'], correctAnswer: 'Web scraping' },
      { id: 8, text: 'What is a Python dictionary?', options: ['A data type for collections of items', 'A type of loop', 'A way to handle errors', 'A function for sorting data'], correctAnswer: 'A data type for collections of items' },
    ]
  },
  {
    id: 5,
    title: 'Data Structures in Java',
    course: 'Computer Science',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE3K3UQ3xjF89D6ZIENI5oCrApoMuWgrmZw&s',
    createdAt: '2023-06-15T08:00:00Z',
    status: 'draft',
    questions: [
      { id: 9, text: 'What is an ArrayList in Java?', options: ['A type of array', 'A resizable array', 'A linked list', 'A sorting algorithm'], correctAnswer: 'A resizable array' },
      { id: 10, text: 'Which data structure uses a FIFO approach?', options: ['Stack', 'Queue', 'Tree', 'Graph'], correctAnswer: 'Queue' },
    ]
  },
  {
    id: 6,
    title: 'Introduction to SQL',
    course: 'Database Management',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mEvAE4fw8cnGg9sWw-_nT_DuGfrpuRKSMw&s',
    createdAt: '2023-06-20T11:00:00Z',
    status: 'active',
    questions: [
      { id: 11, text: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Layout', 'Sequential Query Language'], correctAnswer: 'Structured Query Language' },
      { id: 12, text: 'Which command is used to retrieve data from a database?', options: ['INSERT', 'DELETE', 'UPDATE', 'SELECT'], correctAnswer: 'SELECT' },
    ]
  },
  {
    id: 7,
    title: 'Introduction to Machine Learning',
    course: 'Artificial Intelligence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5rOUA9KZ-Som7jjsIswVJmlbx1mVd6VdPg&s',
    createdAt: '2023-06-25T14:00:00Z',
    status: 'active',
    questions: [
      { id: 13, text: 'What is supervised learning?', options: ['Learning without any data', 'Learning with labeled data', 'Learning with unlabeled data', 'Learning using reward and punishment'], correctAnswer: 'Learning with labeled data' },
      { id: 14, text: 'Which algorithm is used for classification problems?', options: ['K-Nearest Neighbors', 'Bubble Sort', 'Quick Sort', 'Binary Search'], correctAnswer: 'K-Nearest Neighbors' },
    ]
  },
  {
    id: 8,
    title: 'Operating Systems Basics',
    course: 'Computer Science',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBcenJT6cKYKFUpRpqSiFWLAaIwUK09s1Cg&s',
    createdAt: '2023-07-01T09:30:00Z',
    status: 'draft',
    questions: [
      { id: 15, text: 'What is an operating system?', options: ['A type of software that manages hardware and software', 'A programming language', 'A type of hardware', 'A web application'], correctAnswer: 'A type of software that manages hardware and software' },
      { id: 16, text: 'Which of the following is an example of an OS?', options: ['Google Chrome', 'Windows', 'MySQL', 'HTML'], correctAnswer: 'Windows' },
    ]
  },
  {
    id: 9,
    title: 'Introduction to Data Science',
    course: 'Data Science',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwus1E0xentF1zQaFXMyR2TT4iIfNKxIjxow&s',
    createdAt: '2023-07-05T16:45:00Z',
    status: 'active',
    questions: [
      { id: 17, text: 'What is data science?', options: ['A field focusing on drawing insights from data', 'A way to design websites', 'A machine learning algorithm', 'A software development technique'], correctAnswer: 'A field focusing on drawing insights from data' },
      { id: 18, text: 'Which language is commonly used for data analysis?', options: ['Python', 'HTML', 'Java', 'CSS'], correctAnswer: 'Python' },
    ]
  },
  {
    id: 10,
    title: 'Introduction to Networks',
    course: 'Computer Networking',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXhEZrpT69bd1UFXRQR6Eb5TGIh4atCTwsw&s',
    createdAt: '2023-07-10T10:15:00Z',
    status: 'draft',
    questions: [
      { id: 19, text: 'What is a computer network?', options: ['A group of connected computers', 'A single standalone computer', 'An operating system', 'A programming language'], correctAnswer: 'A group of connected computers' },
      { id: 20, text: 'Which device connects multiple networks?', options: ['Router', 'Keyboard', 'Monitor', 'Printer'], correctAnswer: 'Router' },
    ]
  }
  
  
];

const examsSlice = createSlice({
  name: 'exams',
  initialState: {
    list: initialExams,
    selectedExam: null,
    allQuestions: [
      { id: 1, text: 'What is React?', options: ['A JavaScript library', 'A programming language', 'A database', 'An operating system'], correctAnswer: 'A JavaScript library' },
      { id: 2, text: 'What is JSX?', options: ['A JavaScript extension', 'A React component', 'A styling framework', 'A testing library'], correctAnswer: 'A JavaScript extension' },
      { id: 3, text: 'What is a closure in JavaScript?', options: ['A function with access to its outer scope', 'A way to close a browser window', 'A method to end a loop', 'A type of variable'], correctAnswer: 'A function with access to its outer scope' },
      { id: 4, text: 'What is the purpose of the "use strict" directive?', options: ['To enable strict mode', 'To include external scripts', 'To declare global variables', 'To optimize code performance'], correctAnswer: 'To enable strict mode' },
      { id: 5, text: 'What is the virtual DOM?', options: ['A lightweight copy of the actual DOM', 'A new web browser', 'A JavaScript engine', 'A type of database'], correctAnswer: 'A lightweight copy of the actual DOM' },
      { 
        id: 6, 
        text: 'What is the main purpose of Node.js?', 
        options: ['To run JavaScript on the server side', 'To style HTML elements', 'To create SQL databases', 'To manage browser cookies'], 
        correctAnswer: 'To run JavaScript on the server side' 
      },
      { 
        id: 7, 
        text: 'Which HTML tag is used to link an external JavaScript file?', 
        options: ['<link>', '<style>', '<script>', '<js>'], 
        correctAnswer: '<script>' 
      },
      { 
        id: 8, 
        text: 'What is the difference between "==" and "===" in JavaScript?', 
        options: ['One is used for addition, the other for subtraction', 'Both are the same', 'One checks for type and value equality, the other only for value equality', 'One is for arrays, the other for objects'], 
        correctAnswer: 'One checks for type and value equality, the other only for value equality' 
      },
      { 
        id: 9, 
        text: 'What does CSS stand for?', 
        options: ['Cascading Style Sheets', 'Computer Style Syntax', 'Creative Style Script', 'Central Styling Source'], 
        correctAnswer: 'Cascading Style Sheets' 
      },
      { 
        id: 10, 
        text: 'What is the purpose of the "async" keyword in JavaScript?', 
        options: ['To pause code execution', 'To enable asynchronous functions', 'To handle exceptions', 'To convert data types'], 
        correctAnswer: 'To enable asynchronous functions' 
      },
      { 
        id: 11, 
        text: 'What is the difference between "var", "let", and "const" in JavaScript?', 
        options: ['They are all the same', '"let" and "const" are block-scoped, while "var" is function-scoped', '"const" can be redeclared, while "let" and "var" cannot', '"var" is used only in React'], 
        correctAnswer: '"let" and "const" are block-scoped, while "var" is function-scoped' 
      },
      { 
        id: 12, 
        text: 'What does JSON stand for?', 
        options: ['JavaScript Object Notation', 'Java Syntax Object Node', 'Java Secure Object Network', 'JavaScript Offline Network'], 
        correctAnswer: 'JavaScript Object Notation' 
      },
      { 
        id: 13, 
        text: 'In JavaScript, what is a promise?', 
        options: ['A function that always returns true', 'A mechanism to handle asynchronous operations', 'A data structure for organizing data', 'A built-in error handler'], 
        correctAnswer: 'A mechanism to handle asynchronous operations' 
      },
      { 
        id: 14, 
        text: 'What is the main advantage of using React Hooks?', 
        options: ['They replace JavaScript', 'They add CSS styling', 'They allow functional components to use state and lifecycle features', 'They enable database connectivity'], 
        correctAnswer: 'They allow functional components to use state and lifecycle features' 
      },
      { 
        id: 15, 
        text: 'What is the role of the "render" method in React?', 
        options: ['To directly manipulate the DOM', 'To render JavaScript code on the server', 'To display HTML code in the browser', 'To style elements'], 
        correctAnswer: 'To display HTML code in the browser' 
      }
      
    ]
  },
  reducers: {
    setExams: (state, action) => {
      state.list = action.payload;
    },
    setSelectedExam: (state, action) => {
      state.selectedExam = action.payload;
    },
    addExam: (state, action) => {
      state.list.push(action.payload);
    },
    removeExam: (state, action) => {
      state.list = state.list.filter(exam => exam.id !== action.payload);
    },
    updateExam: (state, action) => {
      const index = state.list.findIndex(exam => exam.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    addQuestionToExam: (state, action) => {
      const { examId, question } = action.payload;
      const exam = state.list.find(e => e.id === examId);
      if (exam) {
        exam.questions.push(question);
    }
    },
    // store/examsSlice.js
    removeQuestionFromExam: (state, action) => {
      const { examId, questionId } = action.payload;
      const exam = state.list.find(e => e.id === examId);
      if (exam) {
        exam.questions = exam.questions.filter(q => q.id !== questionId);
      }
    },
    addQuestionsToExam: (state, action) => {
      const { examId, questions } = action.payload;
      const exam = state.list.find(e => e.id === examId);
      if (exam) {
        exam.questions = exam.questions 
        ? [...exam.questions, ...questions]
        : questions;
      }
    },
    addQuestionToTotal: (state, action) => {
      state.allQuestions.push(action.payload);
    },
  },
});

export const { 
  setExams, 
  setSelectedExam, 
  addExam, 
  removeExam, 
  updateExam, 
  addQuestionToExam, 
  addQuestionToTotal,
  addQuestionsToExam,
  removeQuestionFromExam 
} = examsSlice.actions;
export default examsSlice.reducer;