import { useState, useEffect } from "react"
import { getAllTickets } from "../services/TicketService.jsx"
import "../tickets.css"

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
      console.log("Tickets Set!")
    })
  }, []) // with an empty dependency array, it ONLY runs on initial render of the component **

  useEffect(() => {
    if(showEmergency === true) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => {setShowEmergency(true)}}>Emergency</button>
        <button className="filter-btn btn-info" onClick={() => {setShowEmergency(false)}}>Show All</button>
      </div>
      <article className="tickets">
        {filteredTickets.map((ticket) => {
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