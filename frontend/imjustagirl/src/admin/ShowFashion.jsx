import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';

const ShowFashion = () => {
    const navigate=useNavigate();

    const [comfyData, setComfyData] = useState([]);
    const [chicData, setChicData] = useState([]);
    const [desiData, setDesiData] = useState([]);
    const [shadiData, setShadiData] = useState([]);
    const [glamData, setGlamData] = useState([]);

    useEffect(() => {
        const fetchComfyImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/comfy');
                setComfyData(response.data);
            } catch (error) {
                console.error("Error fetching comfy data:", error);
            }
        };
        fetchComfyImages();

         const fetchChicImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/chic');
                setChicData(response.data);
            } catch (error) {
                console.error("Error fetching comfy data:", error);
            }
        };
        fetchChicImages();

         const fetchDesiImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/desi');
                setDesiData(response.data);
            } catch (error) {
                console.error("Error fetching comfy data:", error);
            }
        };
        fetchDesiImages();

         const fetchShadiImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/shadi');
                setShadiData(response.data);
            } catch (error) {
                console.error("Error fetching comfy data:", error);
            }
        };
        fetchShadiImages();

         const fetchGlamImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/glam');
                setGlamData(response.data);
            } catch (error) {
                console.error("Error fetching comfy data:", error);
            }
        };
        fetchGlamImages();
    }, []);

    const deleteComfyImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/comfy/${id}`);
            setComfyData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting comfy image:", error);
        }
    };

    const deleteChicImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/chic/${id}`);
            setChicData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting chic image:", error);
        }
    };

    const deleteDesiImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/desi/${id}`);
            setDesiData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting desi image:", error);
        }
    };

    const deleteShadiImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/shadi/${id}`);
            setShadiData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting shadi image:", error);
        }
    };

    const deleteGlamImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/glam/${id}`);
            setGlamData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting glam image:", error);
        }
    };

    const addFashion=()=> {
        navigate('/AdminFashion');
    }

    return (
        <div>
            <AdminNav />
            <button onClick={addFashion} className='add-fashion'> Add Fashion Images </button>
            <div className='fashion-table'>
                <div>
                    <h2 className='comfy-head'> Comfy </h2>
                    <table className="comfy-table">
                        <thead>
                            <tr className='tab-row'> 
                                <th scope="col" className='i-head'>IMAGE</th>
                                <th scope="col" className='de-head'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comfyData.map((comfyData) => (
                                <tr key={comfyData._id}>
                                    <td scope="row">
                                        <img className="c-img" src={comfyData.image} alt="fashion" />
                                    </td>
                                    <td className='d-head'>
                                        <button className="delete-btn" onClick={() => deleteComfyImage(comfyData._id)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className='comfy-head'> Chic </h2>
                      <table className="chic-table">
                        <thead>
                            <tr className='tab-row'> 
                                <th scope="col" className='i-head'>IMAGE</th>
                                <th scope="col" className='de-head'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chicData.map((chicData) => (
                                <tr key={chicData._id}>
                                    <td scope="row">
                                        <img className="c-img" src={chicData.image} alt="fashion" />
                                    </td>
                                    <td className='d-head'>
                                        <button className="delete-btn" onClick={() => deleteChicImage(chicData._id)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               
                <div>
                    <h2 className='comfy-head'> Desi </h2>
                    <table className="desi-table">
                        <thead>
                            <tr className='tab-row'> 
                                <th scope="col" className='i-head'>IMAGE</th>
                                <th scope="col" className='de-head'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {desiData.map((desiData) => (
                                <tr key={desiData._id}>
                                    <td scope="row">
                                        <img className="c-img" src={desiData.image} alt="fashion" />
                                    </td>
                                    <td className='d-head'>
                                        <button className="delete-btn" onClick={() => deleteDesiImage(desiData._id)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                
                <div>
                    <h2 className='comfy-head'> Shadi </h2>
                    <table className="shadi-table">
                        <thead>
                            <tr className='tab-row'> 
                                <th scope="col" className='i-head'>IMAGE</th>
                                <th scope="col" className='de-head'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shadiData.map((shadiData) => (
                                <tr key={shadiData._id}>
                                    <td scope="row">
                                        <img className="c-img" src={shadiData.image} alt="fashion" />
                                    </td>
                                    <td className='d-head'>
                                        <button className="delete-btn" onClick={() => deleteShadiImage(shadiData._id)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className='comfy-head'> Glam </h2>
                     <table className="glam-table">
                        <thead>
                            <tr className='tab-row'> 
                                <th scope="col" className='i-head'>IMAGE</th>
                                <th scope="col" className='de-head'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {glamData.map((glamData) => (
                                <tr key={glamData._id}>
                                    <td scope="row">
                                        <img className="c-img" src={glamData.image} alt="fashion" />
                                    </td>
                                    <td className='d-head'>
                                        <button className="delete-btn" onClick={() => deleteGlamImage(glamData._id)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ShowFashion;