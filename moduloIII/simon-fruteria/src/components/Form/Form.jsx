import React, { useState } from "react";
import "./Form.css"; 

const Form = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent", values);
  };

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Contacto</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={values.fullName}
            onChange={handleValues}
            name="fullName"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Correo</label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={values.email}
            onChange={handleValues}
            name="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="text">En qué te ayudamos?</label>
          <input
            type="text"
            placeholder="Escribe aquí"
            value={values.text}
            onChange={handleValues}
            name="text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Número de contacto</label>
          <input
            type="tel"
            placeholder="Ingresa tu número de contacto"
            value={values.phone}
            onChange={handleValues}
            name="phone"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
