import React from 'react';
import { Link } from 'react-router-dom';

import styles from './contactList.module.scss';

export default function ContactItem(props) {
    const { contact, refreshContacts } = props;

    function deleteContact() {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        fetch(`http://localhost:3001/contacts/${contact.id}`, {
            method: 'DELETE',
            headers,
        }).then(refreshContacts);
    }

    return <div className={styles.item}>
        <div className={styles.text}>
            {contact.name}
            <span className={styles.email}>{contact.email}</span>
        </div>
        <div className={styles.actions}>
            <Link to={`/contactos/${contact.id}`} className={styles.details}>Detalles</Link>
            <button onClick={deleteContact} className={styles.delete}>Eliminar</button>
        </div>
    </div>;
}