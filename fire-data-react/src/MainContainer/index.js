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
        this.setState({posts: [...this.state.posts, parsedResponse.data]});

    } catch(err) {
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
              <Posts posts={this.state.posts}/> 
              <CreatePosts posts={this.state.posts}/>
            </div>
            
            </div>
        )
      }
} 
export default MainContainer;