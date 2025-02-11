import { useRef, useState } from 'react';
import './App.css';
import pleaseGif from '../public/please.gif';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [buttonPosition, setButtonPosition] = useState({ top: 200, left: 200 });
  const lastMoved = useRef(Date.now());

  const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
    const buttonElement = document.getElementById('no-button');
    if (buttonElement) {
      const buttonRect = buttonElement.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distance = Math.sqrt(
        Math.pow(mouseX - buttonRect.x, 2) + Math.pow(mouseY - buttonRect.y, 2)
      );

      if (distance < 100 && Date.now() - lastMoved.current > 100) {
        // Generate random position for the button
        const newTop = Math.random() * (window.innerHeight - buttonRect.height);
        const newLeft = Math.random() * (window.innerWidth - buttonRect.width);
        setButtonPosition({ top: newTop, left: newLeft });
        lastMoved.current = Date.now();
      }
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/yay');
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <img className="gif" src={pleaseGif} alt="Please GIF" />
      <h1>Will you be my Valentine? 💖</h1>
      <div className="button-container">
        <button className="button-yes" onClick={handleButtonClick}>
          Yes
        </button>
        <button
          id="no-button"
          className="button-no"
          style={{ top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px`, position: 'absolute' }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default HomePage;
