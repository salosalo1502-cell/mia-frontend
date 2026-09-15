
import style from './contaqt.module.css';
import Navbar from "../navbar/navbar";
import { useState } from 'react';

const Contaqt = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const [errors, setErrors] = useState({});


  const handleSendEmail = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (company.trim().length < 2) {
      newErrors.company = 'Please enter your company or organization.';
    }

    if (message.trim().length < 10) {
      newErrors.message = 'Message must contain at least 10 characters.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccess('');
      return;
    }


    const emailData = {
      name,
      email,
      company,
      message
    };

    

    try {

      const response = await fetch('https://mia-backend-vcmg.onrender.com/send_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok && result.success) {

        setSuccess('Message sent successfully!');

        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        setErrors({});

      } else {

        setSuccess('Message could not be sent.');

      }

    } catch (error) {

      console.error(error);
      setSuccess('Something went wrong. Please try again.');

    }
  };


  return (

    <div>

      <Navbar />

      <section className={style.sendMeil}>

        <div className={style.formHeader}>
          <span>01</span>
          <h2>START A CONVERSATION</h2>
        </div>


        <form className={style.sendForm} onSubmit={handleSendEmail}>


          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && (
            <p className={style.errorMessage}>{errors.name}</p>
          )}


          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <p className={style.errorMessage}>{errors.email}</p>
          )}


          <input
            type="text"
            placeholder="Company/Organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          {errors.company && (
            <p className={style.errorMessage}>{errors.company}</p>
          )}


          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {errors.message && (
            <p className={style.errorMessage}>{errors.message}</p>
          )}


          <button
            className={style.sendBottom}
            type="submit"
          >
            send meil
          </button>


          {success && (
            <p className={style.successMessage}>
              {success}
            </p>
          )}

        </form>

      </section>

    </div>

  );
};

export default Contaqt;