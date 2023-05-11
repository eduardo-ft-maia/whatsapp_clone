import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
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
                        <p>Ave Maria gratia plena, dominus tecum, benedicta tu intri mulieribus, et benedictus fructus ventres tui Jesus, Sancta Maria Mater Dei, ora pro nobis pecatoribus, nunc et in nobis mortis nostrae, Amem</p>
                    </div>

                </div>
             </div>
        </div>
    );
}