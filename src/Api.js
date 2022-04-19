import React, {Component} from 'react'

let arr = ['kkk', 'jjj', 'sss', 'ggg'];
let objArr = [];

class App extends Component {


    state = {
      data: [],
    }
  
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
      const url =
        'https://api.chostal.com/?f=listDestinations'
  
      fetch(url)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            data: result,
          })
        })
    }
  
    render() {
      const {data} = this.state
      const destinations = data.destinations
 

      if(destinations != undefined) {
        destinations.forEach(element => {
            objArr.push(element.name)
        });
        console.log(objArr)
      }
      const result = objArr.map((entry, index) => {
        return <li key={index} className="">{entry}</li>
      })
  
      return <ul>{result}</ul>
    }
  }
  
  export default App