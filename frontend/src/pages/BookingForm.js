import React, { useState } from 'react';
import SlotList from '../components/SlotList.js';

const BookingForm = ({ onDateChange, availableSlots }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'date') {
      onDateChange(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" onChange={handleChange} required />
      <SlotList availableSlots={availableSlots} />
      <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="Number of guests" />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
      <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
