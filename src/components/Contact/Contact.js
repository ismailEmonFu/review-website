import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="col-md-12 m-5 d-flex justify-content-center">
                <div>
                    <h3>Write Your Message and Send to Us</h3>
                    <input
                        className="footer-input"
                        type="text"
                        placeholder="Write your message"
                    />
                    <div className="phone d-flex align-items-center justify-content-center mt-4">
                        <h5>Also you can call us :</h5>                        <div className="foter-phone-icon">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        <div>
                            <h5>+83 4325 35 35</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Contact;