import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ee28641f87218271425fe8.mockapi.io/contacts";
export const fetchTasks = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContactId = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});