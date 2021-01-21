import mongoose from 'mongoose';

import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => { 
    try {
        const contacts = await Contact.find();      
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    const { name, email, mobile, favourite } = req.body;
    const newContact = new Contact({ name, email, mobile, favourite })
    try {
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const { name, email, mobile, favourite } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);

    const updatedContact = { name, email, mobile, favourite, _id: id };

    await Contact.findByIdAndUpdate(id, updatedContact, { new: true });

    console.log(updatedContact)

    res.status(200).json(updatedContact);
}

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);

    await Contact.findByIdAndRemove(id);

    res.status(200).json({ message: "OK" });
}
