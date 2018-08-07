import React, {Component} from "react";
import Posts from '../Posts';
import CreatePosts from '../CreatePosts';
import EditPosts from '../EditPosts';
import FireList from '../FireList';
import MapsData from '../MapsData';
import NavComponent from './StrapComponents/NavComponent';


class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            firesData: [],
            posts: [],
            showEdit: false,
            editPostsId: null,
            postsToEdit: {
              title: "",
              body: ""}
        }
    }

    componentDidMount(){
      this.getFires().then((data) => {
        this.setState({
          firesData: data.response
        })
      }).catch((err) => {
        console.log(err)
      });
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
        return posts
  
    }

    addPosts = async (post, e) => {
      e.preventDefault();
      try {
          const createdPosts = await fetch('http://localhost:9000/posts', {
            //options object
            method: 'POST',
            body: JSON.stringify(post),
            headers:{
              'Content-Type': 'text/html'
            }
          });
  
          const parsedResponse = await createdPosts.json();
          this.setState({posts: [...this.state.posts, parsedResponse.data]});
          //the spread operator(...) is populating a new array, with all the old posts which takes the contents of that array and puts them into the posts array, we put in the parsedResponse.data which is our created post with the database id

      } catch(err) {
        console.log(err)
      }
    }

    deletePosts = async (id, e) => {
      console.log(id, ' this is id')
      e.preventDefault();
      try {
          const deletePosts = await fetch('http://localhost:9000/posts/' + id, {
            method: 'DELETE'
          });
         
          const parsedResponse = await deletePosts.json();
            if(parsedResponse.status === 200){
            this.setState({posts: this.state.posts.filter((post, i) => posts._id !== id)});
          //using the filter method, which is a regular array method to create a new array for our state when we are using setState
            } 
      } catch(err) {
        console.log(err)
      }
    }
      showModal = (id) => {

        // find method returns the object that meets the condition,
        // and so the postsToEdit variable will contain the movie want to edit (the actual)
        // object
        const postsToEdit = this.state.posts.find((movie) => posts._id === id);
    
    
        this.setState({
          showEdit: true,
          editPostsId: id,
          postsToEdit: postsToEdit
        });
      }
    closeAndEdit = async (e) => {
      e.preventDefault();
      try {

        const editPosts = await fetch('http://localhost:9000/posts/' + this.state.editPostsId, {
          method: 'PUT',
          body: JSON.stringify(this.state.postsToEdit),
          headers: {
            'Content-Type': 'text/html'
          }
        });
  
  
        const parsedResponse = await editPosts.json();
  
        // Functional and immutable way of accomplishing this task
        const editedPostsArray = this.state.posts.map((post) => {
  
          if(posts._id === this.state.editPostsId){
  
            posts.title = parsedResponse.data.title;
            posts.body = parsedResponse.data.body
  
          }
  
          return posts
        });
  
        this.setState({
          posts: editedPostsArray,
          showEdit: false
        });
  
       } catch(err) {
        console.log(err)
       }
    }
    handleFormChange = (e) => {
  
      this.setState({
        postsToEdit: {
          title: "",
          body: "",
          ...this.state.postsToEdit,
          [e.target.name]: e.target.value
        }
      })
    }
  
      render(){
        return (
          <div>
            <div className="container">
            <NavComponent />
            </div>

            <div className="row">
            <div className="col-md-6 qCont">
            <div className="mapContainer">
            <MapsData firesData={this.state.firesData} />
            </div>
            </div>
            </div> 
            
            <div className="col-md-6 qCont">
            <div className="fireContainer">
              <FireList firesData={this.state.firesData} />
            </div>
            </div>   

            <div>
            <Posts posts={this.state.posts} deletePosts={this.deletePosts}/>
            <CreatePosts addPosts={this.addPosts}/>
            {this.state.showEdit ? <EditPosts closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} postsToEdit={this.state.postsToEdit}/> : null}
            </div>

          </div>
        )
      }
} 
export default MainContainer;