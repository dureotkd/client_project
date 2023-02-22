import './App.css';
import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  }
  return (
    <div className="App">
      {!showChat ? (
        <>
          <h1>hello team!</h1>
          <h2>Rules</h2>
          <div>
            <ol>
              <li>Enter your name and find your room ID</li>
              <li>Click the button to join a room</li>
            </ol>
          </div>
          <input type="text"
            placeholder='your name'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input type="text"
            placeholder='room ID'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                joinRoom();
              }
            }}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button type="button"
            onClick={joinRoom}>
            Join a Room
          </button>
        </>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );

}

export default App;
