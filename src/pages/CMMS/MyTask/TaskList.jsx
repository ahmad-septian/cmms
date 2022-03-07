import React from 'react'
import './Task.css'
import { Link } from 'react-router-dom';

export default function TaskList() {
  return (
    <div className='TaskList'>
      <h2 className='TitleList'>TPM</h2>

      <Link className='TaskLink' to="/Sheet1">
        <div className="ListTask">
          <h4 className='DescList'>Turn Table 9</h4>
          <div className="StatusList"/>
        </div>
      </Link>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList2"/>
      </div>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList2"/>
      </div>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList"/>
      </div>

      <h2 className='TitleList'>PM</h2>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList"/>
      </div>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList2"/>
      </div>
      <div className="ListTask">
        <h4 className='DescList'>Turn Table 9</h4>
        <div className="StatusList2"/>
      </div>
    </div>
  )
}
