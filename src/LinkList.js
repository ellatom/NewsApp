import React from "react";
import { Link } from 'react-router-dom';


class LinkList extends React.Component {

     state = { activeId: this.props.active ||  "general" };

     onClick = (event) => {
    
          this.setState({activeId: event.target.id });
     }

     getClassName = (category) =>
     {
          let className = 'item left menu';

          className += 
               this.state.activeId === category ? ' active violet' : '';

          return className;
     }

     renderList = (props) => {
          return this.props.categories.map((category, index) => {
               let categoryLowercase = category.toLowerCase();
               return (
                    <Link
                         key={index}
                         id={`${categoryLowercase}`}
                         to={`/category/${categoryLowercase}`}
                         className={this.getClassName(categoryLowercase)}
                         onClick={this.onClick} >
                         {category}
                    </Link>
               );
          });
     }

     render() {
          return (<>{this.renderList()}</>)
     }
};

export default LinkList;
//   <LinkList  categories={this.state.categories}  onClick={this.toggleToActive}></LinkList>



//{ <div className="left menu">
//   <Link id="sports" to="/category/sports" className='item' onClick={this.toggleToActive}>
//     Sports
//   </Link>
// </div>

