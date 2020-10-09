import React from 'react';
import { Grid, List, Header, Image } from "semantic-ui-react";
import './postdetails.css';
// import Modal from './Modal';

class PostDetails extends React.Component {

    state = { open: false };

    onDelete = async (event) => {
        this.props.onDelete(event, this.props.keyPost);
    }
    onEdit = async (event) => {
        this.setState({ open: true });
        this.props.onEdit(event, this.props.post.id);
    }


    render() {
        console.log(this.props.post.id);
        console.log(this.props.post.description);
        console.log(this.props.post.author);
        return (
            <>
            
                
                <List.Item>
                    <Grid>
                        <Grid.Column width={40}>
                            <div className="postView">
                                <br />
                                <div class="ui card">
                                    <Header as="h3" className="title" key={this.props.post.id}><i className="far fa-question-circle"></i>Title:<br />{this.props.post.title}</Header>
                                    <List.Description className="description"><i className="fas fa-crown">Description:</i><br />{this.props.post.description}</List.Description>
                                    <List.Description className="author"><i className="fas fa-crown">Author:</i><br />{this.props.post.author}</List.Description>
                                    <List.Description className="author"><i className="fas fa-crown">Image:</i><br />{this.props.post.urlToImage}</List.Description>
                                    <Image src={this.props.post.urlToImage} className="urlToImage" />
                                    <div>
                                        <button class="ui left attached button" onClick={this.onEdit}>Edit</button>
                                        <button class="right attached ui button" onClick={this.onDelete}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </List.Item>
            </>
        )
    }
}
export default PostDetails;


/* <Grid.Column width={5}>
<Image src={this.props.post.urlToImage!==null?this.props.post.urlToImage:"https://i.guim.co.uk/img/media/c4be9e861737d25f001c0232b15e5564f9832c71/0_101_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5449c0bdc7be7db8db0b76268ed1f73f"} />
</Grid.Column> */
/* <React.Fragment>
                    <Modal open={this.state.open} onClose={() => this.setState({ open: false })}>
                    </Modal>
                </React.Fragment>  */