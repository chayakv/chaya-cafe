import React, { useState } from "react";
import axios from "axios";

export default function MyProduct() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", formData);
      alert(res.data.message);
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required style={{ padding: "8px" }}/>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required style={{ padding: "8px" }}/>
        <input type="text" name="phone" placeholder="Enter your phone" value={formData.phone} onChange={handleChange} required style={{ padding: "8px" }}/>
        <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required style={{ padding: "8px" }}/>
        <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required style={{ padding: "8px" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
}
