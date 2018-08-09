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
      const fireAPI = 'http://api.aerisapi.com/fires/closest?p=denver,co&filter=critical&radius=600miles&from=+2hours&limit=50&&client_id=u42Dr3u5idKSLZQgXmBgx&client_secret=Ir3uVmVdUSDwMRHYVZIcalMRNwFIM1CdsVm3Rcis';
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
    const posts = await fetch('http://localhost:9000/posts');
    const postsJson = await posts.json();
    return postsJson;
    }

    // Integrating Fire API into database
    // addFirePost = async (e) => {
    //   //this needs to match our schema key
    //   const firePostCreate = {"id": this.state.id}
    //   e.preventDefault();
    //   try{
    //     const createdAddFirePost = await fetch('http://localhost:9000/posts', {
    //       method: 'POST',
    //       body: JSON.stringify(firePostCreate),
    //       headers:{
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //   }
    // }

    addPost = async (post, e) => {
      console.log(post, 'from addPost')
    e.preventDefault();
    try {
        const createdPost = await fetch('http://localhost:9000/posts', {
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
      const deletePosts = await fetch('http://localhost:9000/posts/' + id, {
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

    // find method returns the object that meets the condition,
    // and so the movieToEdit variable will contain the movie want to edit (the actual
    //object)
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
      const postToEdit = this.state.postToEdit
      const editResponse = await fetch('http://localhost:9000/posts/' + this.state.editPostId, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(postToEdit),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const editResponseJson = await editResponse.json();
      const editedPostArray = this.state.posts.map((post) => {
        console.log(post.body, 'this is the post body in edit response')
        if(post._id === this.state.editPostId){
          post.title = this.editResponseJson.data.title;
          post.body = this.editResponseJson.data.body;
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

            <Col md="6">
            <FireList firesData={this.state.firesData} />
            </Col>
            </Row><br/><br/>

            
            
            
          
            <Row>
            <Col xs="6" className="posts">
              <Posts posts={this.state.posts} deletePosts={this.deletePosts} showModal={this.showModal} /> 
            </Col>
            
            <Col xs="6" className="posts2"><br/><br/>
              <CreatePosts addPost={this.addPost}/>
            </Col>
            </Row>

           
              {this.state.showEdit ? <EditPosts closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} postToEdit={this.state.postToEdit}/> : null}
          </Container>
        
            
        )
      }
} 
export default MainContainer;