import React from 'react';
import { Button,Grid,List,Header } from "semantic-ui-react";

class PostDetails extends React.Component {  

    onDelete = async (event) => {
        this.props.onDelete(event, this.props.keyPost);
    }
    onEdit = async (event) => {
        this.props.onEdit(event, this.props.post.id);
    }   
    

    render()
    {
        console.log(this.props.post.id);
        console.log(this.props.post.description);
        console.log(this.props.post.author);
        return(  
           <>
           <List.Item>
           <Grid>
            <Grid.Column width={10}>
             <div className="postView">
            <br/>
             <Header as="h3" className="title" key={this.props.post.id}><i className="far fa-question-circle"></i>Title:<br/>{this.props.post.title}</Header>
                <List.Description className="description"><i className="fas fa-crown"></i>Description:<br/>{this.props.post.description}</List.Description>
               <List.Description className="author"><i className="fas fa-crown"></i>Author:<br/>{this.props.post.author}</List.Description>
               <Button className="delete" onClick={this.onDelete}>Delete</Button>
               <Button className="edit" onClick={this.onEdit}>Edit</Button>
            </div> 
           </Grid.Column>
           </Grid>
           </List.Item>
           </>
        )
    }
}
export default PostDetails;