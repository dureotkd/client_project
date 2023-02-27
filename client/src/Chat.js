import React, { useState, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Game from './game/Game';
import './App.css';

const Chat = ({ socket, username, room, messages }) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const sendMessage = async (e) => {
        e.preventDefault();
        if (currentMessage.trim() !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ':' +
                    new Date(Date.now()).getMinutes()
            };

            await socket.emit('send_message', messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage('');
        }
    }

    useEffect(() => {
        socket.on('receive_message', (message) => {
            setMessageList((list => [...list, message]));
        });
    }, [socket]);

    return (
        <div className='container'>
            <h1>Matching Number Smart Game</h1>
            <h2>Game Rule</h2>
            <div className='game'>
                <Game socket={socket} username={username} room={room}/>
            </div>
            <div className='chat'>
                <div className='chat-header'>
                    <p>Live Chat</p>
                    <ScrollToBottom className='messages'>
                        <div>
                            {messages.map((msg) => {
                                return (
                                <h2>{msg.text}</h2>
                                )
                            })}
                        </div>
                    </ScrollToBottom>
                </div>
                <div className='chat-body'>
                    <ScrollToBottom className='scroll-to-bottom'>
                        {messageList.map((messageContent) => {
                            return (
                                <div className='message' id={username === messageContent.author ? "me" : "other"}>
                                    <div>
                                        <div className='message-content'>
                                            <p>{messageContent.message}</p>
                                        </div>
                                        <div className='message-time'>
                                            <p id="time">{messageContent.time}</p>
                                            <p id="author">{messageContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </ScrollToBottom>
                </div>
                <div className='chat-footer'>
                    <input type='text' placeholder='Type a message'
                        value={currentMessage}
                        onChange={(e) => {
                            setCurrentMessage(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage(e);
                            }
                        }}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Chat