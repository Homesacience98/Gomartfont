import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'; // You may need to install this library

function UserInfo() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Decode the token to access the payload
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);


      // Access the username from the payload
      const userUsername = decodedToken.username;

      // Set the username in the state
      setUsername(userUsername);
    }
  }, []);

  const handlePostMessage = () => {
    const token = localStorage.getItem('authToken');
    const decodedToken = jwt_decode(token);

    // Send a POST request to the Django API endpoint
    fetch('https://itssaj.pythonanywhere.com/api/post_message/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${decodedToken}`, 
      },
      body: JSON.stringify({ message_text: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.message || data.error);
        // Clear the message input
        setMessage('');
      });
  };

  return (
    <div>
      <p>Welcome, {username}!</p>
      <form>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="button" onClick={handlePostMessage}>
          Post Message
        </button>
      </form>
      <p>{response}</p>
      {/* Other user information or actions can be added here */}
    </div>
  );
}

export default UserInfo;
