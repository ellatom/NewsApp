import React from 'react';
import LinkList from './LinkList';

class HeaderNewsCategory extends React.Component {

  state = {
    currentActive: "/", previousActive: "/",
    categories: ["General", "Technology", "Sports", "Entertainment", "Science", "Business", "LiveNews"]
  }

  currentCategory = () =>
  {
    let pathname = 
      window.location.pathname.split("/");

    let category = pathname.length === 3 ? pathname[2] : null;//solved refresh F5 bug

    return category;
  }

  render() {
    console.log(`HeaderNewsCategory.render`);
    return (
      <div>
        <div className="ui pointing menu">

          <div className="left menu">
            <LinkList categories={this.state.categories} active={this.currentCategory()}></LinkList>
          </div>

          <div className="item">
            <div className="ui primary button">Sign Up</div>
          </div>
        </div>
      </div>
    );
  }
};

export default HeaderNewsCategory;