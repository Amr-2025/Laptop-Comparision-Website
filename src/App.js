import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LaptopList from './components/LaptopList';
import ComparisonTable from './components/ComparisonTable';
//import './styles.css'; // Import styles
import AuthForm from './components/AuthForm';
import styles from "./App.module.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [laptops, setLaptops] = useState([]);
  const [selectedLaptops, setSelectedLaptops] = useState([]);

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get('https://laptops-8a693-default-rtdb.asia-southeast1.firebasedatabase.app/laptops.json');
      setLaptops(response.data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
    }
  };

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
    setSelectedLaptops([]);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleSelectLaptop = (laptop) => {
    if (!selectedLaptops.find((selected) => selected.id === laptop.id)) {
      setSelectedLaptops([...selectedLaptops, laptop]);
    }
  };

  const handleRemoveLaptop = (laptop) => {
    setSelectedLaptops(selectedLaptops.filter((l) => l.id !== laptop.id));
  };

  return (
    <div className="appContainer">
        
      <br></br><br></br><br></br><br></br>
      <center>
        <h1 className={styles.mainHead}>
          Laptop comparing Tool
        </h1>
      </center>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      {user ? (
        <>
          <br></br><br></br><br></br><br></br>
          <button className={styles.logoutbtn} onClick={handleSignOut}>Logout</button>
          <LaptopList laptops={laptops} onSelectLaptop={handleSelectLaptop} />
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <ComparisonTable
            selectedLaptops={selectedLaptops}
            onRemoveLaptop={handleRemoveLaptop}
          />
        </>
      ) : (
        <AuthForm onSignIn={handleSignIn} onSignUp={handleSignUp}/>
      )}
    </div>
  );
};

export default App;