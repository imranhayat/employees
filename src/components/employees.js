import React from 'react'

const Employees = ({ employees }) => {
  return (
    <div>
      <div className="container mt-3">
        <center><h1>Employees List</h1></center>
        <div className="row mt-4">
          {employees.map((employee) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={employee.id}>
              <ul className="list-group">
                <li className="list-group-item active text-center">No. {employee.id}</li>
                <li className="list-group-item">Name: {employee.employee_name}</li>
                <li className="list-group-item">Salary: {employee.employee_salary}</li>
                <li className="list-group-item">Age: {employee.employee_age}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Employees