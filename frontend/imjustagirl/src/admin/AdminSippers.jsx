import React from 'react'
import AdminNav from './AdminNav'

const AdminSippers = () => {
  return (
    <div>
        <AdminNav/>
         <section className='sippers-section'>
                <h3>For Sippers Page</h3>
                <div className='sippers-subsection'>
                    <h4>For Sippers</h4>
                    <input type="file"></input>
                </div>
            </section>
    </div>
  )
}

export default AdminSippers