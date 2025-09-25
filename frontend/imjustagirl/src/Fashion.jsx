import React, {useState, useEffect} from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
import Masonry from 'react-masonry-css';

const Fashion = () => {
    const[comfyData, setComfyData]=useState([]);
    const[chicData, setChicData]=useState([]);
    const[desiData, setDesiData]=useState([]);
    const[shadiData, setShadiData]=useState([]);
    const[glamData, setGlamData]=useState([]);
    const[error, setError]=useState("");

    async function getComfyData(){
        try{
            const response=await fetch("http://localhost:5000/comfy");
            const result=await response.json();
            if(!response.ok) {
                setError(result.error);
            }
            else {
                setComfyData(result);
            }
        }
        catch(err) {
            setError("Failed to fetch data.");
        }
    }
    async function getChicData(){
        try{
            const response=await fetch("http://localhost:5000/chic");
            const result=await response.json();
            if(!response.ok) {
                setError(result.error);
            }
            else {
                setChicData(result);
            }
        }
        catch(err) {
            setError("Failed to fetch data.");
        }
    }
    async function getDesiData(){
        try{
            const response=await fetch("http://localhost:5000/desi");
            const result=await response.json();
            if(!response.ok) {
                setError(result.error);
            }
            else {
                setDesiData(result);
            }
        }
        catch(err) {
            setError("Failed to fetch data.");
        }
    }
    async function getShadiData(){
        try{
            const response=await fetch("http://localhost:5000/shadi");
            const result=await response.json();
            if(!response.ok) {
                setError(result.error);
            }
            else {
                setShadiData(result);
            }
        }
        catch(err) {
            setError("Failed to fetch data.");
        }
    }
    async function getGlamData(){
        try{
            const response=await fetch("http://localhost:5000/glam");
            const result=await response.json();
            if(!response.ok) {
                setError(result.error);
            }
            else {
                setGlamData(result);
            }
        }
        catch(err) {
            setError("Failed to fetch data.");
        }
    }
    
    useEffect(()=> {
        getComfyData();
        getChicData();
        getDesiData();
        getShadiData();
        getGlamData();
    }, []);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
          
    return (
    <div>
        <CommonBars/>
        <div className='fashion-main'>
            <div className='text-div'>
                <h2 className='fashion-text1'>✨Where Fashion meets mood swing✨</h2>
            </div>
            <div className='top-section'>
                <div className='fashion-text-class'>
                    <h2 className='fashion-text2'>For the girl who wants it all —— and wears it her way!</h2>
                </div>
                <div className='fashion-carousel'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://i.pinimg.com/736x/f7/02/a0/f702a09fa0c65ff8d95b17af4a8f67da.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/e3/7f/0a/e37f0a2fece65a912e641823876e19aa.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/736x/65/a1/b2/65a1b26667a91cacf4ce59e3c9c2dbb1.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='fashion-side-section'>
                    <h2> 👈Want Link<br/>
                    &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;DM us on <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@tashaaa.05</h2>
                </div>
                <h2 className='fashion-text'>From cute to chic, we've got your vibe</h2>
            </div>
            <div className='mid-section'>
                <div className="container1 text-center">
                    <div className="row1">
                        <a className='container-text' href = "#comfy">
                            <div className="col">
                                ☁️Comfy & Cute
                            </div>
                        </a>
                        <a className='container-text' href= "#boss">
                            <div className="col">
                                💼Chic Boss Babe
                            </div>
                        </a>
                    </div>
                    <div className="row2">
                        <a className='container-text' href="#desi">
                            <div id="col1">
                                🌸Desi Diva Diaries
                            </div></a>
                        <a className='container-text' href="#shaadi">
                            <div id="col1">
                                💍Shaadi Sparkles
                            </div>
                        </a>
                        <a className='container-text' href="#glam">
                            <div id="col1">
                                🎉Glam Night Out
                            </div>
                        </a>
                    </div>
                </div>
            </div>
                
            <div className='bottom-section'>
                <a name="comfy"></a>
                <div className='section1'>
                    <h2>☁️Comfy & Cute</h2>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"  >
                        {comfyData.map((comfy) => (
                            <div key={comfy._id} className="image-card">
                            <img src={comfy.image || comfy.imageUrl} alt="comfy" />
                            </div>
                        ))}
                    </Masonry>
                </div>
                <a name="boss"></a>
                <div className='section2'>
                    <h2>💼Chic Boss Babe</h2>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                        {chicData.map((chic) => (
                            <div key={chic._id} className="image-card">
                            <img src={chic.image || chic.imageUrl} alt="chic" />
                            </div>
                        ))}
                    </Masonry>
                </div>
                <a name="desi"></a>
                <div className='section3'>
                    <h2>🌸Desi Diva Diaries</h2>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                        {desiData.map((desi) => (
                            <div key={desi._id} className="image-card">
                            <img src={desi.image || desi.imageUrl} alt="desi" />
                            </div>
                        ))}
                    </Masonry>
                </div>
                <a name="shaadi"></a>
                <div className='section4'>
                    <h2>💍Shaadi Sparkles</h2>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"  columnClassName="my-masonry-grid_column" >
                        {shadiData.map((shadi) => (
                            <div key={shadi._id} className="image-card">
                            <img src={shadi.image || shadi.imageUrl} alt="shadi" />
                            </div>
                        ))}
                    </Masonry>
                </div>
                <a name="glam"></a>
                <div className='section5'>
                    <h2>🎉Glam Night Out</h2>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"  columnClassName="my-masonry-grid_column" >
                        {glamData.map((glam) => (
                            <div key={glam._id} className="image-card">
                            <img src={glam.image || glam.imageUrl} alt="glam" />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}
export default Fashion