
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const fetchBookings = async () => {
    if (formData.date) {
      const res = await axios.get('http://localhost:5000/api/bookings', { params: { date: formData.date } });
      setBookings(res.data);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [formData.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking created successfully.');
      fetchBookings();
    } catch (error) {
      alert('Error creating booking.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Restaurant Table Booking</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} required placeholder="Guests" />
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder="Contact" />
        <button type="submit">Book Table</button>
      </form>

      <h2>Available Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              {booking.date} {booking.time} - {booking.name} ({booking.guests} guests)
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings available for the selected date.</p>
      )}
    </div>
  );
}
