//App.js is the root component
//Container component
import React, {Component} from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas: [
      {name: 'Ninja', age:20, belt:'Black', id:1},
      {name: 'Ganja', age:30, belt:'Green', id:2},
      {name: 'Gangbang', age:10, belt:'White', id:3}
    ]
  }
  render(){
  return (
    <div className="App">
      <h1>My First React App</h1>
       <Ninjas ninjas={this.state.ninjas}/>   
    </div>
  );
  }
}

export default App;
