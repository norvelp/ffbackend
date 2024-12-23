const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://192.168.1.39:3000/partydb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Party Schema
const partySchema = new mongoose.Schema({
  partyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  partyId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const subPartySchema = new mongoose.Schema({
  partyName: {
    type: String,
    required: true,
  },
  farm: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  parentPartyId: {  // To link with the main party (logged-in user)
    type: String,
    required: true,
    ref: 'Party'
  }
}, {
  timestamps: true,
});

const SubParty = mongoose.model('SubParty', subPartySchema);

// Add this new API route to your server.js
app.post('/api/parties/add', async (req, res) => {
  try {
    const { partyName, farm, phoneNumber, parentPartyId } = req.body;
    
    // Validate required fields
    if (!partyName || !farm || !phoneNumber || !parentPartyId) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          partyName: !partyName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          parentPartyId: !parentPartyId
        }
      });
    }

    // Verify if the parent party exists
    const parentParty = await Party.findOne({ partyId: parentPartyId });
    if (!parentParty) {
      return res.status(404).json({ 
        message: 'Parent party not found',
        parentPartyId 
      });
    }

    // Create new sub-party
    const newSubParty = new SubParty({
      partyName,
      farm,
      phoneNumber,
      parentPartyId,
    });

    const savedSubParty = await newSubParty.save();
    
    res.status(201).json({
      message: 'Party information added successfully',
      party: savedSubParty,
    });
  } catch (error) {
    console.error('Error adding party information:', error);
    res.status(500).json({
      message: 'Error adding party information',
      error: error.message
    });
  }
});

// Add this route to get parties for a specific parent
app.get('/api/parties/:parentPartyId', async (req, res) => {
  try {
    const { parentPartyId } = req.params;
    
    const parties = await SubParty.find({ parentPartyId });
    
    res.status(200).json(parties);
  } catch (error) {
    console.error('Error fetching parties:', error);
    res.status(500).json({
      message: 'Error fetching parties',
      error: error.message
    });
  }
});

// const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// Update the partyVendorEntrySchema to include price
const partyVendorEntrySchema = new mongoose.Schema({
  partyId: {
    type: String,
    required: true,
    ref: 'Party'
  },
  subPartyId: {
    type: String,
    required: true,
    ref: 'SubParty'
  },
  vendorId: {
    type: String,
    required: true,
    ref: 'Vendor'
  },
  date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Add this line to create the model
const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// Update the POST endpoint to handle price
app.post('/api/party-vendor-entries', async (req, res) => {
  try {
    const { partyId, subPartyId, vendorId, date, name, quantity, price } = req.body;

    // Validate required fields
    if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          partyId: !partyId,
          subPartyId: !subPartyId,
          vendorId: !vendorId,
          date: !date,
          name: !name,
          quantity: !quantity,
          price: !price
        }
      });
    }

    // Create new entry
    const newEntry = new PartyVendorEntry({
      partyId,
      subPartyId,
      vendorId,
      date,
      name,
      quantity,
      price
    });

    const savedEntry = await newEntry.save();
    
    res.status(201).json({
      message: 'Entry saved successfully',
      entry: savedEntry,
    });
  } catch (error) {
    console.error('Error saving entry:', error);
    res.status(500).json({
      message: 'Error saving entry',
      error: error.message
    });
  }
});

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  farm: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  partyId: {  // Add this field to link vendor with party
    type: String,
    required: true,
    ref: 'Party'
  }
}, {
  timestamps: true,
});

const Vendor = mongoose.model('Vendor', vendorSchema);

// API Route to add new vendor
app.post('/api/vendors', async (req, res) => {
  try {
    const { vendorName, farm, phoneNumber, partyId } = req.body;
    
    console.log('Received vendor data:', req.body);

    // Validate required fields
    if (!vendorName || !farm || !phoneNumber || !partyId) {
      console.log('Missing required fields:', {
        vendorName: !!vendorName,
        farm: !!farm,
        phoneNumber: !!phoneNumber,
        partyId: !!partyId
      });
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          vendorName: !vendorName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          partyId: !partyId
        }
      });
    }

    // Verify if the party exists
    const party = await Party.findOne({ partyId });
    if (!party) {
      console.log('Party not found for ID:', partyId);
      return res.status(404).json({ 
        message: 'Party not found',
        partyId: partyId 
      });
    }

    // Create new vendor with partyId
    const newVendor = new Vendor({
      vendorName,
      farm,
      phoneNumber,
      partyId,
    });

    console.log('Attempting to save vendor:', newVendor);
    const savedVendor = await newVendor.save();
    console.log('Vendor saved successfully:', savedVendor);
    res.status(201).json({
      message: 'Vendor created successfully',
      vendor: savedVendor,
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    res.status(500).json({
      message: 'Error creating vendor',
      error: error.message,
      details: error.code
    });
  }
});

// API Route to get vendors for a specific party
app.get('/api/vendors/:partyId', async (req, res) => {
  try {
    const { partyId } = req.params;

    // Find all vendors for the specified party
    const vendors = await Vendor.find({ partyId });
    
    res.status(200).json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({
      message: 'Error fetching vendors',
      error: error.message
    });
  }
});

const Party = mongoose.model('Party', partySchema);

// API Route to fetch all parties
app.get('/api/parties', async (req, res) => {
  try {
    const parties = await Party.find({}, {
      partyName: 1,
      email: 1,
      phoneNumber: 1,
      partyId: 1,
      password: 1,
      _id: 0
    });
    res.status(200).json(parties);
  } catch (error) {
    console.error('Error fetching parties:', error);
    res.status(500).json({
      message: 'Error fetching parties',
      error: error.message
    });
  }
});

// API Route to add new party
app.post('/api/parties', async (req, res) => {
  try {
    const { partyName, email, phoneNumber, id, password } = req.body;
    
    console.log('Incoming data:', req.body);

    // Validate required fields
    if (!partyName || !email || !phoneNumber || !id || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for existing party
    const existingParty = await Party.findOne({
      $or: [
        { email },
        { partyId: id }
      ]
    });

    if (existingParty) {
      return res.status(400).json({
        message: 'A party with this email or ID already exists',
      });
    }

    // Create new party with explicit partyId mapping
    const newParty = new Party({
      partyName,
      email,
      phoneNumber,
      partyId: id,  // Explicitly map id to partyId
      password,
    });

    const savedParty = await newParty.save();
    
    res.status(201).json({
      message: 'Party created successfully',
      party: savedParty,
    });
  } catch (error) {
    console.error('Error:', error.message, error.stack);
    res.status(500).json({
      message: 'Error creating party',
      error: error.message,
    });
  }
});

// API Route for Login
app.post('/api/login', async (req, res) => {
  try {
    const { id, password } = req.body;

    // Validate input
    if (!id || !password) {
      return res.status(400).json({ message: 'ID and Password are required' });
    }

    // Find party by partyId
    const party = await Party.findOne({ partyId: id });

    if (!party) {
      return res.status(404).json({ message: 'Party not found' });
    }

    // Validate password
    if (party.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', party });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


















// // server.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./db');
// const partyRoutes = require('./Routes/partyRoutes');
// const subPartyRoutes = require('./Routes/subPartyRoutes');
// const vendorRoutes = require('./Routes/vendorRoutes');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to Database
// connectDB();

// // Routes
// app.use('/api/parties', partyRoutes);
// app.use('/api/parties', subPartyRoutes);
// app.use('/api/vendors', vendorRoutes);

// app.post('/api/login', async (req, res) => {
//   try {
//     const { id, password } = req.body;

//     // Validate input
//     if (!id || !password) {
//       return res.status(400).json({ message: 'ID and Password are required' });
//     }

//     // Find party by partyId
//     const party = await Party.findOne({ partyId: id });

//     if (!party) {
//       return res.status(404).json({ message: 'Party not found' });
//     }

//     // Validate password
//     if (party.password !== password) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful', party });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
