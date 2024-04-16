import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { User } from "../users.jsx"
import "./customers.css"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
      <div className="customers">
        {customers.map((customerObj) => {
          return (
            <User user={customerObj} />
          );
        })}
      </div>
    );
}