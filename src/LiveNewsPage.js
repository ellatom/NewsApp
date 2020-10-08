import React from 'react';
// import MapLocation from './MapLocation'
import { Header,TextArea,Label,Icon,Button,Form,Message } from "semantic-ui-react";

class LiveNewsPage extends React.Component {

    state={title:"",description:"",author:""}

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        debugger;
        this.props.post[name] = value;

        this.setState({[name]: value});
    }

    newPost = (event) => {
        event.preventDefault();
        // document.querySelector(".msg").setAttribute("style","display:block");

        this.props.post.id = "";
        this.props.post.title = "";
        this.props.post.description = "";
        this.props.post.author = "";
        
        this.setState({title: "", description: "",author:""});
    }

    savePost = async (event) => {
      
        document.querySelector(".msg").innerHTML="";
        event.preventDefault();
        
        if(this.props.post.author==="" || this.props.post.description==="" || this.props.post.title==="")
        {
            document.querySelector(".msg").innerHTML="Field shouldnt be empty";
            return;
        }
        this.props.savePost(this.props.post);
        this.newPost(event);
    }

    render() {
        console.log(`lalala: ${this.props}`);
        console.log(`lalala1: ${this.props.post}`);
        return (
            <>
            <div>
            <br/>
            <Header as="h2">{this.props.post.id ? `Editting post with id=${this.props.post.id}` : "Adding a new post"}</Header>
            <Form error id="myForm" className="form">
                <Label htmlFor="title"> <Icon name='bullseye' />Title</Label>
                <br/>
                <TextArea 
                    id="title" 
                    name="title"
                    value={this.props.post.title} 
                    onChange={this.handleChange}  
                    rows="2" cols="50" 
                    placeholder="Insert Title here">
                </TextArea>
                <br/>
                <Label htmlFor="description"> <Icon name='clipboard' /> Description</Label>
                <br/>
                <TextArea 
                    id="description"  
                    name="description"  
                    value={this.props.post.description} 
                    onChange={this.handleChange} 
                    rows="3" cols="50" 
                    placeholder="Insert description here">
                </TextArea>
                <br/>
                <Label htmlFor="author"><Icon name='smile' />Author</Label>
                <br/>
                <TextArea 
                    id="author"  
                    name="author"  
                    value={this.props.post.author} 
                    onChange={this.handleChange} 
                    rows="1" cols="50" 
                    placeholder="Insert author here">
                </TextArea>
                <br/>
                <div>You should consent to location sharing for showing location</div>
                {/* <MapLocation></MapLocation> */}
                <br/>

                <Message className="msg" error header='Empty Fields' content='All fields are required'></Message> 
                <Button primary onClick={this.savePost}>{this.props.post.id ? "Save" : "Add"}</Button>
                <br/>
            </Form> 
            </div>
        </>
        );
    }
}
export default LiveNewsPage;