const express=require('express');
const mongoose=require('mongoose');
const app=express();
const multer=require('multer');
const cors=require('cors');
const path = require('path');
const comfyModel = require('./models/fashion/comfyModel');
const chicModel = require('./models/fashion/chicModel');
const desiModel = require('./models/fashion/desiModel');
const shadiModel = require('./models/fashion/shadiModel');
const glamModel = require('./models/fashion/glamModel');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/uploads', express.static('uploads'));

mongoose.connect("mongodb://127.0.0.1:27017/self")
.then(()=> {
  console.log("connected successfully");
  app.listen(5000);
})
.catch((error)=> {
  console.log("error");
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});


// ----------------------------------------------for fashion----------------------------------------------

// for comfy 

app.post('/comfy-image', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }
    const imageEntries = req.files.map((file) => ({
      image: `http://localhost:5000/uploads/${file.filename}`
    }));
    const comfy = await comfyModel.insertMany(imageEntries);
    res.json(comfy);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images" });
  }
});

app.get('/comfy', async (req, res) => {
  try {
    const comfyImage = await comfyModel.find();
    console.log(comfyImage);
    res.json(comfyImage);
  } 
  catch (error) {
    console.error("Error fetching fashion images:", error);
    res.status(500).json({ error: "Server error while fetching fashion images" });
  }
});

app.delete('/comfy/:id', async (req, res) => {
  try {
    await comfyModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Comfy image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting comfy image" });
  }
});

// for chic

app.post('/chic-image', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }
    const imageEntries = req.files.map((file) => ({
      image: `http://localhost:5000/uploads/${file.filename}`
    }));
    const chic = await chicModel.insertMany(imageEntries);
    res.json(chic);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images" });
  }
});

app.get('/chic', async (req, res) => {
  try {
    const chicImage = await chicModel.find();
    console.log(chicImage);
    res.json(chicImage);
  } 
  catch (error) {
    console.error("Error fetching fashion images:", error);
    res.status(500).json({ error: "Server error while fetching fashion images" });
  }
});

app.delete('/chic/:id', async (req, res) => {
  try {
    await chicModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Chic image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting chic image" });
  }
});

// for desi

app.post('/desi-image', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }
    const imageEntries = req.files.map((file) => ({
      image: `http://localhost:5000/uploads/${file.filename}`
    }));
    const desi = await desiModel.insertMany(imageEntries);
    res.json(desi);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images" });
  }
});

app.get('/desi', async (req, res) => {
  try {
    const desiImage = await desiModel.find();
    console.log(desiImage);
    res.json(desiImage);
  } 
  catch (error) {
    console.error("Error fetching fashion images:", error);
    res.status(500).json({ error: "Server error while fetching fashion images" });
  }
});

app.delete('/desi/:id', async (req, res) => {
  try {
    await desiModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Desi image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting desi image" });
  }
});

// for shadi

app.post('/shadi-image', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }
    const imageEntries = req.files.map((file) => ({
      image: `http://localhost:5000/uploads/${file.filename}`
    }));
    const shadi = await shadiModel.insertMany(imageEntries);
    res.json(shadi);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images" });
  }
});

app.get('/shadi', async (req, res) => {
  try {
    const shadiImage = await shadiModel.find();
    console.log(shadiImage);
    res.json(shadiImage);
  } 
  catch (error) {
    console.error("Error fetching fashion images:", error);
    res.status(500).json({ error: "Server error while fetching fashion images" });
  }
});

app.delete('/shadi/:id', async (req, res) => {
  try {
    await shadiModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Shadi image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting shadi image" });
  }
});

// for glam

app.post('/glam-image', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }
    const imageEntries = req.files.map((file) => ({
      image: `http://localhost:5000/uploads/${file.filename}`
    }));
    const glam = await glamModel.insertMany(imageEntries);
    res.json(glam);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images" });
  }
});

app.get('/glam', async (req, res) => {
  try {
    const glamImage = await glamModel.find();
    console.log(glamImage);
    res.json(glamImage);
  } 
  catch (error) {
    console.error("Error fetching fashion images:", error);
    res.status(500).json({ error: "Server error while fetching fashion images" });
  }
});

app.delete('/glam/:id', async (req, res) => {
  try {
    await glamModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Glam image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting glam image" });
  }
});


// ----------------------------------------------for hair----------------------------------------------

