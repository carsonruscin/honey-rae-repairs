import { useState, useEffect } from "react";
import { getAllEmployees } from "../../services/EmployeeService.jsx";

export const Ticket = ({ ticket }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
      getAllEmployees().then((employeesArray) => {setEmployees(employeesArray)})
    }, [])

    useEffect(() => {
      const foundEmployee = employees.find(
        employee => employee.id === ticket.employeeTickets[0]?.employeeId)
        
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    return (
      <section className="ticket">
        <header className="ticket-info">#{ticket.id}</header>
        <div>{ticket.description}</div>
        <footer>
          <div>
            <div className="ticket-info">assignee</div>
            <div>{assignedEmployee ? assignedEmployee.user?.fullName: "None"}</div>
          </div>
          <div>
            <div className="ticket-info">Emergency</div>
            <div>{ticket.emergency ? "Yes" : "No"}</div>
          </div>
        </footer>
      </section>
    );
}