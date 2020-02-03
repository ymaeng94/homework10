const inquirer = require ("inquirer");

class manager {
    constructor(name, id, email, office) {
        // super (name, id, email);
        // this.officeNumber = office;
        // this special = `office: ${this.office}`;
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getOffice () { 
        return this.office;
    }
    getRole () { 
        return this.role;
    }
    }

module.exports = manager;