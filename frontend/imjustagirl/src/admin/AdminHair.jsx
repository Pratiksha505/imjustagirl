import React from 'react'
import AdminNav from './AdminNav'

const AdminHair = () => {
  return (
    <div>
        <AdminNav/>
         <section className='hair-admin-section'>
            <h3>For Hair Page</h3>
            <div className='hair-subsection1'>
                <h4>For Hair Candy</h4>
                <input type="file"></input>
            </div>
            <div className='hair-subsection1'>
                <h4>For Hair Fairytales</h4>
                <input type="file"></input>
            </div>
        </section>
    </div>
  )
}

export default AdminHair