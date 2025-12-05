import React from 'react'
import AdminNav from './AdminNav'

const AdminBags = () => {
  return (
    <div>
      <AdminNav/>
      <section className='bags-section'>
                <h3>For Bags Page</h3>
                <div className='bags-subsection1'>
                    <h4>For Backpacks</h4>
                    <input type="file"></input>
                </div>
                <div className='bags-subsection1'>
                    <h4>For Totes</h4>
                    <input type="file"></input>
                </div>
                <div className='bags-subsection1'>
                    <h4>For Clutches </h4>
                    <input type="file"></input>
                </div>
                <div className='bags-subsection1'>
                    <h4>For WorkBags </h4>
                    <input type="file"></input>
                </div>
            </section>
            
    </div>
  )
}

export default AdminBags