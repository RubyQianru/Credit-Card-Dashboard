import { useEffect, useState } from 'react'
import EventsTab from './Components/EventsTab'
import BalanceCard from './Components/BalanceCard'

const pendingTransaction = require ('./Components/PendingTransactions')
const postedTransaction = require ('./Components/PostedTransactions')
import './App.css'

function App() {
  const [pending, setPending] = useState([])
  const [posted, setPosted] = useState([])
  const [event, setEvent] = useState([])

  const [creditLimit, setCreditLimit] = useState(1000)
  const [availableCredit, setAvailableCredit] = useState(0)
  const [balance, setBalance] = useState(0)
  
  useEffect(()=>{
    // Create async function to pass in events from REST API, and setEvent with the events. 
      // - This procedure also returns the credit limit.
    // We can then use the oop I have created in HackerRank to read in JSON and clean up data. 
      // - This procedure returns balance, and available credit.

  },[])

  return (
    <>
      <BalanceCard
        balance = {balance}
        availableCredit = {availableCredit}
        creditLimit = {creditLimit}
      />
      <EventsTab 
        // events={events} Passing in events through async function.
        // scheduled = {pending} Passing in pending (scheduled) transactions to show up in Scheduled tab
      />
    </>
  )
}

export default App
