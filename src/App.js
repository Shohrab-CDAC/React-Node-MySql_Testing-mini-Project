import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    // Send data to Node backend
    fetch('http://localhost:5000/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputValue }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };


  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Send to Database</button>
    </div>
  );
};

export default App;
