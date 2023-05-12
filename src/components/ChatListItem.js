import React from 'react';
import './ChatListItem.css';
import './ChatWindow.js'

export default ({onClick, active, data, list}) => {
    return (
        <div 
            className={`chatListItem ${active ? 'active' : ''}`} 
            onClick={onClick}    
        >
             <img className='chatListItem-avatar' src={data.image} alt='' />
             <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className='chatListItem-name'>{data.title}</div>
                    <div className='chatListItem-date'>19:00</div>
                </div>
                <div className='chatListItem-line'>
                    <div className='chatListItem-lastMsg'>
                        <p>Click to open the chat</p>
                    </div>

                </div>
             </div>
        </div>
    );
}