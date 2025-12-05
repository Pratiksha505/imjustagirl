import React, {useState} from 'react'
import axios from 'axios';
import AdminNav from './AdminNav'
import { useNavigate } from 'react-router-dom';

const AdminFashion = () => {
    const navigate=useNavigate();
    const [comfyImage, setComfyImage] = useState([]);
    const [chicImage, setChicImage] = useState([]);
    const [desiImage, setDesiImage] = useState([]);
    const [shadiImage, setShadiImage] = useState([]);
    const [glamImage, setGlamImage] = useState([]);

    const handleComfy = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            comfyImage.forEach((file) => {
                formData.append("images", file);
            });
            const response = await axios.post("http://localhost:5000/comfy-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
            setComfyImage([]);
            alert("Images Added");
        } catch (error) {
            console.error("Error adding images:", error);
        }
    };

    const handleChic = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            chicImage.forEach((file) => {
                formData.append("images", file);
            });
            const response = await axios.post("http://localhost:5000/chic-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
            setChicImage([]);
            alert("Images Added");
        } catch (error) {
            console.error("Error adding images:", error);
        }
    };

    const handleDesi = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            desiImage.forEach((file) => {
                formData.append("images", file);
            });
            const response = await axios.post("http://localhost:5000/desi-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
            setDesiImage([]);
            alert("Images Added");
        } catch (error) {
            console.error("Error adding images:", error);
        }
    };

    const handleShadi = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            shadiImage.forEach((file) => {
                formData.append("images", file);
            });
            const response = await axios.post("http://localhost:5000/shadi-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
            setShadiImage([]);
            alert("Images Added");
        } catch (error) {
            console.error("Error adding images:", error);
        }
    };
    
    const handleGlam = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            glamImage.forEach((file) => {
                formData.append("images", file);
            });
            const response = await axios.post("http://localhost:5000/glam-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
            setGlamImage([]);
            alert("Images Added");
        } catch (error) {
            console.error("Error adding images:", error);
        }
    };

    const backToAdmin=()=> {
        navigate('/Admin');
    }

    const showFashion=()=> {
        navigate('/ShowFashion');
    }

  return (
    <div>
        <AdminNav/>

        <button onClick={backToAdmin} className='back-admin'> Back To Admin </button>

        <section className='fashion-section'>
            <div className="fhead">
                <h3>For Fashion Page</h3>
                <button onClick={showFashion} className='show-fashion-btn'> Show Fashion Images </button>
            </div>

            <form onSubmit={handleComfy} className='fashion-form'>
                <div className='fashion-subsection1'>
                    <h4>For Comfy & Cute</h4>
                    <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setComfyImage(Array.from(e.target.files))} /> <br/> 
                    <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
                    {comfyImage.map((img1, index) => (
                        <img key={index} src={URL.createObjectURL(img1)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
                    ))}
                </div>
            </form>

            <form onSubmit={handleChic} className='fashion-form'>
                <div className='fashion-subsection1'>
                    <h4>For Chic Boss Babe</h4>
                    <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setChicImage(Array.from(e.target.files))} /> <br/> 
                    <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
                    {chicImage.map((img2, index) => (
                        <img key={index} src={URL.createObjectURL(img2)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
                    ))}
                </div>
            </form>

            <form onSubmit={handleDesi} className='fashion-form'>
                <div className='fashion-subsection1'>
                    <h4>For Desi Diva Diaries</h4>
                    <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setDesiImage(Array.from(e.target.files))} /> <br/> 
                    <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
                    {desiImage.map((img3, index) => (
                        <img key={index} src={URL.createObjectURL(img3)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
                    ))}
                </div>
            </form>

            <form onSubmit={handleShadi} className='fashion-form'>
                <div className='fashion-subsection1'>
                    <h4>For Shaadi Sparkles</h4>
                    <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setShadiImage(Array.from(e.target.files))} /> <br/> 
                    <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
                    {shadiImage.map((img4, index) => (
                        <img key={index} src={URL.createObjectURL(img4)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
                    ))}
                </div>
            </form>

            <form onSubmit={handleGlam} className='fashion-form'>
                <div className='fashion-subsection1'>
                    <h4>For Glam Night Out</h4>
                    <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => setGlamImage(Array.from(e.target.files))} /> <br/> 
                    <button type="submit" className="submit-btn"> Add Images </button> <br/> <br/>
                    {glamImage.map((img5, index) => (
                        <img key={index} src={URL.createObjectURL(img5)} alt={`Preview ${index}`} width="100" style={{ marginTop: '10px', marginRight: '5px' }} />
                    ))}
                </div>
            </form>
        </section>
    </div>
  )
}

export default AdminFashion