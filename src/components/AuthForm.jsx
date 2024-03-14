import React, { useState } from 'react';
import styles from './AuthForm.module.css'; // Import CSS module
import Button from '@mui/material/Button';
const AuthForm = ({ onSignIn, onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error,setError] = useState('');

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Example: authenticate user with username and password
    const userData = { id: 1, name: username }; // Example user data
   
    if (username.toLowerCase() === 'user' && password === '12345') {
        onSignIn(userData);
      } else {
        setAttempts(prevAttempts => prevAttempts + 1);
        if (attempts < 3) {
          alert(`Try again, you have already attempted: ${attempts +1 }`);
        } else {
          // Disable the login button after 3 attempts
          document.getElementById('loginbutton').disabled = true;
        }
      }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if(!username || !password) {
        setError('Please fill out the fields');
        return;
    }
    setError('');
    onSignUp(username );
    //onSignIn(useData);
  };

  return (
    <div className={styles.formContainer}>
      <h2>LOGIN HERE</h2>
      <br></br>
      
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
           
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          minLength={5} 
          maxLength={10} 
          required 
          placeholder="Enter your name" 
        />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          minLength={5} 
          maxLength={10} 
          required 
          placeholder="Enter password" 
        />
        </div>
        <div>
          <br></br><br></br>
        <div className={styles.buttonContainer}>
          <button onClick={handleSignInSubmit} className={styles.signInButton}>
            Login 
          </button>
          
          
          <button onClick={handleSignUpSubmit} className={styles.signUpButton}>
            Sign Up
          </button>
          </div>
          <div>
          { error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;