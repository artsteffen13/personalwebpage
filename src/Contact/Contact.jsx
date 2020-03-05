import React, {useEffect, useState} from 'react';
import './contact.css';

const Contact = () => {
    const [formControl, setFormControl] = useState(false);
    const [nameCheck, setNameCheck] = useState(null);
    const [phoneCheck, setPhoneCheck] = useState(null);
    const [messageCheck, setMessageCheck] = useState(null);
    const [emailCheck, setEmailCheck] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (nameCheck === false && phoneCheck === false && messageCheck === false && emailCheck === false) {
            setFormControl(true);
        } else {
            setFormControl(false);
        }
    }, [nameCheck, phoneCheck, messageCheck, emailCheck]);

    const validateName = (e) => {
        const value = e.target.value;
        const re = /[a-zA-z]/;
        if (re.test(value)) {
            setNameCheck(false);
        } else {
            setNameCheck(true);
        }
    };

    const validateNumber = (e) => {
        const value = e.target.value;
        const re = /^1?[- (.]?\d{3}[- ).]?\d{3}[- .]?\d{4}$/;
        if (re.test(value)) {
            setPhoneCheck(false);
        } else {
            setPhoneCheck(true);
        }
    };

    const validateMessage = (e) => {
        const value = e.target.value;
        const re = /[a-zA-z]/;
        if (re.test(value)) {
            setMessageCheck(false);
        } else {
            setMessageCheck(true);
        }
    };

    const validateEmail = (e) => {
        const value = e.target.value;
        const re = /.+@[a-zA-z0-9]+\.[a-zA-Z]{2,}$/;
        if (re.test(value)) {
            setEmailCheck(false);
        } else {
            setEmailCheck(true);
        }
    };

    const showError = (e) => {
        if (e.target.type === 'button') {
            setError(true);
        } else {
            setError(false)
        }
    };


    return (
        <div className="contact animated fadeIn">
                <form
                    class="form"
                    name="contactform"
                    action="https://formspree.io/xwkebzkr"
                    method="post"
                >
                    <label>
                        Name:<br/>
                        <input
                            className={nameCheck ? 'danger' : null}
                            onBlur={validateName}
                            type="text"
                            name="name"
                        />
                    </label>
                    <label>
                        Phone:<br/>
                        <input
                            className={phoneCheck ? 'danger' : null}
                            onBlur={validateNumber}
                            type="text"
                            name="phone"
                        />
                    </label>
                    <label>
                        Your email:<br/>
                        <input
                            className={emailCheck ? 'danger' : null}
                            onBlur={validateEmail} type="text"
                            name="email"
                        />
                    </label>
                    <label>
                        Your message:<br/>
                        <textarea
                            className={messageCheck ? 'danger' : null}
                            onBlur={validateMessage}
                            name="message"
                        />
                        <br/>
                    </label>
                    {error ? <h3>*All fields required before submitting</h3> : null}

                    <button
                        style={{cursor: formControl ? 'pointer' : 'not-allowed'}}
                        onClick={showError}
                        type={formControl ? 'submit' : 'button'}
                    >
                        Send
                    </button>
                </form>
        </div>
    );
};

export default Contact;