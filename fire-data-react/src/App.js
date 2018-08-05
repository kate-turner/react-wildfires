import React, { Component } from 'react';




class App extends Component {
  constructor () {
    super () 
      this.state= {
        firesData: []
      }
    }
  // getFires = async() => {

  //   try {

  //     const convert = require("xml-js");
  //     const cheerio = require('cheerio');
  //     const xml = await fetch('https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml');
  //     const firesJson = await convert.xml2json(xml, {compact: true, spaces: 4});
  //     console.log(firesJson);
  //   } catch(err) {
  //     console.log(err, 'error in catch block')
  //     return err
  //   }
  // }
  
// request('https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     $('channel').each(function(i, element){
//       console.log(element);
//     });
//   }
// });





  getFires = async() => {

    try {
      
      const cheerio = require('cheerio');
      const data = await fetch ('https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml');
      const dataLoad = cheerio.load(data, { xmlMode: true });
      $('channel').each(function(i, element){
      console.log(element);
      });
    } catch(err) {
      console.log(err, 'error in catch block')
      return err
    }
  }


  componentDidMount(){
    this.getFires().then((data) =>
      this.setState({
        firesData: data
      }))

  }
  render() {
    return (
      <div className="App">
        <div className="mapContainer">
        </div>

        <div className="fireContainer">
        </div>
       
      </div>
    );
  }
}

export default App;
