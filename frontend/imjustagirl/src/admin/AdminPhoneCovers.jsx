import React from 'react'
import AdminNav from './AdminNav'

const AdminPhoneCovers = () => {
  return (
    <div>
        <AdminNav/>
         <section className='phonecovers-section'>
                <h3>For PhoneCover Page</h3>
                <div className='phonecovers-subsection1'>
                    <h4>For phone-section1</h4>
                    <input type="file"></input>
                </div>
                <div className='phonecovers-subsection1'>
                    <h4>For phone-section2</h4>
                    <input type="file"></input>
                </div>
                <div className='phonecovers-subsection1'>
                    <h4>For phone-section3</h4>
                    <input type="file"></input>
                </div>
            </section>
    </div>
  )
}

export default AdminPhoneCovers