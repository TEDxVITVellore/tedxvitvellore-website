import {React, useState, useCallback, useRef} from 'react';
import '../stylesheets/Footer.css';
import ReactCanvasConfetti from "react-canvas-confetti";
import SnackBar from 'my-react-snackbar';

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

function Footer() {
    const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.9 },
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
    const [counter, setCounter] = useState(0);
    var [open, setOpen] = useState(false);
    async function handleClick(){
        // Use updater function when new state is derived from old
        setCounter(counter+1);
        if(counter === 5){
            fire();
            setOpen(true);
            setCounter(0);
            await sleep(2000);
            setOpen(false);
        }
      };
  return (
    <div className="footer-outer">
    <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        <div className="App outer">
        <div className="ending">
            <h2 className="italic">“Train yourself to let go of everything you fear to lose.”</h2>
        </div>
        <div className='footer-flex'>
            <div onClick={handleClick}>
                <img width="200px" src="/assets/tedxlogo.png" alt="Samsung logo"></img>
            </div>
            <div className="contents">
            <div className="content">
                <p className='small-heading'>Learn about TEDx</p>
                <div className="liner">
                    <a rel="noreferrer" href="https://www.ted.com/" target="_blank" className="anchor">TED</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" className="anchor">TEDx Program</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use" target="_blank" className="anchor">Terms of Use</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" className="anchor">Privacy Policy</a>
                </div>
            </div>
            <div className="content">
                <p className='small-heading'>TEDxVITVellore</p>
                <div className="liner">
                    <a rel="noreferrer" href="https://www.linkedin.com/company/tedx-vitvellore/" target="_blank" className="anchor">LinkedIn</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://www.instagram.com/tedxvitvellore/" target="_blank" className="anchor">Instagram</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://twitter.com/TEDxVITVellore" target="_blank" className="anchor">Twitter</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://medium.com/tedxvitvellore" target="_blank" className="anchor">Medium</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="https://www.facebook.com/Tedxvitvellore/" target="_blank" className="anchor">Facebook</a>
                </div>
            </div>
            <div className="content">
                <p className='small-heading'>Contact Us</p>
                <div className="liner">
                    <a rel="noreferrer" href="tel:+91-9179045326" className="anchor">+91-9179045326</a>
                    <p className="separator">|</p>
                    <a rel="noreferrer" href="mailto:tedxvitvellore@gmail.com" target="_blank" className="anchor">tedxvitvellore@gmail.com</a>
                </div>
            </div>
            <p className="small">This independent TEDx event is operated under license from TED.</p>
        </div>
        </div>
        </div>
        <SnackBar
        className="snack"
        open={open}
        message="You found an easter 🚀 but life still sucks"
        position='bottom-center'
        type="success"
        timeout='3000'
      />
        
    </div>
  )
}

export default Footer