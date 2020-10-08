
import React from "react";

class Searchbar extends React.Component {

  state = {
    keyword: '',
  };

  editSearchTerm = (event) => {
    event.preventDefault();
    
    let search = event.target.value;
    this.props.searchWord(search);

    this.setState({
      keyword:search
    });
  };

  render() {
    return (
        <>
        <div className="gap">
          <input 
            className="prompt" 
            placeholder="Search..." 
            type="text"
            value={this.state.keyword}
            onChange={this.editSearchTerm}
          />
        </div>
        </>
    );
  }
}
export default Searchbar;
