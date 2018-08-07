import React, {Component} from "react";
import FireList from '../FireList';
import MapsData from '../MapsData';
import Posts from '../Posts/postsIndex';


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

  componentDidMount(){
    this.getPosts().then((response) => {
      console.log(response)
      this.setState({
        posts: response.data})
    }).catch((err) => {
      console.log(err);
    })
  }
  getPosts = async () => {

    const posts = await fetch('http://localhost:9000/posts');
    const postsJson = await posts.json();
    return postsJson;
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
            </div>
            
            </div>
        )
      }
} 
export default MainContainer;