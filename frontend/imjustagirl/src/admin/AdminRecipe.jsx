import React from 'react'
import AdminNav from './AdminNav'

const AdminRecipe = () => {
  return (
    <div>
        <AdminNav/>
          <section className='recipe-section'>
                <h3>For Recipe Page</h3>
                <div className='recipe-subsection'>
                    <h4>For Chic Boss Babe</h4>
                    <input type="file"></input>
                </div>
            </section>
    </div>
  )
}

export default AdminRecipe