import React, { useState } from 'react';
import '../App.css';

// Here we import a helper function that will check if the email is valid
import { checkTextArea, validateEmail } from '../utils/helpers';

function EmailForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [textArea, setTextArea] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setTextArea(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    if (!checkTextArea(textArea)) {
      setErrorMessage(
        `Please enter text for your email.`
      );
      return;
    }
    alert(`Thank you for your time!`);

    setName('');
    setTextArea('');
    setEmail('');
  };

  return (
    <div className='formCard'>
      <p>Please contact me for any work or suggestions!</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={textArea}
          name="password"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default EmailForm;
