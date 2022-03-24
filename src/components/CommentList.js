import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComment() {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderComment()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
