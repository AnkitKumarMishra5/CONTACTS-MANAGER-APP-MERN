import express from 'express';

import {getContacts, getFavContacts, createContact, updateContact, deleteContact} from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getContacts)
router.get('/fav', getFavContacts)
router.post('/', createContact);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;