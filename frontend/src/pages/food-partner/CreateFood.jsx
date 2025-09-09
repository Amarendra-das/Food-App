import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/create-food.css';

function CreateFood() {
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/food/create', form, { withCredentials: true });
      setMessage('Food created!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to create food');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-food-form">
      <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Food Name" />
      <input name="description" type="text" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Create Food</button>
      {message && <div>{message}</div>}
    </form>
  );
}

export default CreateFood;
