import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry',
    admin: false
  });

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name='firstName'
      onChange={handleChange}
      value={formData.firstName} />
      <input
      type="text"
      name='lastName'
      onChange={handleChange}
      value={formData.lastName} />
      <input
      type="checkbox"
      name='admin'
      onChange={handleChange}
      checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
