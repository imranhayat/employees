import React, { Component } from 'react';
import Employees from './components/employees';
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      name: "",
      age: "",
      salary: "",
      hide: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // Fetch
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then((data) => {
        this.setState({ employees: data.data });
      })
      .catch(console.log)
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit(event) {
    this.setState({ hide: true });
    event.preventDefault();
    const body = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary,
    }

    // Create
    axios.post('http://dummy.restapiexample.com/api/v1/create', body)
      .then(function(response) {
        console.log(response);

        // Delete
        var idd = response.data.data.id
        var URL = `http://dummy.restapiexample.com/api/v1/delete/${idd}`

        axios.delete(URL, {params:{id: idd}})
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="container mt-3">

          {/* Add New Employee Form */}
          <center><h3>Add New Employee</h3></center>
          <form onSubmit={this.handleSubmit} className="form-inline my-4 justify-content-center">
            <input id="name" className="form-control mr-2" placeholder="Enter Name" type="text" value={this.state.name} onChange={this.handleChange} />
            <input id="age" className="form-control mr-2" placeholder="Enter Age" type="number" value={this.state.age} onChange={this.handleChange} />
            <input id="salary" className="form-control mr-2" placeholder="Enter Salary" type="number" value={this.state.salary} onChange={this.handleChange} />
            <input id="hide" className="form-control mr-2" placeholder="Enter Salary" type="hidden" value={this.state.hide} onChange={this.handleChange} />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>

          {/* Listing What is entered in form */}
          <div className={`col-md-6 mb-3 mx-auto ${this.state.hide ? '' : 'd-none'}`}>
            <center><h3>New Employee</h3></center>
            <ul className="list-group">
              <li className="list-group-item">Name: {this.state.name}</li>
              <li className="list-group-item">Salary: {this.state.salary}</li>
              <li className="list-group-item">Age: {this.state.age}</li>
            </ul>
          </div>

          {/* Employees List from employees.js */}
          <Employees employees={this.state.employees} />
        </div>
      </div>
    )
  }
}
export default App;