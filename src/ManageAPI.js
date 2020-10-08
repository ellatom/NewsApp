import React from 'react';
import api from './api';
import LiveNewsPage from './LiveNewsPage';
import PostList from './PostList';

class ManageAPI extends React.Component {

  state = { posts: [], loading: false ,currentPost:{}};

  componentDidMount() {
    this.setState({ loading: true });
    this.getPosts();
  }
  //API CRUD:GET
  getPosts = async () => {
    let posts =
      await api.getPosts();

    this.setState({
      posts: posts,
      loading: false
    });
  }
//API CRUD:DELETE
  setDelete = async (event, key) => {
    debugger;
    this.setState(
      { loading: true },

      async () => {
        await api.deletePost(key);
        this.setState({
          loading: false
        });
        await this.getPosts();
      });
  }
  setEdit = async (event, key) => {

    let post =
      this.state.posts.data.find(c => c.id === key);

    this.setState({
      currentPost: post
    });
  }

  savePost = async (post) => {///nt be bug and easy to know created from gui by user and not mockapi.
    
    if (post.id) {
      await api.updatePost(post);
    }
    else {
      post.id =
        String(Math.floor(Math.random() * 200) + 100);

      await api.createPost(post);
    }

    await this.getPosts();
    
    this.setState({
      loading: false
    });

  }
  updatePost = async (post) => {
    await api.updatePost(post);
  }

  onAdd = async (post) => {

    post.id =
      String(Math.floor(Math.random() * 200) + 100);

    this.setState({ loading: true },
      async () => {
        await api.createPost(post);

        this.setState({
          loading: false
        });
      });
  }

  
  render() {
    console.log(`ManageAPI.render ${JSON.stringify(this.state.currentPost)}`);
    return (
      <div>
        <PostList
          posts={this.state.posts}
          onDelete={this.setDelete}
          onEdit={this.setEdit}>
        </PostList>
        <LiveNewsPage
          post={this.state.currentPost}
          savePost={this.savePost}>
        </LiveNewsPage>
      </div>
    )
  }
};

export default ManageAPI;
