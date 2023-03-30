import React from 'react'
import './ChatList.css'
import ChatListItems from './ChatListItems'
import { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import plus from './plus.png'

const ChatList = (props) => {

    //popup useState.
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true); }
    const handleClose = () => { setShow(false); }

    const createNewChat = (event) => {
        event.preventDefault();
        let newContact = document.getElementById('newContact').value;
        const found = props.updateData.find(({ username }) => username === newContact);
        if (found === undefined) {
            alert("Username does not exist!");
            return;
        }
        if (props.chats.find(({ username }) => found.username === username) !== undefined) {
            alert("Already exist !");
            handleClose();
            return;
        }
        props.chats.push({
            username: found.username,
            nickname: found.nickname,
            pic: found.pic,
            messegeHistory: []
        })
        handleClose();
    }

    return (
        <div className='chat-list'>
            <div className='chatlist-header'>
                <button className='popup' variant="" onClick={handleShow}>
                    <img src={plus} alt="Add" />
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new contact</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={createNewChat}>
                        <Modal.Body>
                            <FloatingLabel label="Contact's Identifier">
                                <Form.Control id='newContact' placeholder="Contact's Identifier" />
                            </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={createNewChat}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <ChatListItems setActiveChatUsername={props.setActiveChatUsername} chats={props.chats} />
            </div>
        </div>
    )
}

export default ChatList