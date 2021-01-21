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
