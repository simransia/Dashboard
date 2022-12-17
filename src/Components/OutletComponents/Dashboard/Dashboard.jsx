import React from 'react'
import Balance from './Balance/Balance';
import TotalIncome from './TotalIncome/TotalIncome';
import NewUsers from "./NewUsers/NewUsers";
import RecentTransactions from './RecentTransactions/RecentTransactions';
import "./Dashboard.scss"

function Dashboard() {
  return (
    <div className='dashboard__container'>
      <div className='section'>
        <div className='section-item'>
          <TotalIncome />
          <NewUsers />
        </div>
        <div className='section-item'>
          <Balance />
        </div>
      </div>
      <div className='section'>
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard