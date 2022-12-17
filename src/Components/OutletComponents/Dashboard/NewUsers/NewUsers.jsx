import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BarChart, Tooltip, Bar } from 'recharts';
import "./NewUsers.scss";

function NewUsers() {
  const data = [
    { "uv": 900, },
    { "uv": 1800, },
    { "uv": 700 },
    { "uv": 1800 },
    { "uv": 1200 },
    { "uv": 2200 },
    { "uv": 1000 },
    { "uv": 1390 },
  ]

  return (
    <div className='new-users__container'>
      <p className='title'><span>New Users</span> <MoreHorizIcon /></p>
      <p className='data'>94.2%<span>+69%</span></p>

      <BarChart width={500} height={90} data={data}>
        <Tooltip />
        <Bar dataKey="uv" fill="#4154E8" />
      </BarChart>

    </div>
  )
}

export default NewUsers