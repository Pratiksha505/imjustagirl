import React from 'react'
import AdminNav from './AdminNav'

const AdminPhotography = () => {
  return (
    <div>
        <AdminNav/>
        <section className='photography-section'>
            <h3>For Photography Page</h3>
            <div className='photos-subsection1'>
                <h4>For Sippin' & Snapshots</h4>
                <input type="file"></input>
            </div>
            <div className='photos-subsection1'>
                <h4>Pages, Petals & Candle Glow</h4>
                <input type="file"></input>
            </div>
            <div className='photos-subsection1'>
                <h4>For Head high, chin up, crown on</h4>
                <input type="file"></input>
            </div>
        </section>
    </div>
  )
}

export default AdminPhotography