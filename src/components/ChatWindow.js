import React, { useState, useEffect, useRef } from "react";
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import './ChatWindow.css';

import MessageItem from "./MessageItem";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';


export default ({user, data}) => {

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState([
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},
        {author:1234, body:'blablablanllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsldnllbla blaglrl slgsld'},
        {author: 40, body: 'BALEKFLaleçfkl, aoejrpaeo. Lorem ispaifeoj, aeokroaeçaokfç póoieorjeovl,m lakoppaowpp. !!!'},
        {author: 1234, body: 'Hello World'},
        {author:40, body: 'Understood'},

    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list]);

    const handleEmojiClick = (emojiObject, e) => {
        console.log(e);
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleKeyUp = (e) => {
        if(e.keyCode == 13) {
            handleSendClick();
        }
    }
    const handleSendClick = () => {
        if(text !== '') {
            sendMessage();
        }
    }

    const newMessage = (text) => {
        return (
            {author: 1234, body: text}
        )
    }
    
    const scrollToBottom = () => {
        const element = document.getElementById('chatWindow-body');
        element.scrollBy(0, 1000);
    }
    

    const sendMessage = async () => {
        list.push(newMessage(text));
        await setText('');

        setEmojiOpen(false);

        var objDiv = document.getElementById("chatWindow-body");
        objDiv.scrollTop = objDiv.scrollHeight;
        
        

        // document.getElementById('chatWindow-body').scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    return (
        <div className="chatWindow" id="chatWindow">
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

            <div ref={body} className="chatWindow-body" id="chatWindow-body">

                {list.map((item, key)=> (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div 
                className="chatWindow-emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                    width={{width: 'auto'}}
                    
                    
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
                        onKeyUp={handleKeyUp}
                    />

                </div>
                <div className="chatWindow-pos">

                    {text === '' &&
                        <div className="chatWindow-btn">
                            <MicIcon style={{color: '#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn" author={1234}
                        >
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}