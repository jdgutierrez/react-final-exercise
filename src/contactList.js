import React, { Component } from 'react';
import ContactItem from './contactItem';

import styles from './contactList.module.scss';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
        this.refreshContacts = this.refreshContacts.bind(this);
    }

    componentDidMount() {
        this.refreshContacts();
    }

    refreshContacts() {
        fetch('http://localhost:3001/contacts').then(response => response.json()).then(responses => {
            this.setState({
                contacts: responses,
            });
        });
    }

    render() {
        return <div className={styles.contacts}>
            {this.state.contacts.map(contact => {
                return <ContactItem 
                  contact={contact} 
                  key={contact.id} 
                  refreshContacts={this.refreshContacts}
                />;
            })}
        </div>;
    }
}

export default ContactList;