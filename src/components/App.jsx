import React from "react";
import  { Toaster } from 'react-hot-toast';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useSelector} from 'react-redux';
import {   selectorIsLoading, selectorError} from '../redux/contactsRedux'
import css from './App.module.css';




const App = () => {
  
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
 

  return (
    
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
       {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && ( <div>Загрузка</div> )}
      <ContactList/>
      <Toaster />
    </div>
  );
  
}
export default App;