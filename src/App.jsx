import { useEffect, useState } from "react"
import { getAllTickets } from "./services/TicketService.jsx"
import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)

  useEffect(() => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
      console.log("Tickets Set!")
    })
  }, []) // with an empty dependency array, it ONLY runs on initial render of the component **

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => {setShowEmergency(true)}}>Emergency</button>
      </div>
      <article className="tickets">
        {allTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div>
                  <div className="ticket-info">Emergency</div>
                  <div>{ticket.emergency ? "Yes" : "No"}</div>
                </div>
              </footer>
            </section>
          );
        })}
      </article>
    </div>
  );
}
