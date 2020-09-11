import React, { Component } from 'react';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts';

class PostApp extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
        <DisplayPosts />
      </div>
    );
  }
}

export default PostApp;

