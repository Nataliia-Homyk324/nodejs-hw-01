import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');

        const newContacts = JSON.parse(contacts).filter(() => Math.random() > 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
        console.log('Thanos has snapped his fingers');
    } catch (error) {
        console.error(`Error processing the contacts:: ${error.message}`);
    }
};

await thanos();
