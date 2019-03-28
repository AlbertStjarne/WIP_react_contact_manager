import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
state = {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'kw@gmail.com',
      phone: '123-555-5555'
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henryj@gmail.com',
      phone: '222-333-5555'
    }
  ]
};
  

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact 
            key={contact.id} 
            contact={contact} />
        ))}    
      </React.Fragment>
    )
  }
}

export default Contacts;