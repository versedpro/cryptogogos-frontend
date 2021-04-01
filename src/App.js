import { useEffect, useState } from 'react'
import './App.css'
import imgLaunchpad from './images/launchpad.png'
import imgDiscord from './images/discord.png'
import imgTg from './images/tg.png'
import imgInsta from './images/insta.png'
import imgCardBottom from './images/cards-bottom.png'
import imgTwitter from './images/twitter.png'


function App() {
    const [timerText, setTimerText] = useState("")

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("Apr 01, 2021 23:00:00").getTime();

// Update the count down every 1 second
        const x = setInterval(function () {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            setTimerText( days + ": " + hours + ": " + minutes + ": " + seconds)


            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                setTimerText("EXPIRED")
            }
        }, 1000);

    })
    return (
        <div className="main-body text-center">
            <div className="container-fluid">
                <img className="img-fluid auto-img" src={imgLaunchpad} alt="" />

                <div className="time-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div id="timer" className="timer">{timerText}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subscribe-box">
                    <div className="join-text">
                        Join the gogo <br /> rebellion now
                    </div>

                    <div className="subscribe-form">
                        <form action="">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name=""
                                    className="subscribe-email"
                                    placeholder="Your Email"
                                />
                                <br />
                                <button className="btn btn-primary">Get Notified</button>
                            </div>
                        </form>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <a href="https://discord.gg/X3nHcP3s" target="_blank"  rel="noreferrer">
                                    <img src={imgDiscord} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/cryptogogos" target="_blank"  rel="noreferrer">
                                    <img src={imgTwitter} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/crypto.gogos/" target="_blank"  rel="noreferrer">
                                    <img src={imgInsta} alt="" />
                                </a>
                            </li>

                            <li>
                                <a href="https://t.me/cryptogogos" target="_blank"  rel="noreferrer">
                                    <img src={imgTg} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-img">
                        <img className="img-fluid" src={imgCardBottom} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
