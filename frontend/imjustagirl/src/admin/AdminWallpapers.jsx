import React from 'react'
import AdminNav from './AdminNav'

const AdminWallpapers = () => {
  return (
    <div>
        <AdminNav/>
          <section className='wallpaper-section'>
                <h3>For Wallpaper Page</h3>
                <div className='wallpaper-subsection'>
                    <h4>For wallpaper</h4>
                    <input type="file"></input>
                </div>
            </section>
    </div>
  )
}

export default AdminWallpapers