import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
afterEach(() => {
  //we need to unmount after each test because the JSDOM is shared across all tests
  wrapped.unmount();
});

//unite the two tests concerning the textarea in the same describe block, use separate beforeEach
describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }, //simlating the event.target.value change
    });
    wrapped.update();
  });
  it('has a textarea that the user can type in synced with react', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  it('when form is submitted, textarea gets emptied', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    //force component update because form submission is async
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
