import {React, useEffect, useCallback, useRef} from 'react';
import '../stylesheets/Notfound.css';
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function Notfound() {
  useEffect(() => {
    fire();
  })
  
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 1 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  return (
    <div className="notfound-outer outer">
    <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    <div className="middle">
    <div className="main-heading">
            <h1>Page not found</h1>
            <p className="italic">"Like your dad"</p>
        </div>
    </div>
        
    </div>
  )
}

export default Notfound