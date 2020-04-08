import React, { Component } from 'react';
import Employees from './components/employees';

class App extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then((data) => {
     this.setState({employees: data.data});
    })
    .catch(console.log)
  }
  render() {
    return (
      <Employees employees={this.state.employees} />
    )
  }
}

export default App;
