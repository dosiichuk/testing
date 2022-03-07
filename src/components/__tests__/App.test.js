import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

it('shows a comment box', () => {
  //JSDOM emulates a DOM element in the terminal
  const div = document.create('div');
  //check whether App does not crash at render
  ReactDOM.render(<App />, div);
  //Check any other functionality of the App component

  //cleanup after the test has run
  ReactDOM.unmountComponentAtNode(div);
});
