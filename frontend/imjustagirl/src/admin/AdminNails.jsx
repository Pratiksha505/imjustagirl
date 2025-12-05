import React, { useState } from 'react'
import axios from 'axios';
import AdminNav from './AdminNav'
import { useNavigate } from 'react-router-dom';

const AdminNails = () => {
  const navigate=useNavigate();
  const [nailsImage, setNailsImage] = useState([]);

  const handleNails = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      nailsImage.forEach((file) => {
        formData.append("images", file);
      });
      const response = await axios.post("http://localhost:5000/nails-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      setNailsImage([]);
      alert("Images Added");
    } catch (error) {
      console.error("Error adding images:", error);
    }
  };

  const backToAdmin=()=> {
    navigate('/Admin');
  }

  const showNails=()=> {
    navigate('/ShowNails');
  }

  return (
    <div>
      <AdminNav/>
      <button onClick={backToAdmin} className='back-admin'> Back To Admin </button>

      <section className='fashion-section'>
        <div className="fhead">
          <h3>For Nail Page</h3>
          <button onClick={showNails} className='show-fashion-btn'> Show Nail Images </button>
        </div>

        <form onSubmit={handleNails} className='fashion-form'>
          <div className='fashion-subsection1'>
            <h4>For Nail-Art</h4>
            <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setNailsImage(Array.from(e.target.files))} /> <br/> 
            <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
            {nailsImage.map((img1, index) => (
              <img key={index} src={URL.createObjectURL(img1)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
            ))}
          </div>
        </form>
      </section>
      
    </div>
  )
}

export default AdminNails