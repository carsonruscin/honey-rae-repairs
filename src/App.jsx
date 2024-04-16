import "./App.css"
import { EmployeesList } from "./components/employees/EmployeesList.jsx"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"

export const App = () => {
  return <>
          {/* <TicketList /> */}
          {/* <CustomersList /> */}
          <EmployeesList />
        </>
}
