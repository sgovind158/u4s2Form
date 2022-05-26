import React from 'react'
import axios from "axios";

const Table = () => {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
      ]
  return (
    <div>
        <table>
            <thead>
        <tr>
        <th>Photo</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Departement</th>
          <th>Salary</th>
          <th>Marriage Stutus</th>
          <th>Gender</th>
        </tr>
        </thead>
        {data.map((val, key) => {
          return (
              <tbody>
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
            </tbody>
          )
        })}

      </table>
      
    </div>


  )
}

export default Table
