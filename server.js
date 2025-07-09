// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');



// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:8080', // Adjust to match your frontend's port (e.g., 8080 for live-server)
//   methods: ['GET', 'POST'],
//   credentials: true
// }));

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/gurjant_portfolio')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Define Schema
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // API Endpoint to Save Form Data
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Validate input
//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newContact = new Contact({ name, email, message });
//     const savedContact = await newContact.save();
//     res.status(201).json({ message: 'Data saved successfully', data: savedContact });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).json({ message: 'Error saving data', error: error.message });
//   }
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).json({ message: 'Internal server error', error: err.message });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();





// This is new code 




require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080', // Adjust to match your frontend's port
  methods: ['GET', 'POST'],
  credentials: true
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});



console.log(contactSchema)



const Contact = mongoose.model('Contact', contactSchema);

// API Endpoint to Save Form Data
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    res.status(201).json({ message: 'Data saved successfully', data: savedContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});


app.use(cors({
  origin: 'http://localhost:5080', // Match your frontend port
  methods: ['GET', 'POST'],
  credentials: true
}));




// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));