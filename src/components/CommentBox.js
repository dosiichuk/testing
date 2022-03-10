import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
