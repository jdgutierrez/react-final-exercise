import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ContactForm from './contactForm';

import './contactDetails.scss';

export default function ContactDetails(props) {
    const [contact, setContact] = useState({});
    const [editing, setEditing] = useState(false);
    const history = useHistory();
    const { contactId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/contacts/${contactId}`).then(r => r.json()).then((response) => {
            setContact(response);
        });
    }, [contactId]);

    if (editing) {
        return <ContactForm 
            editing={true} 
            contact={contact}
            cancelEditing={() => setEditing(false) }
        />;
    }

    return <div className="content details">
        <div className="info">
            <div className="field">
                <div className='title'>Name</div>
                <div className='data'>{contact.name}</div>
            </div>
            <div className="field">
                <div className='title'>Email</div>
                <div className='data'>{contact.email}</div>
            </div>
            <div className="field">
                <div className='title'>Message</div>
                <div className='data'>{contact.message}</div>
            </div>
        </div>
        
        <div className="actions">
            <button className="edit" onClick={() => {
                setEditing(true);
            }}>Editar</button>
            <button className="delete" onClick={() => {
                const headers = new Headers();
                headers.set('Content-Type', 'application/json');
                fetch(`http://localhost:3001/contacts/${contact.id}`, {
                    method: 'DELETE',
                    headers,
                }).then(() => history.push('/contactos'));
            }}>Eliminar</button>
        </div>
        
    </div>
}