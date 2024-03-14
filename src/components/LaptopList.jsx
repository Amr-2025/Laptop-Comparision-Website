import React from 'react';
import styles from './LaptopList.module.css'; // Import CSS module


const LaptopList = ({ laptops, onSelectLaptop }) => {

  return (
    <center>
    <div className={styles.container}>
      <div className={styles.container2}><h2 className={styles.listHead}>LAPTOPS</h2></div>
      <ul className={styles.laptopContainer}> {/* Apply laptopList class */}
        {laptops.map((laptop) => (
          <li key={laptop.id} className={styles.laptopBox}> {/* Apply laptopItem class */}
            <h4>{laptop.name}</h4>
            <img src={laptop.img} alt={"Laptop "+laptop.img} width="130" height="100"></img><br></br><br></br>
            {/*<p>Price: {laptop.price}</p> <br></br>
            <p>Processor: {laptop.processor}</p><br></br>
            <p>Storage: {laptop.storage}</p><br></br>
            <p>Ram: {laptop.RAM}</p>*/}
            <button onClick={() => onSelectLaptop(laptop)} className={styles.addButton}>Add to Compare</button> {/* Apply addButton class */}
            <br></br>
          </li>
        ))}
      </ul>
    </div>
    </center>
  );
};

export default LaptopList;