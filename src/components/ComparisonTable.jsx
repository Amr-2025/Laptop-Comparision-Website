import React from 'react';
import styles from './ComparisonTable.module.css'; // Import CSS module

const ComparisonTable = ({ selectedLaptops, onRemoveLaptop }) => {
  return (
    <center>
    <div>
      <div className={styles.container2}><h2 className={styles.compHead}>Comparison Table</h2></div>
      <table className={styles.comparisonTable}> {/* Apply comparisonTable class */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Processor</th>
            <th>Storage</th>
            <th>RAM</th>
            {/* Add more specs here */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedLaptops.map((laptop) => (
            <tr key={laptop.id}>
              <td>{laptop.name}</td>
              <td>{laptop.price}</td>
              <td>{laptop.processor}</td>
              <td>{laptop.storage}</td>
              <td>{laptop.RAM}</td>
              {/* Add more specs here */}
              <td>
                <button onClick={() => onRemoveLaptop(laptop)} className={styles.removeButton}>Remove</button> {/* Apply removeButton class */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default ComparisonTable;