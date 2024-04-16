import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/userService.jsx"
import { User } from "../users.jsx"
import "./employees.css"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeesArray => {
            setEmployees(employeesArray)
        })
    }, [])

    return (
      <div className="employees">
        {employees.map((employeeObj) => {
          return <User user={employeeObj} />;
        })}
      </div>
    );
}