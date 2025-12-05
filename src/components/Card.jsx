import React, { useState } from 'react';
import './Card.css';

function Card({ frontContent, backContent }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`card-container ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="card">
                <div className="front">{frontContent}</div>
                <div className="back">{backContent}</div>
            </div>
        </div>
    );
}

export default Card;
