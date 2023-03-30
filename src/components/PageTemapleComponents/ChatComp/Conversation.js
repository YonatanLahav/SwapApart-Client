import React, { useState } from 'react'
import './Conversation.css'
import "./chatContent.css";
import { Button, OverlayTrigger, Popover, Modal, Stack, Form } from 'react-bootstrap'
import useRecorder from './useRecorder'

let inMessage = null;
let inPicture = null;
let inVideo = null;
let inRecord = null;


const Conversation = (props) => {
    var today = new Date();
    var currentTime = addZero(today.getHours()) + ":" + addZero(today.getMinutes());

    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    let Messeges = props.chats;
    let chatWith = props.chats.nickname;

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const scrollToBottom = () => {
        const element = document.getElementById("conversation_display");
        element.scrollTop = element.scrollHeight;
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);


    const [showAttach, setShowAttach] = useState(false);
    const [showAttachRecord, setShowAttachRecord] = useState(false);
    const [showAttachImg, setShowAttachImg] = useState(false);
    const [showAttachVideo, setShowAttachVideo] = useState(false);

    const SendMessage = (event) => {
        event.preventDefault();
        inMessage = document.getElementById("newMessage").value;
        document.getElementById("newMessage").value = '';
        // let newMessage = [...messegesHistory];
        Messeges.messegeHistory.push({
            type: 'text',
            from: '',
            messege: inMessage,
            time: currentTime
        })
        props.setRender({});

    }
    const uploadImage = (event) => {
        event.preventDefault();
        inPicture = URL.createObjectURL(selectedImage);
        Messeges.messegeHistory.push({
            type: 'photo',
            from: '',
            messege: inPicture,
            time: currentTime
        })
        props.setRender({});
        setShowAttachImg(false);
    }
    const uploadVideo = (event) => {
        event.preventDefault();
        inVideo = URL.createObjectURL(selectedVideo);
        Messeges.messegeHistory.push({
            type: 'video',
            from: '',
            messege: inVideo,
            time: currentTime
        })
        setShowAttachVideo(false);
        props.setRender({});
    }
    const uploadRecord = (event) => {
        event.preventDefault();
        inRecord = audioURL;
        Messeges.messegeHistory.push({
            type: 'audio',
            from: '',
            messege: inRecord,
            time: currentTime
        })
        setShowAttachRecord(false);
        props.setRender({});
    }


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Attach:</Popover.Header>
            <Popover.Body>
                <Button variant='' >
                    <img
                        src="recordIcon.png"
                        alt="#"
                        height='30'
                        onClick={() => { setShowAttachRecord(true); setShowAttach(false); }} />
                </Button>
                <Button
                    variant=''>
                    <img
                        src="imageIcon.png"
                        alt="#"
                        height='30'
                        onClick={() => { setShowAttachImg(true); setShowAttach(false); }} />
                </Button>
                <Button
                    variant=''>
                    <img
                        src="videoIcon.png"
                        alt=""
                        height='30'
                        onClick={() => { setShowAttachVideo(true); setShowAttach(false); }} />
                </Button>
            </Popover.Body>
        </Popover>
    );
    return (

        <div className='conversation'>
            <div className="conv_display" id="conversation_display">

                {Messeges.messegeHistory.map(({ type, from, messege, time }) => {
                    let sender = (from !== '') ? chatWith : "Me";
                    if (sender !== 'Me') {
                        if (type === 'photo') {
                            return (
                                /*other picture*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <img src={messege} className="img" alt='#' />
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type === 'video') {
                            return (
                                /*other video*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <video width="360" height="250" controls>
                                                <source src={messege} type="video/mp4"></source>
                                                <div className='timeShow'>{time}</div>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type === 'audio') {
                            return (
                                /*my audio*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <audio src={messege} controls> </audio>
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                /*other text*/
                                <div className="chat__item__content">
                                    <div className="chat__item-friend">
                                        <div>
                                            {sender + ": "}
                                            <br />
                                            {messege}
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                    }
                    else {
                        if (type === 'photo') {
                            return (
                                /*my picture*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <img src={messege} className="img" alt='#' />
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type === 'video') {
                            return (
                                /*my video*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <video width="360" height="250" controls>
                                                <source src={messege} type="video/mp4"></source>
                                                <div className='timeShow'>{time}</div>
                                            </video>

                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (type === 'audio') {
                            return (
                                /*my audio*/
                                <div className="chat__item__me">
                                    <div className="chat__item">
                                        <div>
                                            {sender + ':'}
                                            <br />
                                            <audio src={messege} controls> </audio>
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                /*my text*/
                                <div>
                                    <div className="chat__item__me">
                                        <div className="chat__item">
                                            {sender + ": "}
                                            <br />
                                            {messege}
                                            <div className='timeShow'>{time}</div>
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                    }
                })
                }
            </div>
            <div ref={scrollToBottom}></div>


            {/* Modal (Popup screen) for attaching record. */}
            < Modal
                show={showAttachRecord}
                onHide={() => setShowAttachRecord(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Attach record:</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Stack direction="horizontal" className='col-md-5 mx-auto' gap={3}>
                        <Button variant="secondary" onClick={startRecording} disabled={isRecording}>Start</Button>
                        <Button variant="secondary" onClick={stopRecording} disabled={!isRecording}>stop</Button>
                        <div className="vr" />
                        <Button variant="secondary" onClick={uploadRecord}>Send</Button>
                    </Stack>
                </Modal.Body>
            </Modal>

            {/* Modal (Popup screen) for attaching img. */}
            <Modal
                show={showAttachImg}
                onHide={() => setShowAttachImg(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Attach image:</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group className="mb-3">
                        <Form.Control type="file" accept="image/*" onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={uploadImage}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal (Popup screen) for attaching video. */}
            <>
                <Modal
                    show={showAttachVideo}
                    onHide={() => setShowAttachVideo(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Attach video:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form.Group className="mb-3">
                            <Form.Control type="file" accept="video/*" onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedVideo(event.target.files[0]);
                            }} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={uploadVideo}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className='conv_footer'>
                    <form onSubmit={SendMessage}>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" id="newMessage" placeholder="Enter your messege..." />
                            <OverlayTrigger show={showAttach} placement='top-start' overlay={popover}>
                                <Button variant='' onClick={() => setShowAttach(true)}>
                                    <img className='attachIcon' src="attachIcon.png" alt="#" height='30' />
                                </Button>
                            </OverlayTrigger>
                            <Button variant="secondary" onClick={SendMessage}>Send</Button>
                            <div className="vr" />
                            
                        </Stack>
                    </form>
                </div>
            </>
        </div >

    )
}

export default Conversation