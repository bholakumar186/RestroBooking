const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let bookings = []; // In-memory storage for demo purposes

// Create Booking API
app.post('/api/bookings', (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  if (!date || !time || !guests || !name || !contact) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const newBooking = { id: Date.now(), date, time, guests, name, contact };
  bookings.push(newBooking);
  res.status(201).json({ message: 'Booking created successfully.', booking: newBooking });
});

// Get Booking API
app.get('/api/bookings', (req, res) => {
  const { date } = req.query;
  const filteredBookings = bookings.filter((booking) => booking.date === date);
  res.json(filteredBookings);
});

// Delete Booking API
app.delete('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  bookings = bookings.filter((booking) => booking.id !== parseInt(id));
  res.json({ message: 'Booking deleted successfully.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:5000`);
});
