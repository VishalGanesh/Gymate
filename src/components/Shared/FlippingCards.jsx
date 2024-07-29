import React, { useState } from 'react';
// import '@/assets/css/Flipping.css'
import '@/assets/css/Fliping.css'

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
          </div>
          <div className="card-back">
          
            <button className='buy-button'>Join Us</button>
          </div>
          <div>
            Students
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
          </div>
          <div className="card-back">
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlippingCard