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
          <div className="card-front flex justify-center absolute items-center ">
            Students
          </div>
          <div className="card-back">
          
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front flex justify-center absolute items-center bg-black">
            Men
          </div>
          <div className="card-back">
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front flex justify-center absolute items-center">
        Women
          </div>
          <div className="card-back">
            <button className='buy-button'>Join Us</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front flex justify-center absolute items-center">
            Couples

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