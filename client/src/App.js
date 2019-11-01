import React from 'react';
import axios from 'axios'
import CardList from './components/CardList';
import Navbar from './components/Navbar';

import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(resp => {
      // console.log(resp.data)
      this.setState({
        data: resp.data
      })
    })
    .catch(err => console.log(err));
  }



  render(){
    return (
      <div className="App">
          <Navbar/>
        <h1 className='title'> Women's World Cup</h1>
       <CardList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
