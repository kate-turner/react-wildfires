import React, {Component} from "react";
import FireList from './FireList';
import MapsData from './MapsData';
import Posts from './Posts/postsIndex';
import CreatePosts from './CreatePosts/createPostIndex';
import EditPosts from './EditPosts/editPostsIndex';
import { Container, Row, Col } from 'reactstrap';



class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            firesData: [],
            posts: [],
            showEdit: false,
            editPostId: null,
            postToEdit: {
              title: '',
              body: ''
            }
        }
    }

    componentDidMount(){
      this.getFires().then((data) => {
        console.log(data)
        this.setState({
          firesData: data.response
        })
      }).catch((err) => {
        console.log(err, 'in fires data api')
      });
       this.getPosts().then((response) => {
      console.log(response)
      this.setState({
        posts: response.data})
    }).catch((err) => {
      console.log(err, 'in posts data api');
    })
  }

    getFires = async() => {
      const fireAPI = 'https://api.aerisapi.com/fires/closest?p=denver,co&filter=critical&radius=600miles&from=+2hours&limit=50&&client_id=u42Dr3u5idKSLZQgXmBgx&client_secret=Ir3uVmVdUSDwMRHYVZIcalMRNwFIM1CdsVm3Rcis';
      try {
        const fires = await fetch(fireAPI);
        const firesJson = await fires.json();
        return firesJson;
        
      } catch(err) {
        console.log(err, 'error in catch block')
        return err
      }
    }

    getPosts = async () => {
    const posts = await fetch('https://colorado-on-fire-app.herokuapp.com/posts');
    const postsJson = await posts.json();
    return postsJson;
    }


    addPost = async (post, e) => {
      console.log(post, 'from addPost')
    e.preventDefault();
    try {
        const createdPost = await fetch('https://colorado-on-fire-app.herokuapp.com/posts', {
          method: 'POST',
          body: JSON.stringify(post),
          headers:{
            'Content-Type': 'application/json'
          }
        });

        const parsedResponse = await createdPost.json();
        if(parsedResponse.status === 200){
        this.setState({posts: [...this.state.posts, parsedResponse.data]});
        }else{
          console.log(parsedResponse)
        }
    } catch(err) {
      console.log(err)
    }
  }

  deletePosts = async (id, e) => {
  console.log(id, "this is id of the post to be deleted")

  e.preventDefault();
    try {
      const deletePosts = await fetch('https://colorado-on-fire-app.herokuapp.com/posts/' + id, {
        method: "DELETE",
        credentials: 'include',
        body: JSON.stringify({"id": id}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await deletePosts.json();
      if(parsedResponse.status === 200){
      } else {
        console.log("something bad happened.")
      }
      
      this.setState({posts: this.state.posts.filter((post, i) => post._id !== id)});

    } catch (err) { 
      console.log(err)
    }
  }

 
  showModal = (id) => {

    const postToEdit = this.state.posts.find((post) => post._id === id);

    this.setState({
      showEdit: true,
      editPostId: id,
      postToEdit: postToEdit
    });

  }
  closeAndEdit = async (e) => {
    e.preventDefault();
    try {
      
      const editPost = await fetch ('https://colorado-on-fire-app.herokuapp.com/' + this.state.editPostId, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.postToEdit),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await editPost.json();
      const editedPostArray = this.state.posts.map((post) => {
        // console.log(post.body, 'this is the post body in edit response')
        if(post._id === this.state.editPostId){
                  console.log(post)

          post.title = parsedResponse.data.title;
          post.body = parsedResponse.data.body;
        }
        return post
      });

      this.setState({
        post: editedPostArray,
        showEdit: false
      });
    }catch(err) {
      console.log(err)
    }

  }
  handleFormChange = (e) => {
    this.setState({
      postToEdit: {
        ...this.state.postToEdit,
        [e.target.name]: e.target.value 
      }
    });
  }
  
      render(){
        return (
          <Container>
          
          
            <Row>

            <Col md="6">
            <div className="mapContainer">
            <MapsData firesData={this.state.firesData} />
            </div>
            </Col>

            <Col xs="6">
            <div className="fireContainer">
            <FireList firesData={this.state.firesData} />
            </div>
            </Col>
            </Row><br/><br/>

            
            
            
          
            <Row>
            <Col md="6" className="posts">
              <Posts posts={this.state.posts} deletePosts={this.deletePosts} showModal={this.showModal} /> 
            </Col>
            
            <Col xs="6" className="posts2"><br/><br/>
              <CreatePosts addPost={this.addPost}/>
            </Col>

            </Row>
             
             {this.state.showEdit ? <EditPosts closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} postToEdit={this.state.postToEdit}/> : null}
          <img className="header-image" src={"/images/icon-name.png"}/>
          </Container>
        
            
        )
      }
} 
export default MainContainer;