import { useState, useEffect } from "react"
import { getAllTickets } from "../services/TicketService.jsx"
import { Ticket } from "./Ticket.jsx"
import "../tickets.css"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  useEffect(() => {
    const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))

    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar setShowEmergency={setShowEmergency} setSearchTerm={setSearchTerm}/>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id}/>
        })}
      </article>
    </div>
  );
}