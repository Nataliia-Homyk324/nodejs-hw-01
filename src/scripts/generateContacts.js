import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
     try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const newContacts = Array.from({ length: number }, createFakeContact);
        const updatedContacts = [...JSON.parse(contacts), ...newContacts];

        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts,null,2));
        console.log(`Generated ${number} new contacts and added them to the array.`);
    } catch (error) {
        console.error(`Error generating contacts: ${error.message}`);
    }
};

await generateContacts(2);


// import { PATH_DB } from '../constants/contacts.js';
// import { faker } from '@faker-js/faker';
// import fs from 'fs/promises';
// export const createFakeContact = () => ({
//   name: faker.person.fullName(),
//   phoneNumber: faker.phone.number(),
//   email: faker.internet.email(),
//   job: faker.person.jobTitle(),
// });
// const generateContacts = async (number) => {
//   const newContacts = [];
//   for (let i = 0; i < number; i++) {
//     newContacts.push(createFakeContact());
//   }
//   try {
//     const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
//     contacts.push(...newContacts);
//     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
//   } catch (error) {
//     console.log(error);
//   }
// };
// await generateContacts(2);
