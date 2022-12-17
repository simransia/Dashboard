import React from 'react';
import { AreaChart, Tooltip, Area, linearGradient } from 'recharts';
import "./Balance.scss"

function Balance() {
  const data = [
    { "uv": 2000, },
    { "uv": 1300 },
    { "uv": 2680 },
    { "uv": 1890 },
    { "uv": 2390 },
    { "uv": 1090 },
    { "uv": 1890 },
    { "uv": 2000, },
    { "uv": 1300 },
    { "uv": 2680 },
    { "uv": 1890 },
    { "uv": 2390 },
    { "uv": 1090 },
    { "uv": 1600 },
    { "uv": 1890 },
    { "uv": 2390 },
    { "uv": 1090 },
    { "uv": 1600 },
  ]

  return (
    <div className='balance__container'>
      <div className='title'>
        <span>Balance</span>
      <select>
        <option>Monthly</option>
        <option>Weekly</option>
        <option>Yearly</option>
        <option>Daily</option>
      </select>
      </div>
      <div className='data__container'>
        <div className='data-item'>
          <p className='sub-title'>Earnings</p>
          <p className='data'>43.41%<span>+2.5%</span></p>
          </div>
        <div className='data-item'>
          <p className='sub-title'>Sales Value</p>
          <p className='data'>$95,422<span>+13.5%</span></p>
          </div>
      </div>
      <AreaChart width={510} height={150} data={data}
      >
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#382BDB" fillOpacity={1} fill="#EEEDFB" />
      </AreaChart>
    </div>
  )
}

export default Balance