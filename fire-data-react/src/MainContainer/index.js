import React, {Component} from "react";
import FireList from '../FireList';
import MapsData from '../MapsData';
import Posts from '../Posts/postsIndex';
import CreatePosts from '../CreatePosts/createPostIndex'


class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            firesData: [],
            posts: [],
           
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
      //make a variable with the properties we expect req.body to have
      const deletePosts = await fetch('http://localhost:9000/posts/' + id, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({"id": id}),
        headers:{
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
  
  
      render(){
        return (
            <div className="row">
            
            <div className="col-md-6 qCont">
            <div className="mapContainer">
            <MapsData firesData={this.state.firesData} />
            </div>
            </div>
            
            
            <div className="col-md-6 qCont">
            <div className="fireContainer">
              <FireList firesData={this.state.firesData} />
            </div>
            </div> 

            <div>
              <Posts posts={this.state.posts} deletePosts={this.deletePosts} /> 
              <CreatePosts addPost={this.addPost}/>
            </div>
            
            </div>
        )
      }
} 
export default MainContainer;