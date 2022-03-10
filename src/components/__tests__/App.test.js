import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  //JSDOM emulates a DOM element in the terminal
  const div = document.createElement('div');
  //check whether App does not crash at render
  ReactDOM.render(<App />, div);
  //Check any other functionality of the App component
  //literal testing whether the component contains some specific HTML
  //bad approach because it delves into the contents of the inner component, test fails if anything changes in child component
  // expect(div.innerHTML).toContain('Comment Box');

  //cleanup after the test has run
  ReactDOM.unmountComponentAtNode(div);
});

it('contains a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('contains a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
