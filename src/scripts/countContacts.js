import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
     try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        return `the number of contacts in the array: ${JSON.parse(contacts).length}`;
    } catch {
        console.log("Failed to count contacts!");
    }
};

console.log(await countContacts());
