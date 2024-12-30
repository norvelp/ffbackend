// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // require('dotenv').config();

// // // // const app = express();

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // MongoDB Connection
// // // // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://0.0.0.0:0/partydb')
// // // //   .then(() => console.log('MongoDB connected'))
// // // //   .catch(err => console.error('MongoDB connection error:', err));


// // // //   const counterSchema = new mongoose.Schema({
// // // //     _id: { type: String, required: true },
// // // //     sequence_value: { type: Number, default: 0 }
// // // //   });
  
// // // //   const Counter = mongoose.model('Counter', counterSchema);

// // // // // Party Schema
// // // // const partySchema = new mongoose.Schema({
// // // //   partyName: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   email: {
// // // //     type: String,
// // // //     required: true,
// // // //     unique: true,
// // // //   },
// // // //   phoneNumber: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   partyId: {
// // // //     type: String,
// // // //     required: true,
// // // //     unique: true,
// // // //   },
// // // //   password: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // // }, {
// // // //   timestamps: true,
// // // // });

// // // // const subPartySchema = new mongoose.Schema({
// // // //   partyName: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   farm: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   phoneNumber: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   address: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   gst: {  // Add this new field
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   parentPartyId: {
// // // //     type: String,
// // // //     required: true,
// // // //     ref: 'Party'
// // // //   }
// // // // }, {
// // // //   timestamps: true,
// // // // });

// // // // const SubParty = mongoose.model('SubParty', subPartySchema);

// // // // // Add this new API route to your server.js
// // // // app.post('/api/parties/add', async (req, res) => {
// // // //   try {
// // // //     const { partyName, farm, phoneNumber, address, gst, parentPartyId } = req.body;
    
// // // //     // Validate required fields
// // // //     if (!partyName || !farm || !phoneNumber || !address || !gst || !parentPartyId) {
// // // //       return res.status(400).json({ 
// // // //         message: 'All fields are required',
// // // //         missingFields: {
// // // //           partyName: !partyName,
// // // //           farm: !farm,
// // // //           phoneNumber: !phoneNumber,
// // // //           address: !address,
// // // //           gst: !gst,
// // // //           parentPartyId: !parentPartyId
// // // //         }
// // // //       });
// // // //     }

// // // //     // Create new sub-party
// // // //     const newSubParty = new SubParty({
// // // //       partyName,
// // // //       farm,
// // // //       phoneNumber,
// // // //       address,
// // // //       gst,
// // // //       parentPartyId,
// // // //     });

// // // //     const savedSubParty = await newSubParty.save();
    
// // // //     res.status(201).json({
// // // //       message: 'Party information added successfully',
// // // //       party: savedSubParty,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('Error adding party information:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error adding party information',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // // Add this route to get parties for a specific parent
// // // // app.get('/api/parties/:parentPartyId', async (req, res) => {
// // // //   try {
// // // //     const { parentPartyId } = req.params;
    
// // // //     const parties = await SubParty.find({ parentPartyId });
    
// // // //     res.status(200).json(parties);
// // // //   } catch (error) {
// // // //     console.error('Error fetching parties:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error fetching parties',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// // // // // Update the partyVendorEntrySchema to include price
// // // // const partyVendorEntrySchema = new mongoose.Schema({
// // // //   orderNumber: {
// // // //     type: String,
// // // //     required: true,
// // // //     unique: true
// // // //   },
// // // //   partyId: {
// // // //     type: String,
// // // //     required: true,
// // // //     ref: 'Party'
// // // //   },
// // // //   subPartyId: {
// // // //     type: String,
// // // //     required: true,
// // // //     ref: 'SubParty'
// // // //   },
// // // //   vendorId: {
// // // //     type: String,
// // // //     required: true,
// // // //     ref: 'Vendor'
// // // //   },
// // // //   date: {
// // // //     type: Date,
// // // //     required: true
// // // //   },
// // // //   name: {
// // // //     type: String,
// // // //     required: true
// // // //   },
// // // //   quantity: {
// // // //     type: Number,
// // // //     required: true
// // // //   },
// // // //   price: {
// // // //     type: Number,
// // // //     required: true
// // // //   },
// // // //   paymentDays: {
// // // //     type: Number,
// // // //     required: true
// // // //   },
// // // //   deliveryDate: {
// // // //     type: Date,
// // // //     required: true
// // // //   },
// // // //   status: {
// // // //     type: String,
// // // //     enum: ['pending', 'paid'],
// // // //     default: 'pending'
// // // //   }
// // // // });
// // // // async function getNextSequenceValue(sequenceName) {
// // // //   const counter = await Counter.findByIdAndUpdate(
// // // //     sequenceName,
// // // //     { $inc: { sequence_value: 1 } },
// // // //     { new: true, upsert: true }
// // // //   );
// // // //   return counter.sequence_value;
// // // // }

// // // // app.patch('/api/party-vendor-entries/:entryId/status', async (req, res) => {
// // // //   try {
// // // //     const { entryId } = req.params;
// // // //     const { status } = req.body;

// // // //     if (!['pending', 'paid'].includes(status)) {
// // // //       return res.status(400).json({ message: 'Invalid status value' });
// // // //     }

// // // //     const updatedEntry = await PartyVendorEntry.findByIdAndUpdate(
// // // //       entryId,
// // // //       { status },
// // // //       { new: true }
// // // //     ).populate('subPartyId', 'partyName')
// // // //      .populate('vendorId', 'vendorName');

// // // //     if (!updatedEntry) {
// // // //       return res.status(404).json({ message: 'Entry not found' });
// // // //     }

// // // //     res.status(200).json({
// // // //       ...updatedEntry.toObject(),
// // // //       subPartyName: updatedEntry.subPartyId.partyName,
// // // //       vendorName: updatedEntry.vendorId.vendorName,
// // // //     });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: 'Error updating entry status', error: error.message });
// // // //   }
// // // // });

// // // // // Add this line to create the model
// // // // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// // // // // Update the POST endpoint to handle price
// // // // app.post('/api/party-vendor-entries', async (req, res) => {
// // // //   try {
// // // //     const { partyId, subPartyId, vendorId, date, name, quantity, price, paymentDays, deliveryDate } = req.body;

// // // //     // Validate required fields
// // // //     if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price || !paymentDays || !deliveryDate) {
// // // //       return res.status(400).json({ 
// // // //         message: 'All fields are required',
// // // //         missingFields: {
// // // //           partyId: !partyId,
// // // //           subPartyId: !subPartyId,
// // // //           vendorId: !vendorId,
// // // //           date: !date,
// // // //           name: !name,
// // // //           quantity: !quantity,
// // // //           price: !price,
// // // //           paymentDays: !paymentDays,
// // // //           deliveryDate: !deliveryDate
// // // //         }
// // // //       });
// // // //     }const sequenceNumber = await getNextSequenceValue('orderNumber');
// // // //     const orderNumber = `ORDER.NO${String(sequenceNumber).padStart(3, '0')}`;

// // // //     // Create new entry with order number
// // // //     const newEntry = new PartyVendorEntry({
// // // //       orderNumber,
// // // //       partyId,
// // // //       subPartyId,
// // // //       vendorId,
// // // //       date,
// // // //       name,
// // // //       quantity,
// // // //       price,
// // // //       paymentDays,
// // // //       deliveryDate,
// // // //       status: 'pending'
// // // //     });

// // // //     const savedEntry = await newEntry.save();
    
// // // //     res.status(201).json({
// // // //       message: 'Entry saved successfully',
// // // //       entry: savedEntry,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('Error saving entry:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error saving entry',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // const vendorSchema = new mongoose.Schema({
// // // //   vendorName: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   farm: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   phoneNumber: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   address: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   gst: {  // This field is already present
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   partyId: {
// // // //     type: String,
// // // //     required: true,
// // // //     ref: 'Party'
// // // //   }
// // // // }, {
// // // //   timestamps: true,
// // // // });

// // // // const Vendor = mongoose.model('Vendor', vendorSchema);

// // // // // API Route to add new vendor
// // // // app.post('/api/vendors', async (req, res) => {
// // // //   try {
// // // //     const { vendorName, farm, phoneNumber, address, partyId } = req.body;
    
// // // //     console.log('Received vendor data:', req.body);

// // // //     // Validate required fields
// // // //     if (!vendorName || !farm || !phoneNumber || !address || !gst || !partyId) {
// // // //       console.log('Missing required fields:', {
// // // //         vendorName: !!vendorName,
// // // //         farm: !!farm,
// // // //         phoneNumber: !!phoneNumber,
// // // //         address: !!address,
// // // //         gst: !!gst, // Add this
// // // //         partyId: !!partyId
// // // //       });
// // // //       return res.status(400).json({ 
// // // //         message: 'All fields are required',
// // // //         missingFields: {
// // // //           vendorName: !vendorName,
// // // //           farm: !farm,
// // // //           phoneNumber: !phoneNumber,
// // // //           address: !address,
// // // //           gst: !gst, // Add this
// // // //           partyId: !partyId
// // // //         }
// // // //       });
// // // //     }

// // // //     // Create new vendor with address
// // // //     const newVendor = new Vendor({
// // // //       vendorName,
// // // //       farm,
// // // //       phoneNumber,
// // // //       address,
// // // //       partyId,
// // // //     });

// // // //     const savedVendor = await newVendor.save();
// // // //     res.status(201).json({
// // // //       message: 'Vendor created successfully',
// // // //       vendor: savedVendor,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('Detailed error:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error creating vendor',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // app.get('/api/party-vendor-entries/:partyId', async (req, res) => {
// // // //   try {
// // // //     const { partyId } = req.params;

// // // //     const entries = await PartyVendorEntry.find({ partyId })
// // // //       .populate('subPartyId', 'partyName')
// // // //       .populate('vendorId', 'vendorName');

// // // //     res.status(200).json(entries.map(entry => ({
// // // //       ...entry.toObject(),
// // // //       subPartyName: entry.subPartyId.partyName,
// // // //       vendorName: entry.vendorId.vendorName,
// // // //     })));
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: 'Error fetching entries', error: error.message });
// // // //   }
// // // // });

// // // // // API Route to get vendors for a specific party
// // // // app.get('/api/vendors/:partyId', async (req, res) => {
// // // //   try {
// // // //     const { partyId } = req.params;

// // // //     // Find all vendors for the specified party
// // // //     const vendors = await Vendor.find({ partyId });
    
// // // //     res.status(200).json(vendors);
// // // //   } catch (error) {
// // // //     console.error('Error fetching vendors:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error fetching vendors',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // const Party = mongoose.model('Party', partySchema);

// // // // // API Route to fetch all parties
// // // // app.get('/api/parties', async (req, res) => {
// // // //   try {
// // // //     const parties = await Party.find({}, {
// // // //       partyName: 1,
// // // //       email: 1,
// // // //       phoneNumber: 1,
// // // //       partyId: 1,
// // // //       password: 1,
// // // //       _id: 0
// // // //     });
// // // //     res.status(200).json(parties);
// // // //   } catch (error) {
// // // //     console.error('Error fetching parties:', error);
// // // //     res.status(500).json({
// // // //       message: 'Error fetching parties',
// // // //       error: error.message
// // // //     });
// // // //   }
// // // // });

// // // // // API Route to add new party
// // // // app.post('/api/parties', async (req, res) => {
// // // //   try {
// // // //     const { partyName, email, phoneNumber, id, password } = req.body;
    
// // // //     console.log('Incoming data:', req.body);

// // // //     // Validate required fields
// // // //     if (!partyName || !email || !phoneNumber || !id || !password) {
// // // //       return res.status(400).json({ message: 'All fields are required' });
// // // //     }

// // // //     // Check for existing party
// // // //     const existingParty = await Party.findOne({
// // // //       $or: [
// // // //         { email },
// // // //         { partyId: id }
// // // //       ]
// // // //     });

// // // //     if (existingParty) {
// // // //       return res.status(400).json({
// // // //         message: 'A party with this email or ID already exists',
// // // //       });
// // // //     }

// // // //     // Create new party with explicit partyId mapping
// // // //     const newParty = new Party({
// // // //       partyName,
// // // //       email,
// // // //       phoneNumber,
// // // //       partyId: id,  // Explicitly map id to partyId
// // // //       password,
// // // //     });

// // // //     const savedParty = await newParty.save();
    
// // // //     res.status(201).json({
// // // //       message: 'Party created successfully',
// // // //       party: savedParty,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('Error:', error.message, error.stack);
// // // //     res.status(500).json({
// // // //       message: 'Error creating party',
// // // //       error: error.message,
// // // //     });
// // // //   }
// // // // });

// // // // // API Route for Login
// // // // app.post('/api/login', async (req, res) => {
// // // //   try {
// // // //     const { id, password } = req.body;

// // // //     // Validate input
// // // //     if (!id || !password) {
// // // //       return res.status(400).json({ message: 'ID and Password are required' });
// // // //     }

// // // //     // Find party by partyId
// // // //     const party = await Party.findOne({ partyId: id });

// // // //     if (!party) {
// // // //       return res.status(404).json({ message: 'Party not found' });
// // // //     }

// // // //     // Validate password
// // // //     if (party.password !== password) {
// // // //       return res.status(401).json({ message: 'Invalid credentials' });
// // // //     }

// // // //     res.status(200).json({ message: 'Login successful', party });
// // // //   } catch (error) {
// // // //     console.error('Error during login:', error);
// // // //     res.status(500).json({ message: 'Error during login', error: error.message });
// // // //   }
// // // // });

// // // // const PORT = process.env.PORT || 3000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`);
// // // // });





// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // require('dotenv').config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://0.0.0.0:0/partydb')
// // //   .then(() => console.log('MongoDB connected'))
// // //   .catch(err => console.error('MongoDB connection error:', err));


// // //   const counterSchema = new mongoose.Schema({
// // //     _id: { type: String, required: true },
// // //     sequence_value: { type: Number, default: 0 }
// // //   });
  
// // //   const Counter = mongoose.model('Counter', counterSchema);

// // // // Party Schema
// // // const partySchema = new mongoose.Schema({
// // //   partyName: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   email: {
// // //     type: String,
// // //     required: true,
// // //     unique: true,
// // //   },
// // //   phoneNumber: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   partyId: {
// // //     type: String,
// // //     required: true,
// // //     unique: true,
// // //   },
// // //   password: {
// // //     type: String,
// // //     required: true,
// // //   },
// // // }, {
// // //   timestamps: true,
// // // });

// // // const subPartySchema = new mongoose.Schema({
// // //   partyName: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   farm: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   phoneNumber: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   address: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   gst: {  // Add this new field
// // //     type: String,
// // //     required: true,
// // //   },
// // //   parentPartyId: {
// // //     type: String,
// // //     required: true,
// // //     ref: 'Party'
// // //   }
// // // }, {
// // //   timestamps: true,
// // // });

// // // const SubParty = mongoose.model('SubParty', subPartySchema);

// // // // Add this new API route to your server.js
// // // app.post('/api/parties/add', async (req, res) => {
// // //   try {
// // //     const { partyName, farm, phoneNumber, address, gst, parentPartyId } = req.body;
    
// // //     // Validate required fields
// // //     if (!partyName || !farm || !phoneNumber || !address || !gst || !parentPartyId) {
// // //       return res.status(400).json({ 
// // //         message: 'All fields are required',
// // //         missingFields: {
// // //           partyName: !partyName,
// // //           farm: !farm,
// // //           phoneNumber: !phoneNumber,
// // //           address: !address,
// // //           gst: !gst,
// // //           parentPartyId: !parentPartyId
// // //         }
// // //       });
// // //     }

// // //     // Create new sub-party
// // //     const newSubParty = new SubParty({
// // //       partyName,
// // //       farm,
// // //       phoneNumber,
// // //       address,
// // //       gst,
// // //       parentPartyId,
// // //     });

// // //     const savedSubParty = await newSubParty.save();
    
// // //     res.status(201).json({
// // //       message: 'Party information added successfully',
// // //       party: savedSubParty,
// // //     });
// // //   } catch (error) {
// // //     console.error('Error adding party information:', error);
// // //     res.status(500).json({
// // //       message: 'Error adding party information',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // // Add this route to get parties for a specific parent
// // // app.get('/api/parties/:parentPartyId', async (req, res) => {
// // //   try {
// // //     const { parentPartyId } = req.params;
    
// // //     const parties = await SubParty.find({ parentPartyId });
    
// // //     res.status(200).json(parties);
// // //   } catch (error) {
// // //     console.error('Error fetching parties:', error);
// // //     res.status(500).json({
// // //       message: 'Error fetching parties',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// // // // Update the partyVendorEntrySchema to include price
// // // const partyVendorEntrySchema = new mongoose.Schema({
// // //   orderNumber: {
// // //     type: String,
// // //     required: true,
// // //     unique: true
// // //   },
// // //   partyId: {
// // //     type: String,
// // //     required: true,
// // //     ref: 'Party'
// // //   },
// // //   subPartyId: {
// // //     type: String,
// // //     required: true,
// // //     ref: 'SubParty'
// // //   },
// // //   vendorId: {
// // //     type: String,
// // //     required: true,
// // //     ref: 'Vendor'
// // //   },
// // //   date: {
// // //     type: Date,
// // //     required: true
// // //   },
// // //   name: {
// // //     type: String,
// // //     required: true
// // //   },
// // //   quantity: {
// // //     type: Number,
// // //     required: true
// // //   },
// // //   price: {
// // //     type: Number,
// // //     required: true
// // //   },
// // //   paymentDays: {
// // //     type: Number,
// // //     required: true
// // //   },
// // //   deliveryDate: {
// // //     type: Date,
// // //     required: true
// // //   },
// // //   status: {
// // //     type: String,
// // //     enum: ['pending', 'paid'],
// // //     default: 'pending'
// // //   }
// // // });
// // // async function getNextSequenceValue(sequenceName) {
// // //   const counter = await Counter.findByIdAndUpdate(
// // //     sequenceName,
// // //     { $inc: { sequence_value: 1 } },
// // //     { new: true, upsert: true }
// // //   );
// // //   return counter.sequence_value;
// // // }

// // // app.patch('/api/party-vendor-entries/:entryId/status', async (req, res) => {
// // //   try {
// // //     const { entryId } = req.params;
// // //     const { status } = req.body;

// // //     if (!['pending', 'paid'].includes(status)) {
// // //       return res.status(400).json({ message: 'Invalid status value' });
// // //     }

// // //     const updatedEntry = await PartyVendorEntry.findByIdAndUpdate(
// // //       entryId,
// // //       { status },
// // //       { new: true }
// // //     ).populate('subPartyId', 'partyName')
// // //      .populate('vendorId', 'vendorName');

// // //     if (!updatedEntry) {
// // //       return res.status(404).json({ message: 'Entry not found' });
// // //     }

// // //     res.status(200).json({
// // //       ...updatedEntry.toObject(),
// // //       subPartyName: updatedEntry.subPartyId.partyName,
// // //       vendorName: updatedEntry.vendorId.vendorName,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error updating entry status', error: error.message });
// // //   }
// // // });

// // // // Add this line to create the model
// // // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// // // // Update the POST endpoint to handle price
// // // app.post('/api/party-vendor-entries', async (req, res) => {
// // //   try {
// // //     const { partyId, subPartyId, vendorId, date, name, quantity, price, paymentDays, deliveryDate } = req.body;

// // //     // Validate required fields
// // //     if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price || !paymentDays || !deliveryDate) {
// // //       return res.status(400).json({ 
// // //         message: 'All fields are required',
// // //         missingFields: {
// // //           partyId: !partyId,
// // //           subPartyId: !subPartyId,
// // //           vendorId: !vendorId,
// // //           date: !date,
// // //           name: !name,
// // //           quantity: !quantity,
// // //           price: !price,
// // //           paymentDays: !paymentDays,
// // //           deliveryDate: !deliveryDate
// // //         }
// // //       });
// // //     }const sequenceNumber = await getNextSequenceValue('orderNumber');
// // //     const orderNumber = `ORDER.NO${String(sequenceNumber).padStart(3, '0')}`;

// // //     // Create new entry with order number
// // //     const newEntry = new PartyVendorEntry({
// // //       orderNumber,
// // //       partyId,
// // //       subPartyId,
// // //       vendorId,
// // //       date,
// // //       name,
// // //       quantity,
// // //       price,
// // //       paymentDays,
// // //       deliveryDate,
// // //       status: 'pending'
// // //     });

// // //     const savedEntry = await newEntry.save();
    
// // //     res.status(201).json({
// // //       message: 'Entry saved successfully',
// // //       entry: savedEntry,
// // //     });
// // //   } catch (error) {
// // //     console.error('Error saving entry:', error);
// // //     res.status(500).json({
// // //       message: 'Error saving entry',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // const vendorSchema = new mongoose.Schema({
// // //   vendorName: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   farm: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   phoneNumber: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   address: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   gst: {  // This field is already present
// // //     type: String,
// // //     required: true,
// // //   },
// // //   partyId: {
// // //     type: String,
// // //     required: true,
// // //     ref: 'Party'
// // //   }
// // // }, {
// // //   timestamps: true,
// // // });

// // // const Vendor = mongoose.model('Vendor', vendorSchema);

// // // // API Route to add new vendor
// // // app.post('/api/vendors', async (req, res) => {
// // //   try {
// // //     const { vendorName, farm, phoneNumber, address, gst, partyId } = req.body;
    
// // //     console.log('Received vendor data:', req.body);

// // //     // Validate required fields
// // //     if (!vendorName || !farm || !phoneNumber || !address || !gst || !partyId) {
// // //       console.log('Missing required fields:', {
// // //         vendorName: !!vendorName,
// // //         farm: !!farm,
// // //         phoneNumber: !!phoneNumber,
// // //         address: !!address,
// // //         gst: !!gst,
// // //         partyId: !!partyId
// // //       });
// // //       return res.status(400).json({ 
// // //         message: 'All fields are required',
// // //         missingFields: {
// // //           vendorName: !vendorName,
// // //           farm: !farm,
// // //           phoneNumber: !phoneNumber,
// // //           address: !address,
// // //           gst: !gst,
// // //           partyId: !partyId
// // //         }
// // //       });
// // //     }

// // //     // Create new vendor with all fields
// // //     const newVendor = new Vendor({
// // //       vendorName,
// // //       farm,
// // //       phoneNumber,
// // //       address,
// // //       gst,
// // //       partyId,
// // //     });

// // //     const savedVendor = await newVendor.save();
// // //     res.status(201).json({
// // //       message: 'Vendor created successfully',
// // //       vendor: savedVendor,
// // //     });
// // //   } catch (error) {
// // //     console.error('Detailed error:', error);
// // //     res.status(500).json({
// // //       message: 'Error creating vendor',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // app.get('/api/party-vendor-entries/:partyId', async (req, res) => {
// // //   try {
// // //     const { partyId } = req.params;

// // //     const entries = await PartyVendorEntry.find({ partyId })
// // //       .populate('subPartyId', 'partyName')
// // //       .populate('vendorId', 'vendorName');

// // //     res.status(200).json(entries.map(entry => ({
// // //       ...entry.toObject(),
// // //       subPartyName: entry.subPartyId.partyName,
// // //       vendorName: entry.vendorId.vendorName,
// // //     })));
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error fetching entries', error: error.message });
// // //   }
// // // });

// // // // API Route to get vendors for a specific party
// // // app.get('/api/vendors/:partyId', async (req, res) => {
// // //   try {
// // //     const { partyId } = req.params;

// // //     // Find all vendors for the specified party
// // //     const vendors = await Vendor.find({ partyId });
    
// // //     res.status(200).json(vendors);
// // //   } catch (error) {
// // //     console.error('Error fetching vendors:', error);
// // //     res.status(500).json({
// // //       message: 'Error fetching vendors',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // const Party = mongoose.model('Party', partySchema);

// // // // API Route to fetch all parties
// // // app.get('/api/parties', async (req, res) => {
// // //   try {
// // //     const parties = await Party.find({}, {
// // //       partyName: 1,
// // //       email: 1,
// // //       phoneNumber: 1,
// // //       partyId: 1,
// // //       password: 1,
// // //       _id: 0
// // //     });
// // //     res.status(200).json(parties);
// // //   } catch (error) {
// // //     console.error('Error fetching parties:', error);
// // //     res.status(500).json({
// // //       message: 'Error fetching parties',
// // //       error: error.message
// // //     });
// // //   }
// // // });

// // // // API Route to add new party
// // // app.post('/api/parties', async (req, res) => {
// // //   try {
// // //     const { partyName, email, phoneNumber, id, password } = req.body;
    
// // //     console.log('Incoming data:', req.body);

// // //     // Validate required fields
// // //     if (!partyName || !email || !phoneNumber || !id || !password) {
// // //       return res.status(400).json({ message: 'All fields are required' });
// // //     }

// // //     // Check for existing party
// // //     const existingParty = await Party.findOne({
// // //       $or: [
// // //         { email },
// // //         { partyId: id }
// // //       ]
// // //     });

// // //     if (existingParty) {
// // //       return res.status(400).json({
// // //         message: 'A party with this email or ID already exists',
// // //       });
// // //     }

// // //     // Create new party with explicit partyId mapping
// // //     const newParty = new Party({
// // //       partyName,
// // //       email,
// // //       phoneNumber,
// // //       partyId: id,  // Explicitly map id to partyId
// // //       password,
// // //     });

// // //     const savedParty = await newParty.save();
    
// // //     res.status(201).json({
// // //       message: 'Party created successfully',
// // //       party: savedParty,
// // //     });
// // //   } catch (error) {
// // //     console.error('Error:', error.message, error.stack);
// // //     res.status(500).json({
// // //       message: 'Error creating party',
// // //       error: error.message,
// // //     });
// // //   }
// // // });

// // // // API Route for Login
// // // app.post('/api/login', async (req, res) => {
// // //   try {
// // //     const { id, password } = req.body;

// // //     // Validate input
// // //     if (!id || !password) {
// // //       return res.status(400).json({ message: 'ID and Password are required' });
// // //     }

// // //     // Find party by partyId
// // //     const party = await Party.findOne({ partyId: id });

// // //     if (!party) {
// // //       return res.status(404).json({ message: 'Party not found' });
// // //     }

// // //     // Validate password
// // //     if (party.password !== password) {
// // //       return res.status(401).json({ message: 'Invalid credentials' });
// // //     }

// // //     res.status(200).json({ message: 'Login successful', party });
// // //   } catch (error) {
// // //     console.error('Error during login:', error);
// // //     res.status(500).json({ message: 'Error during login', error: error.message });
// // //   }
// // // });

// // // const PORT = process.env.PORT || 3000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });




















// // // 30/12/24
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://0.0.0.0:0/partydb')
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.error('MongoDB connection error:', err));


// //   const counterSchema = new mongoose.Schema({
// //     _id: { type: String, required: true },
// //     sequence_value: { type: Number, default: 0 }
// //   });
  
// //   const Counter = mongoose.model('Counter', counterSchema);

// // // Party Schema
// // const partySchema = new mongoose.Schema({
// //   partyName: {
// //     type: String,
// //     required: true,
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //   },
// //   phoneNumber: {
// //     type: String,
// //     required: true,
// //   },
// //   partyId: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //   },
// //   password: {
// //     type: String,
// //     required: true,
// //   },
// // }, {
// //   timestamps: true,
// // });

// // const subPartySchema = new mongoose.Schema({
// //   partyName: {
// //     type: String,
// //     required: true,
// //   },
// //   farm: {
// //     type: String,
// //     required: true,
// //   },
// //   phoneNumber: {
// //     type: String,
// //     required: true,
// //   },
// //   address: {
// //     type: String,
// //     required: true,
// //   },
// //   gst: {  // Add this new field
// //     type: String,
// //     required: true,
// //   },
// //   parentPartyId: {
// //     type: String,
// //     required: true,
// //     ref: 'Party'
// //   }
// // }, {
// //   timestamps: true,
// // });

// // const SubParty = mongoose.model('SubParty', subPartySchema);

// // // Add this new API route to your server.js
// // app.post('/api/parties/add', async (req, res) => {
// //   try {
// //     const { partyName, farm, phoneNumber, address, gst, parentPartyId } = req.body;
    
// //     // Validate required fields
// //     if (!partyName || !farm || !phoneNumber || !address || !gst || !parentPartyId) {
// //       return res.status(400).json({ 
// //         message: 'All fields are required',
// //         missingFields: {
// //           partyName: !partyName,
// //           farm: !farm,
// //           phoneNumber: !phoneNumber,
// //           address: !address,
// //           gst: !gst,
// //           parentPartyId: !parentPartyId
// //         }
// //       });
// //     }

// //     // Create new sub-party
// //     const newSubParty = new SubParty({
// //       partyName,
// //       farm,
// //       phoneNumber,
// //       address,
// //       gst,
// //       parentPartyId,
// //     });

// //     const savedSubParty = await newSubParty.save();
    
// //     res.status(201).json({
// //       message: 'Party information added successfully',
// //       party: savedSubParty,
// //     });
// //   } catch (error) {
// //     console.error('Error adding party information:', error);
// //     res.status(500).json({
// //       message: 'Error adding party information',
// //       error: error.message
// //     });
// //   }
// // });

// // // Add this route to get parties for a specific parent
// // app.get('/api/parties/:parentPartyId', async (req, res) => {
// //   try {
// //     const { parentPartyId } = req.params;
    
// //     const parties = await SubParty.find({ parentPartyId });
    
// //     res.status(200).json(parties);
// //   } catch (error) {
// //     console.error('Error fetching parties:', error);
// //     res.status(500).json({
// //       message: 'Error fetching parties',
// //       error: error.message
// //     });
// //   }
// // });


// // // Update sub-party
// // app.put('/api/parties/:id', async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { partyName, farm, phoneNumber, address, gst } = req.body;

// //     // Validate required fields
// //     if (!partyName || !farm || !phoneNumber || !address || !gst) {
// //       return res.status(400).json({ 
// //         message: 'All fields are required',
// //         missingFields: {
// //           partyName: !partyName,
// //           farm: !farm,
// //           phoneNumber: !phoneNumber,
// //           address: !address,
// //           gst: !gst
// //         }
// //       });
// //     }

// //     const updatedParty = await SubParty.findByIdAndUpdate(
// //       id,
// //       {
// //         partyName,
// //         farm,
// //         phoneNumber,
// //         address,
// //         gst
// //       },
// //       { new: true }
// //     );

// //     if (!updatedParty) {
// //       return res.status(404).json({ message: 'Party not found' });
// //     }

// //     res.status(200).json({
// //       message: 'Party updated successfully',
// //       party: updatedParty
// //     });
// //   } catch (error) {
// //     console.error('Error updating party:', error);
// //     res.status(500).json({
// //       message: 'Error updating party',
// //       error: error.message
// //     });
// //   }
// // });

// // // Delete sub-party
// // app.delete('/api/parties/:id', async (req, res) => {
// //   try {
// //     const { id } = req.params;
    
// //     const deletedParty = await SubParty.findByIdAndDelete(id);
    
// //     if (!deletedParty) {
// //       return res.status(404).json({ message: 'Party not found' });
// //     }

// //     res.status(200).json({
// //       message: 'Party deleted successfully',
// //       party: deletedParty
// //     });
// //   } catch (error) {
// //     console.error('Error deleting party:', error);
// //     res.status(500).json({
// //       message: 'Error deleting party',
// //       error: error.message
// //     });
// //   }
// // });

// // // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// // // Update the partyVendorEntrySchema to include price
// // const partyVendorEntrySchema = new mongoose.Schema({
// //   orderNumber: {
// //     type: String,
// //     required: true,
// //     unique: true
// //   },
// //   partyId: {
// //     type: String,
// //     required: true,
// //     ref: 'Party'
// //   },
// //   subPartyId: {
// //     type: String,
// //     required: true,
// //     ref: 'SubParty'
// //   },
// //   vendorId: {
// //     type: String,
// //     required: true,
// //     ref: 'Vendor'
// //   },
// //   date: {
// //     type: Date,
// //     required: true
// //   },
// //   name: {
// //     type: String,
// //     required: true
// //   },
// //   quantity: {
// //     type: Number,
// //     required: true
// //   },
// //   price: {
// //     type: Number,
// //     required: true
// //   },
// //   paymentDays: {
// //     type: Number,
// //     required: true
// //   },
// //   deliveryDate: {
// //     type: Date,
// //     required: true
// //   },
// //   status: {
// //     type: String,
// //     enum: ['pending', 'paid'],
// //     default: 'pending'
// //   }
// // });
// // async function getNextSequenceValue(sequenceName) {
// //   const counter = await Counter.findByIdAndUpdate(
// //     sequenceName,
// //     { $inc: { sequence_value: 1 } },
// //     { new: true, upsert: true }
// //   );
// //   return counter.sequence_value;
// // }

// // app.patch('/api/party-vendor-entries/:entryId/status', async (req, res) => {
// //   try {
// //     const { entryId } = req.params;
// //     const { status } = req.body;

// //     if (!['pending', 'paid'].includes(status)) {
// //       return res.status(400).json({ message: 'Invalid status value' });
// //     }

// //     const updatedEntry = await PartyVendorEntry.findByIdAndUpdate(
// //       entryId,
// //       { status },
// //       { new: true }
// //     ).populate('subPartyId', 'partyName')
// //      .populate('vendorId', 'vendorName');

// //     if (!updatedEntry) {
// //       return res.status(404).json({ message: 'Entry not found' });
// //     }

// //     res.status(200).json({
// //       ...updatedEntry.toObject(),
// //       subPartyName: updatedEntry.subPartyId.partyName,
// //       vendorName: updatedEntry.vendorId.vendorName,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error updating entry status', error: error.message });
// //   }
// // });

// // // Add this line to create the model
// // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// // // Update the POST endpoint to handle price
// // app.post('/api/party-vendor-entries', async (req, res) => {
// //   try {
// //     const { partyId, subPartyId, vendorId, date, name, quantity, price, paymentDays, deliveryDate } = req.body;

// //     // Validate required fields
// //     if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price || !paymentDays || !deliveryDate) {
// //       return res.status(400).json({ 
// //         message: 'All fields are required',
// //         missingFields: {
// //           partyId: !partyId,
// //           subPartyId: !subPartyId,
// //           vendorId: !vendorId,
// //           date: !date,
// //           name: !name,
// //           quantity: !quantity,
// //           price: !price,
// //           paymentDays: !paymentDays,
// //           deliveryDate: !deliveryDate
// //         }
// //       });
// //     }const sequenceNumber = await getNextSequenceValue('orderNumber');
// //     const orderNumber = `ORDER.NO${String(sequenceNumber).padStart(3, '0')}`;

// //     // Create new entry with order number
// //     const newEntry = new PartyVendorEntry({
// //       orderNumber,
// //       partyId,
// //       subPartyId,
// //       vendorId,
// //       date,
// //       name,
// //       quantity,
// //       price,
// //       paymentDays,
// //       deliveryDate,
// //       status: 'pending'
// //     });

// //     const savedEntry = await newEntry.save();
    
// //     res.status(201).json({
// //       message: 'Entry saved successfully',
// //       entry: savedEntry,
// //     });
// //   } catch (error) {
// //     console.error('Error saving entry:', error);
// //     res.status(500).json({
// //       message: 'Error saving entry',
// //       error: error.message
// //     });
// //   }
// // });

// // const vendorSchema = new mongoose.Schema({
// //   vendorName: {
// //     type: String,
// //     required: true,
// //   },
// //   farm: {
// //     type: String,
// //     required: true,
// //   },
// //   phoneNumber: {
// //     type: String,
// //     required: true,
// //   },
// //   address: {
// //     type: String,
// //     required: true,
// //   },
// //   gst: {  // This field is already present
// //     type: String,
// //     required: true,
// //   },
// //   partyId: {
// //     type: String,
// //     required: true,
// //     ref: 'Party'
// //   }
// // }, {
// //   timestamps: true,
// // });

// // const Vendor = mongoose.model('Vendor', vendorSchema);

// // // API Route to add new vendor
// // app.post('/api/vendors', async (req, res) => {
// //   try {
// //     const { vendorName, farm, phoneNumber, address, gst, partyId } = req.body;
    
// //     console.log('Received vendor data:', req.body);

// //     // Validate required fields
// //     if (!vendorName || !farm || !phoneNumber || !address || !gst || !partyId) {
// //       console.log('Missing required fields:', {
// //         vendorName: !!vendorName,
// //         farm: !!farm,
// //         phoneNumber: !!phoneNumber,
// //         address: !!address,
// //         gst: !!gst,
// //         partyId: !!partyId
// //       });
// //       return res.status(400).json({ 
// //         message: 'All fields are required',
// //         missingFields: {
// //           vendorName: !vendorName,
// //           farm: !farm,
// //           phoneNumber: !phoneNumber,
// //           address: !address,
// //           gst: !gst,
// //           partyId: !partyId
// //         }
// //       });
// //     }

// //     // Create new vendor with all fields
// //     const newVendor = new Vendor({
// //       vendorName,
// //       farm,
// //       phoneNumber,
// //       address,
// //       gst,
// //       partyId,
// //     });

// //     const savedVendor = await newVendor.save();
// //     res.status(201).json({
// //       message: 'Vendor created successfully',
// //       vendor: savedVendor,
// //     });
// //   } catch (error) {
// //     console.error('Detailed error:', error);
// //     res.status(500).json({
// //       message: 'Error creating vendor',
// //       error: error.message
// //     });
// //   }
// // });

// // app.get('/api/party-vendor-entries/:partyId', async (req, res) => {
// //   try {
// //     const { partyId } = req.params;

// //     const entries = await PartyVendorEntry.find({ partyId })
// //       .populate('subPartyId', 'partyName')
// //       .populate('vendorId', 'vendorName');

// //     res.status(200).json(entries.map(entry => ({
// //       ...entry.toObject(),
// //       subPartyName: entry.subPartyId.partyName,
// //       vendorName: entry.vendorId.vendorName,
// //     })));
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching entries', error: error.message });
// //   }
// // });

// // // API Route to get vendors for a specific party
// // app.get('/api/vendors/:partyId', async (req, res) => {
// //   try {
// //     const { partyId } = req.params;

// //     // Find all vendors for the specified party
// //     const vendors = await Vendor.find({ partyId });
    
// //     res.status(200).json(vendors);
// //   } catch (error) {
// //     console.error('Error fetching vendors:', error);
// //     res.status(500).json({
// //       message: 'Error fetching vendors',
// //       error: error.message
// //     });
// //   }
// // });

// // const Party = mongoose.model('Party', partySchema);

// // // API Route to fetch all parties
// // app.get('/api/parties', async (req, res) => {
// //   try {
// //     const parties = await Party.find({}, {
// //       partyName: 1,
// //       email: 1,
// //       phoneNumber: 1,
// //       partyId: 1,
// //       password: 1,
// //       _id: 0
// //     });
// //     res.status(200).json(parties);
// //   } catch (error) {
// //     console.error('Error fetching parties:', error);
// //     res.status(500).json({
// //       message: 'Error fetching parties',
// //       error: error.message
// //     });
// //   }
// // });

// // // API Route to add new party
// // app.post('/api/parties', async (req, res) => {
// //   try {
// //     const { partyName, email, phoneNumber, id, password } = req.body;
    
// //     console.log('Incoming data:', req.body);

// //     // Validate required fields
// //     if (!partyName || !email || !phoneNumber || !id || !password) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }

// //     // Check for existing party
// //     const existingParty = await Party.findOne({
// //       $or: [
// //         { email },
// //         { partyId: id }
// //       ]
// //     });

// //     if (existingParty) {
// //       return res.status(400).json({
// //         message: 'A party with this email or ID already exists',
// //       });
// //     }

// //     // Create new party with explicit partyId mapping
// //     const newParty = new Party({
// //       partyName,
// //       email,
// //       phoneNumber,
// //       partyId: id,  // Explicitly map id to partyId
// //       password,
// //     });

// //     const savedParty = await newParty.save();
    
// //     res.status(201).json({
// //       message: 'Party created successfully',
// //       party: savedParty,
// //     });
// //   } catch (error) {
// //     console.error('Error:', error.message, error.stack);
// //     res.status(500).json({
// //       message: 'Error creating party',
// //       error: error.message,
// //     });
// //   }
// // });

// // // API Route for Login
// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { id, password } = req.body;

// //     // Validate input
// //     if (!id || !password) {
// //       return res.status(400).json({ message: 'ID and Password are required' });
// //     }

// //     // Find party by partyId
// //     const party = await Party.findOne({ partyId: id });

// //     if (!party) {
// //       return res.status(404).json({ message: 'Party not found' });
// //     }

// //     // Validate password
// //     if (party.password !== password) {
// //       return res.status(401).json({ message: 'Invalid credentials' });
// //     }

// //     res.status(200).json({ message: 'Login successful', party });
// //   } catch (error) {
// //     console.error('Error during login:', error);
// //     res.status(500).json({ message: 'Error during login', error: error.message });
// //   }
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://0.0.0.0:0/partydb')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


//   const counterSchema = new mongoose.Schema({
//     _id: { type: String, required: true },
//     sequence_value: { type: Number, default: 0 }
//   });
  
//   const Counter = mongoose.model('Counter', counterSchema);

// // Party Schema
// const partySchema = new mongoose.Schema({
//   partyName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//   },
//   partyId: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// const subPartySchema = new mongoose.Schema({
//   partyName: {
//     type: String,
//     required: true,
//   },
//   farm: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   gst: {  // Add this new field
//     type: String,
//     required: true,
//   },
//   parentPartyId: {
//     type: String,
//     required: true,
//     ref: 'Party'
//   }
// }, {
//   timestamps: true,
// });

// const SubParty = mongoose.model('SubParty', subPartySchema);

// // Add this new API route to your server.js
// app.post('/api/parties/add', async (req, res) => {
//   try {
//     const { partyName, farm, phoneNumber, address, gst, parentPartyId } = req.body;
    
//     // Validate required fields
//     if (!partyName || !farm || !phoneNumber || !address || !gst || !parentPartyId) {
//       return res.status(400).json({ 
//         message: 'All fields are required',
//         missingFields: {
//           partyName: !partyName,
//           farm: !farm,
//           phoneNumber: !phoneNumber,
//           address: !address,
//           gst: !gst,
//           parentPartyId: !parentPartyId
//         }
//       });
//     }

//     // Create new sub-party
//     const newSubParty = new SubParty({
//       partyName,
//       farm,
//       phoneNumber,
//       address,
//       gst,
//       parentPartyId,
//     });

//     const savedSubParty = await newSubParty.save();
    
//     res.status(201).json({
//       message: 'Party information added successfully',
//       party: savedSubParty,
//     });
//   } catch (error) {
//     console.error('Error adding party information:', error);
//     res.status(500).json({
//       message: 'Error adding party information',
//       error: error.message
//     });
//   }
// });

// // Add this route to get parties for a specific parent
// app.get('/api/parties/:parentPartyId', async (req, res) => {
//   try {
//     const { parentPartyId } = req.params;
    
//     const parties = await SubParty.find({ parentPartyId });
    
//     res.status(200).json(parties);
//   } catch (error) {
//     console.error('Error fetching parties:', error);
//     res.status(500).json({
//       message: 'Error fetching parties',
//       error: error.message
//     });
//   }
// });


// // Update sub-party
// app.put('/api/parties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { partyName, farm, phoneNumber, address, gst } = req.body;

//     // Validate required fields
//     if (!partyName || !farm || !phoneNumber || !address || !gst) {
//       return res.status(400).json({ 
//         message: 'All fields are required',
//         missingFields: {
//           partyName: !partyName,
//           farm: !farm,
//           phoneNumber: !phoneNumber,
//           address: !address,
//           gst: !gst
//         }
//       });
//     }

//     const updatedParty = await SubParty.findByIdAndUpdate(
//       id,
//       {
//         partyName,
//         farm,
//         phoneNumber,
//         address,
//         gst
//       },
//       { new: true }
//     );

//     if (!updatedParty) {
//       return res.status(404).json({ message: 'Party not found' });
//     }

//     res.status(200).json({
//       message: 'Party updated successfully',
//       party: updatedParty
//     });
//   } catch (error) {
//     console.error('Error updating party:', error);
//     res.status(500).json({
//       message: 'Error updating party',
//       error: error.message
//     });
//   }
// });

// // Delete sub-party
// app.delete('/api/parties/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     const deletedParty = await SubParty.findByIdAndDelete(id);
    
//     if (!deletedParty) {
//       return res.status(404).json({ message: 'Party not found' });
//     }

//     res.status(200).json({
//       message: 'Party deleted successfully',
//       party: deletedParty
//     });
//   } catch (error) {
//     console.error('Error deleting party:', error);
//     res.status(500).json({
//       message: 'Error deleting party',
//       error: error.message
//     });
//   }
// });

// // const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// // Update the partyVendorEntrySchema to include price
// const partyVendorEntrySchema = new mongoose.Schema({
//   orderNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   partyId: {
//     type: String,
//     required: true,
//     ref: 'Party'
//   },
//   subPartyId: {
//     type: String,
//     required: true,
//     ref: 'SubParty'
//   },
//   vendorId: {
//     type: String,
//     required: true,
//     ref: 'Vendor'
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   quantity: {
//     type: Number,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   paymentDays: {
//     type: Number,
//     required: true
//   },
//   deliveryDate: {
//     type: Date,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'paid'],
//     default: 'pending'
//   }
// });
// async function getNextSequenceValue(sequenceName) {
//   const counter = await Counter.findByIdAndUpdate(
//     sequenceName,
//     { $inc: { sequence_value: 1 } },
//     { new: true, upsert: true }
//   );
//   return counter.sequence_value;
// }

// app.patch('/api/party-vendor-entries/:entryId/status', async (req, res) => {
//   try {
//     const { entryId } = req.params;
//     const { status } = req.body;

//     if (!['pending', 'paid'].includes(status)) {
//       return res.status(400).json({ message: 'Invalid status value' });
//     }

//     const updatedEntry = await PartyVendorEntry.findByIdAndUpdate(
//       entryId,
//       { status },
//       { new: true }
//     ).populate('subPartyId', 'partyName')
//      .populate('vendorId', 'vendorName');

//     if (!updatedEntry) {
//       return res.status(404).json({ message: 'Entry not found' });
//     }

//     res.status(200).json({
//       ...updatedEntry.toObject(),
//       subPartyName: updatedEntry.subPartyId.partyName,
//       vendorName: updatedEntry.vendorId.vendorName,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating entry status', error: error.message });
//   }
// });

// // Add this line to create the model
// const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// // Update the POST endpoint to handle price
// app.post('/api/party-vendor-entries', async (req, res) => {
//   try {
//     const { partyId, subPartyId, vendorId, date, name, quantity, price, paymentDays, deliveryDate } = req.body;

//     // Validate required fields
//     if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price || !paymentDays || !deliveryDate) {
//       return res.status(400).json({ 
//         message: 'All fields are required',
//         missingFields: {
//           partyId: !partyId,
//           subPartyId: !subPartyId,
//           vendorId: !vendorId,
//           date: !date,
//           name: !name,
//           quantity: !quantity,
//           price: !price,
//           paymentDays: !paymentDays,
//           deliveryDate: !deliveryDate
//         }
//       });
//     }const sequenceNumber = await getNextSequenceValue('orderNumber');
//     const orderNumber = `ORDER.NO${String(sequenceNumber).padStart(3, '0')}`;

//     // Create new entry with order number
//     const newEntry = new PartyVendorEntry({
//       orderNumber,
//       partyId,
//       subPartyId,
//       vendorId,
//       date,
//       name,
//       quantity,
//       price,
//       paymentDays,
//       deliveryDate,
//       status: 'pending'
//     });

//     const savedEntry = await newEntry.save();
    
//     res.status(201).json({
//       message: 'Entry saved successfully',
//       entry: savedEntry,
//     });
//   } catch (error) {
//     console.error('Error saving entry:', error);
//     res.status(500).json({
//       message: 'Error saving entry',
//       error: error.message
//     });
//   }
// });

// const vendorSchema = new mongoose.Schema({
//   vendorName: {
//     type: String,
//     required: true,
//   },
//   farm: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   gst: {  // This field is already present
//     type: String,
//     required: true,
//   },
//   partyId: {
//     type: String,
//     required: true,
//     ref: 'Party'
//   }
// }, {
//   timestamps: true,
// });

// const Vendor = mongoose.model('Vendor', vendorSchema);

// // API Route to add new vendor
// app.post('/api/vendors', async (req, res) => {
//   try {
//     const { vendorName, farm, phoneNumber, address, gst, partyId } = req.body;
    
//     console.log('Received vendor data:', req.body);

//     // Validate required fields
//     if (!vendorName || !farm || !phoneNumber || !address || !gst || !partyId) {
//       console.log('Missing required fields:', {
//         vendorName: !!vendorName,
//         farm: !!farm,
//         phoneNumber: !!phoneNumber,
//         address: !!address,
//         gst: !!gst,
//         partyId: !!partyId
//       });
//       return res.status(400).json({ 
//         message: 'All fields are required',
//         missingFields: {
//           vendorName: !vendorName,
//           farm: !farm,
//           phoneNumber: !phoneNumber,
//           address: !address,
//           gst: !gst,
//           partyId: !partyId
//         }
//       });
//     }

//     // Create new vendor with all fields
//     const newVendor = new Vendor({
//       vendorName,
//       farm,
//       phoneNumber,
//       address,
//       gst,
//       partyId,
//     });

//     const savedVendor = await newVendor.save();
//     res.status(201).json({
//       message: 'Vendor created successfully',
//       vendor: savedVendor,
//     });
//   } catch (error) {
//     console.error('Detailed error:', error);
//     res.status(500).json({
//       message: 'Error creating vendor',
//       error: error.message
//     });
//   }
// });

// app.get('/api/party-vendor-entries/:partyId', async (req, res) => {
//   try {
//     const { partyId } = req.params;

//     const entries = await PartyVendorEntry.find({ partyId })
//       .populate('subPartyId', 'partyName')
//       .populate('vendorId', 'vendorName');

//     res.status(200).json(entries.map(entry => ({
//       ...entry.toObject(),
//       subPartyName: entry.subPartyId.partyName,
//       vendorName: entry.vendorId.vendorName,
//     })));
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching entries', error: error.message });
//   }
// });

// // API Route to get vendors for a specific party
// app.get('/api/vendors/:partyId', async (req, res) => {
//   try {
//     const { partyId } = req.params;

//     // Find all vendors for the specified party
//     const vendors = await Vendor.find({ partyId });
    
//     res.status(200).json(vendors);
//   } catch (error) {
//     console.error('Error fetching vendors:', error);
//     res.status(500).json({
//       message: 'Error fetching vendors',
//       error: error.message
//     });
//   }
// });

// const Party = mongoose.model('Party', partySchema);


// // Update vendor by ID
// app.put('/api/vendors/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { vendorName, farm, phoneNumber, address, gst } = req.body;

//     // Validate required fields
//     if (!vendorName || !farm || !phoneNumber || !address || !gst) {
//       return res.status(400).json({ 
//         message: 'All fields are required',
//         missingFields: {
//           vendorName: !vendorName,
//           farm: !farm,
//           phoneNumber: !phoneNumber,
//           address: !address,
//           gst: !gst
//         }
//       });
//     }

//     // Find vendor and update
//     const updatedVendor = await Vendor.findByIdAndUpdate(
//       id,
//       {
//         vendorName,
//         farm,
//         phoneNumber,
//         address,
//         gst
//       },
//       { new: true } // Return the updated document
//     );

//     if (!updatedVendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }

//     res.status(200).json({
//       message: 'Vendor updated successfully',
//       vendor: updatedVendor
//     });
//   } catch (error) {
//     console.error('Error updating vendor:', error);
//     res.status(500).json({
//       message: 'Error updating vendor',
//       error: error.message
//     });
//   }
// });


// // Delete vendor by ID
// app.delete('/api/vendors/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find vendor and delete
//     const deletedVendor = await Vendor.findByIdAndDelete(id);

//     if (!deletedVendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }

//     res.status(200).json({
//       message: 'Vendor deleted successfully',
//       vendor: deletedVendor
//     });
//   } catch (error) {
//     console.error('Error deleting vendor:', error);
//     res.status(500).json({
//       message: 'Error deleting vendor',
//       error: error.message
//     });
//   }
// });

// // Get single vendor by ID
// app.get('/api/vendors/detail/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const vendor = await Vendor.findById(id);
    
//     if (!vendor) {
//       return res.status(404).json({ message: 'Vendor not found' });
//     }

//     res.status(200).json(vendor);
//   } catch (error) {
//     console.error('Error fetching vendor:', error);
//     res.status(500).json({
//       message: 'Error fetching vendor',
//       error: error.message
//     });
//   }
// });

// // API Route to fetch all parties
// app.get('/api/parties', async (req, res) => {
//   try {
//     const parties = await Party.find({}, {
//       partyName: 1,
//       email: 1,
//       phoneNumber: 1,
//       partyId: 1,
//       password: 1,
//       _id: 0
//     });
//     res.status(200).json(parties);
//   } catch (error) {
//     console.error('Error fetching parties:', error);
//     res.status(500).json({
//       message: 'Error fetching parties',
//       error: error.message
//     });
//   }
// });

// // API Route to add new party
// app.post('/api/parties', async (req, res) => {
//   try {
//     const { partyName, email, phoneNumber, id, password } = req.body;
    
//     console.log('Incoming data:', req.body);

//     // Validate required fields
//     if (!partyName || !email || !phoneNumber || !id || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check for existing party
//     const existingParty = await Party.findOne({
//       $or: [
//         { email },
//         { partyId: id }
//       ]
//     });

//     if (existingParty) {
//       return res.status(400).json({
//         message: 'A party with this email or ID already exists',
//       });
//     }

//     // Create new party with explicit partyId mapping
//     const newParty = new Party({
//       partyName,
//       email,
//       phoneNumber,
//       partyId: id,  // Explicitly map id to partyId
//       password,
//     });

//     const savedParty = await newParty.save();
    
//     res.status(201).json({
//       message: 'Party created successfully',
//       party: savedParty,
//     });
//   } catch (error) {
//     console.error('Error:', error.message, error.stack);
//     res.status(500).json({
//       message: 'Error creating party',
//       error: error.message,
//     });
//   }
// });

// // API Route for Login
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



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://norvelpatel239:LoOEZWCOr1sRTyrk@cluster0.nvjmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0://0.0.0.0:0/partydb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


  const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
  });
  
  const Counter = mongoose.model('Counter', counterSchema);

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
  address: {
    type: String,
    required: true,
  },
  gst: {  // Add this new field
    type: String,
    required: true,
  },
  parentPartyId: {
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
    const { partyName, farm, phoneNumber, address, gst, parentPartyId } = req.body;
    
    // Validate required fields
    if (!partyName || !farm || !phoneNumber || !address || !gst || !parentPartyId) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          partyName: !partyName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          address: !address,
          gst: !gst,
          parentPartyId: !parentPartyId
        }
      });
    }

    // Create new sub-party
    const newSubParty = new SubParty({
      partyName,
      farm,
      phoneNumber,
      address,
      gst,
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


// Update sub-party
app.put('/api/parties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { partyName, farm, phoneNumber, address, gst } = req.body;

    // Validate required fields
    if (!partyName || !farm || !phoneNumber || !address || !gst) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          partyName: !partyName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          address: !address,
          gst: !gst
        }
      });
    }

    const updatedParty = await SubParty.findByIdAndUpdate(
      id,
      {
        partyName,
        farm,
        phoneNumber,
        address,
        gst
      },
      { new: true }
    );

    if (!updatedParty) {
      return res.status(404).json({ message: 'Party not found' });
    }

    res.status(200).json({
      message: 'Party updated successfully',
      party: updatedParty
    });
  } catch (error) {
    console.error('Error updating party:', error);
    res.status(500).json({
      message: 'Error updating party',
      error: error.message
    });
  }
});

// Delete sub-party
app.delete('/api/parties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedParty = await SubParty.findByIdAndDelete(id);
    
    if (!deletedParty) {
      return res.status(404).json({ message: 'Party not found' });
    }

    res.status(200).json({
      message: 'Party deleted successfully',
      party: deletedParty
    });
  } catch (error) {
    console.error('Error deleting party:', error);
    res.status(500).json({
      message: 'Error deleting party',
      error: error.message
    });
  }
});

// const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);

// Update the partyVendorEntrySchema to include price
const partyVendorEntrySchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
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
  },
  paymentDays: {
    type: Number,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'paid'],
    default: 'pending'
  }
});
async function getNextSequenceValue(sequenceName) {
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  return counter.sequence_value;
}

app.patch('/api/party-vendor-entries/:entryId/status', async (req, res) => {
  try {
    const { entryId } = req.params;
    const { status } = req.body;

    if (!['pending', 'paid'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updatedEntry = await PartyVendorEntry.findByIdAndUpdate(
      entryId,
      { status },
      { new: true }
    ).populate('subPartyId', 'partyName')
     .populate('vendorId', 'vendorName');

    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.status(200).json({
      ...updatedEntry.toObject(),
      subPartyName: updatedEntry.subPartyId.partyName,
      vendorName: updatedEntry.vendorId.vendorName,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating entry status', error: error.message });
  }
});

// Add this line to create the model
const PartyVendorEntry = mongoose.model('PartyVendorEntry', partyVendorEntrySchema);
// Update the POST endpoint to handle price
app.post('/api/party-vendor-entries', async (req, res) => {
  try {
    const { partyId, subPartyId, vendorId, date, name, quantity, price, paymentDays, deliveryDate } = req.body;

    // Validate required fields
    if (!partyId || !subPartyId || !vendorId || !date || !name || !quantity || !price || !paymentDays || !deliveryDate) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          partyId: !partyId,
          subPartyId: !subPartyId,
          vendorId: !vendorId,
          date: !date,
          name: !name,
          quantity: !quantity,
          price: !price,
          paymentDays: !paymentDays,
          deliveryDate: !deliveryDate
        }
      });
    }const sequenceNumber = await getNextSequenceValue('orderNumber');
    const orderNumber = `ORDER.NO${String(sequenceNumber).padStart(3, '0')}`;

    // Create new entry with order number
    const newEntry = new PartyVendorEntry({
      orderNumber,
      partyId,
      subPartyId,
      vendorId,
      date,
      name,
      quantity,
      price,
      paymentDays,
      deliveryDate,
      status: 'pending'
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
  address: {
    type: String,
    required: true,
  },
  gst: {  // This field is already present
    type: String,
    required: true,
  },
  partyId: {
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
    const { vendorName, farm, phoneNumber, address, gst, partyId } = req.body;
    
    console.log('Received vendor data:', req.body);

    // Validate required fields
    if (!vendorName || !farm || !phoneNumber || !address || !gst || !partyId) {
      console.log('Missing required fields:', {
        vendorName: !!vendorName,
        farm: !!farm,
        phoneNumber: !!phoneNumber,
        address: !!address,
        gst: !!gst,
        partyId: !!partyId
      });
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          vendorName: !vendorName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          address: !address,
          gst: !gst,
          partyId: !partyId
        }
      });
    }

    // Create new vendor with all fields
    const newVendor = new Vendor({
      vendorName,
      farm,
      phoneNumber,
      address,
      gst,
      partyId,
    });

    const savedVendor = await newVendor.save();
    res.status(201).json({
      message: 'Vendor created successfully',
      vendor: savedVendor,
    });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({
      message: 'Error creating vendor',
      error: error.message
    });
  }
});

app.get('/api/party-vendor-entries/:partyId', async (req, res) => {
  try {
    const { partyId } = req.params;
    
    // Validate partyId
    if (!partyId) {
      return res.status(400).json({ 
        message: 'Party ID is required',
        error: 'MISSING_PARTY_ID'
      });
    }

    // First check if any entries exist
    const entriesExist = await PartyVendorEntry.exists({ partyId });
    if (!entriesExist) {
      return res.status(200).json([]); // Return empty array instead of error
    }

    const entries = await PartyVendorEntry.find({ partyId })
      .populate('subPartyId', 'partyName')
      .populate('vendorId', 'vendorName')
      .lean(); // Use lean() for better performance

    // Handle missing references gracefully
    const processedEntries = entries.map(entry => ({
      ...entry,
      subPartyName: entry.subPartyId?.partyName ?? 'Unknown Party',
      vendorName: entry.vendorId?.vendorName ?? 'Unknown Vendor',
    }));

    res.status(200).json(processedEntries);
  } catch (error) {
    console.error('Detailed error in party-vendor-entries:', error);
    res.status(500).json({ 
      message: 'Error fetching entries', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Backend is working' });
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


// Update vendor by ID
app.put('/api/vendors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { vendorName, farm, phoneNumber, address, gst } = req.body;

    // Validate required fields
    if (!vendorName || !farm || !phoneNumber || !address || !gst) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          vendorName: !vendorName,
          farm: !farm,
          phoneNumber: !phoneNumber,
          address: !address,
          gst: !gst
        }
      });
    }

    // Find vendor and update
    const updatedVendor = await Vendor.findByIdAndUpdate(
      id,
      {
        vendorName,
        farm,
        phoneNumber,
        address,
        gst
      },
      { new: true } // Return the updated document
    );

    if (!updatedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.status(200).json({
      message: 'Vendor updated successfully',
      vendor: updatedVendor
    });
  } catch (error) {
    console.error('Error updating vendor:', error);
    res.status(500).json({
      message: 'Error updating vendor',
      error: error.message
    });
  }
});


// Delete vendor by ID
app.delete('/api/vendors/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find vendor and delete
    const deletedVendor = await Vendor.findByIdAndDelete(id);

    if (!deletedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.status(200).json({
      message: 'Vendor deleted successfully',
      vendor: deletedVendor
    });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({
      message: 'Error deleting vendor',
      error: error.message
    });
  }
});

// Get single vendor by ID
app.get('/api/vendors/detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findById(id);
    
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.status(200).json(vendor);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({
      message: 'Error fetching vendor',
      error: error.message
    });
  }
});

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
