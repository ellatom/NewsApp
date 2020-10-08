import React from 'react';
import PostDetails from './PostDetails';

class PostList extends React.Component {
  
  renderPostList = () => {
      
    return this.props.posts.data && this.props.posts.data.map((post, index) => {//map is on array not forget
      return (
        <PostDetails 
          onDelete={this.props.onDelete} 
          onEdit={this.props.onEdit} 
          key={post.id} 
          keyPost={post.id}
          post={post}>
        </PostDetails>
        )
    });
  };

  render() {
    // console.log(this.props.posts.data);
    return <div className="postList" >{this.renderPostList()}</div>//need to call to function
  }
}

export default PostList;