import React from 'react';
import user from "../images/user.png";

function ContactCard(props) {
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt="user" />
          <div className='content'>
            <div className='header'>{props.contact.name}</div>
            <div>{props.contact.email}</div>
          </div>
          <i className='trash alternate outline icon' />
        </div>
      )
}

export default ContactCard