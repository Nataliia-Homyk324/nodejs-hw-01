import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';


export const addOneContact = async () => {
      try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const newContact = createFakeContact();
        const updatedContacts = [...JSON.parse(contacts), newContact];

          await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts,null,2));


        console.log(`Generated new contact and added new contact to the array.`);
    } catch (error) {
        console.error(`Error generating new contact: ${error.message}`);
    }
};

await addOneContact();



// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
// import { createFakeContact } from '../utils/createFakeContact.js';
// export const addOneContact = async () => {
//   const newArray = [];
//   newArray.push(createFakeContact());
//   try {
//     const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
//     currentContacts.push(...newArray);
//     await fs.writeFile(PATH_DB, JSON.stringify(currentContacts, null, 2));
//   } catch (error) {
//     console.log(error);
//   }
// };
// await addOneContact();
