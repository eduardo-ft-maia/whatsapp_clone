import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';


export default () => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');

    const handleEmojiClick = (e, emojiObject) => {
        console.log(emojiObject);
        setText( text + emojiObject.srcElement );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            
        }
    }
    const handleSendClick = () => {
        
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">

                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://vectorified.com/images/avatar-icon-png-18.jpg" alt="" />
                    <div className="chatWindow-name">Viriato Ulisses</div>
                </div>

                <div className="chatWindow-headerbuttons">

                        <div className="chatWindow-btn">
                            <SearchIcon style={{color: '#919191'}} />
                        </div>
                        <div className="chatWindow-btn">
                            <AttachFileIcon style={{color: '#919191'}} />
                        </div>
                        <div className="chatWindow-btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>

                </div>

            </div>

            <div className="chatWindow-body">

            </div>

            <div 
                className="chatWindow-emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                    //width={{width: 'auto'}}
                    
                    
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">

                    <div 
                        className="chatWindow-btn"
                        onClick={handleCloseEmoji}  
                        style={{width: emojiOpen ? 40 : 0}}  
                    >
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    
                    <div 
                        className="chatWindow-btn"
                        onClick={handleOpenEmoji} 
                    >
                        
                        <InsertEmoticonIcon style={{color: emojiOpen ?  '#009618' : '#919191'}} />
                    </div>

                </div>
                <div className="chatWindow-inputarea">

                    <input 
                        className="chatWindow-input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />

                </div>
                <div className="chatWindow-pos">

                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow-btn">
                            <MicIcon style={{color: '#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}