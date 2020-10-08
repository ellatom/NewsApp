import React from "react";
import { List} from "semantic-ui-react";
import './newsList.css'
import NewsItem from "./NewsItem";


const NewsList = (props) => {
  return (
    <List divided>
      {props.articles.map((article,index) => (
        <NewsItem key={index} article={article} ></NewsItem>
      ))}
    </List>
  );
};

export default NewsList;