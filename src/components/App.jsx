import React, { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch , useSelector} from 'react-redux';
import { addFilter , selectorFilter, selectorContacts, selectorIsLoading, selectorError} from '../redux/contactsRedux'
import css from './App.module.css';
import { addContact, deleteContactId, fetchTasks } from "redux/operations";



const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value))
  }
useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = { name: login, phone: phone, id: nanoid() };
    form.reset();
    contacts.items.find(contact => contact.name === login)
      ? alert(`${login} is already in contacts`)
      // : dispatch(addContacts(contact))
     : dispatch(addContact(contact))
      toast.success('Контак добавлен')
    
   
  }
  const onClickButton = id => {
    dispatch(deleteContactId(id)) 
  }
  const normalisFilter = filter.toLowerCase();
  const filterContacts = contacts.items.filter(
    contact => contact.name.toLowerCase().includes(normalisFilter)
  )
  return (
    
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
       {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && ( <div>Загрузка</div> )}
      <ContactList data={filterContacts} onDeleteConcat={onClickButton} />
      <Toaster />
    </div>
  );
  
}
export default App;