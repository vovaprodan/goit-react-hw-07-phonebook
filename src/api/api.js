import axios from 'axios';

export const fetchContacts = async () => {
    const { data } = await axios.get(`https://64ee28641f87218271425fe8.mockapi.io/contacts/contacts`);
    return data;
};