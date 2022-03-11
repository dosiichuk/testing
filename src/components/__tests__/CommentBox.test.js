import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
afterEach(() => {
  //we need to unmount after each test because the JSDOM is shared across all tests
  wrapped.unmount();
});

it('has a textarea that the user can type in synced with react', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }, //simlating the event.target.value change
  });
  //force component re-render in order to avoid async re-render (setState)
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
