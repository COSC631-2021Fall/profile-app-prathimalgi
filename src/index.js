import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './components/welcome';
import Courses from './components/courses'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('welcome')
  );

  ReactDOM.render(
    <React.StrictMode>
      <Courses/>
    </React.StrictMode>,
    document.getElementById('courses')
    );
  





