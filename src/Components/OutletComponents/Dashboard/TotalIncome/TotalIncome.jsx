import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./TotalIncome.scss"

function TotalIncome() {
  return (
    <div className='total-income__container'>
      <p className='title'><span>Total Income</span> <MoreHorizIcon/></p>
      <p className='data'>$124,563.00<span>+69%</span></p>
      <LinearProgress variant="determinate" value={65} />
      <span className='sub-title'>Yearly Goal</span>

    </div>
  )
}

export default TotalIncome