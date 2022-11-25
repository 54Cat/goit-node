const fs = require('fs/promises');
// const path = require('path');
// const filePath = path.join(__dirname,"contacts.json")

const listContacts = async () => {
    const data = await fs.readFile("./db/contacts.json");
    const contacts = JSON.parse(data);
    return contacts;
}

module.exports = listContacts;
