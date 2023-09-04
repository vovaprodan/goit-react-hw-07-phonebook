import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactId, fetchTasks } from 'redux/operations';
import { toast } from 'react-hot-toast';
import { selectorContacts, selectorFilter } from 'redux/contactsRedux';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  


   const onClickButton = id => {
    dispatch(deleteContactId(id)) 
    toast.error('Контак видалено')
  }

  const normalisFilter = filter.toLowerCase();
  const filterContacts = contacts.items.filter(
    contact => contact.name.toLowerCase().includes(normalisFilter)
  )

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);

    return <ul className={css.list}>
          {
            filterContacts.map(contact => {
             return <li className={css.item} key={contact.id}>
                <p>{contact.name}:</p>
               <p>{contact.phone}</p>
               <button className={css.button} type="button" onClick={() => onClickButton(contact.id)}>Delete</button>
              </li>
            })
}
        </ul>
}

ContactList.propTypes = {
  data: PropTypes.array,
  onDeleteConcat: PropTypes.func
}