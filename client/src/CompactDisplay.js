
import React, { useState } from 'react';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

const CompactDisplay = ({ results }) => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleToggleDetails = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };


    return (
        <div>
            {results.map((item) => (
                <div key={item.id} style={styles.card}>
                    <div style={styles.infoContainer}>
                        <div style={styles.infoBlock}>
                            <p style={styles.titles}>Full Name:</p>
                            <p style={styles.info}>{item.name || 'N/A'}</p>
                        </div>
                        <div style={styles.infoBlock}>
                            <p style={styles.titles}>Phones:</p>
                            <p style={styles.info}>{item.phones || 'N/A'}</p>
                        </div>
                        <div style={styles.infoBlock}>
                            <p style={styles.titles}>Emails:</p>
                            <p style={styles.info}>{item.emails || 'N/A'}</p>
                        </div>
                        <div style={styles.infoBlock}>
                            <p style={styles.titles}>Address:</p>
                            <p style={styles.info}>{item.address || 'N/A'}</p>
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <button onClick={() => handleToggleDetails(item.id)} style={styles.button}>
                            {expandedItem === item.id ? 'Hide Details' : 'More Information'}
                        </button>
                    </div>
                    {expandedItem === item.id && (
                        <div style={styles.details}>
                            <p>ID: {item.id}</p>
                            <p>Aliases: {item.aliases || 'N/A'}</p>
                            <p>Birthdate: {item.birth_date || 'N/A'}</p>
                            <p>Country: {item.countries || 'N/A'}</p>
                            <p>Schema: {item.schema || 'N/A'}</p>
                            <p>Identifiers: {item.identifiers || 'N/A'}</p>
                            <p>Sanctions: {item.sanctions || 'N/A'}</p>
                            <p>Dataset: {item.dataset || 'N/A'}</p> 
                            <p>First Seen: {item.first_seen || 'N/A'}</p>
                            <p>Last Seen: {item.last_seen || 'N/A'}</p>
                            <p>Last Change: {item.last_change || 'N/A'}</p>
                        </div>
                    )}
                </div>
            ))}<div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal!</p>
      </Modal>
    </div>
        </div>
    );
};
}

const styles = {
    card: {
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#354F65',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    details: {
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    infoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', 
        gap: '10px', // Space between grid items
        marginBottom: '10px', // Space below the info container
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column', // Stack label and value vertically
    },
    info: {
        margin: '5px 0', // Add some margin for spacing
        color: 'black', // Change text color for visibility
        border: '1px solid #ccc',
        backgroundColor: '#ccc',
        borderRadius: '5px',
        padding: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

        
    },
    titles: {
        margin: '5px 0', // Add some margin for spacing
        color: 'white', // Change text color for visibility
    },
    buttonContainer: {
        textAlign: 'center', // Center the button within this container
        marginTop: '10px', // Optional: Add some margin above the button
    },
    button: {
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        textDecoration: 'underline', // Underline the button text
        cursor: 'pointer',
        fontSize: '16px',
        display: 'inline-block', // Make it behave like a block element for centering
    },
};

export default CompactDisplay;