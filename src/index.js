import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/contact';
import Objective from './components/objective';
import {Skills} from './components/education';
import Education from './components/education';
import Experience from './components/experience';
import Hobies from './components/Hobies';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
  );

  ReactDOM.render(
    <React.StrictMode>
      <Objective/>
    </React.StrictMode>,
    document.getElementById('objective')
    );

    ReactDOM.render(
      <React.StrictMode>
        <Skills/>
        <Education/>
      </React.StrictMode>,
      document.getElementById('education')
      );

      ReactDOM.render(
        <React.StrictMode>
          <Experience/>
        </React.StrictMode>,
        document.getElementById('experience')
        );

        ReactDOM.render(
          <React.StrictMode>
            <Hobies/>
          </React.StrictMode>,
          document.getElementById('hobies')
          );
  

     
    
  





