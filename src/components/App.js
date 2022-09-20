import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState ([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

 return (
    <div>
      <Header />
      <AddContact addContactHandlerrr={addContactHandler}/>
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
