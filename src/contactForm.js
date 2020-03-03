import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './contactForm.scss';

function ContactForm(props) {
    const [name, setName] = useState(props.contact.name || '');
    const [email, setEmail] = useState(props.contact.email || '');
    const [message, setMessage] = useState(props.contact.message || '');
    const history = useHistory();
    const { editing, contact } = props;

    function changeValue(setter, evt) {
        const newValue = evt.currentTarget.value;
        setter(newValue);
    }

    return <div className='content contact-form'>
        <div className="form-control">
            <input 
              value={name} 
              onChange={changeValue.bind(this, setName)}
              placeholder="Input your name"
            />   
        </div>
        <div className="form-control">
            <input value={email} onChange={changeValue.bind(this, setEmail)} placeholder="Input your email"/>
        </div>
        <div className="form-control">
            <textarea value={message} rows="5" onChange={changeValue.bind(this, setMessage)} placeholder="Tell us why you contact us?"/>
        </div>
        <div className="actions">
            <button className="send" onClick={() => {
                if (!name || !email || !message) {
                    alert('All fields are required');
                    return;
                }
                const headers = new Headers();
                headers.set('Content-Type', 'application/json');

                if (editing) {
                    fetch(`http://localhost:3001/contacts/${contact.id}`, {
                        method: 'PUT',
                        headers,
                        body: JSON.stringify({
                            name,
                            email,
                            message,
                        }),
                    }).then(() => { history.push('/contactos'); });
                    return;
                }

                fetch('http://localhost:3001/contacts', {
                    method: 'POST',
                    headers,
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }).then(() => { history.push('/contactos'); });;
            }}>
                Enviar
            </button>
            {editing && <button className="cancel" onClick={props.cancelEditing}>
                Cancelar
            </button>}
        </div>
    </div>;
}

ContactForm.defaultProps = {
    contact: {},
};

export default ContactForm;