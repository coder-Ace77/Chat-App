import React from "react";
import './../css/main.css';

class Main extends React.Component {

    render() {
        return (
            <div className='main'>
                <div className='main-header'>
                    <div className="personal-info-box">
                        <div className="header-image-box">
                            <img src="model.jpg" alt="My image" className="header-image" />
                        </div>
                        <span className="header-name-box"> Name-In-Here</span>
                    </div>
                </div>

                <div className='main-content'>
                    <div className='main-search-box'>
                        <input type='text' className='main-search-input' placeholder='Input...' />
                        <div class="send-button"><img src="icons8-send-white.png" alt="Send" className="send-button-image" /></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;