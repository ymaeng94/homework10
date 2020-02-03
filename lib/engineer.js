const inquirer = require ("inquirer");

class engineer {
    constructor (name, github, role){
        this.name = name;
        this.github = github;
        this.role= engineer;
    }  
getName () {
    return this.name;
}
getGithub () {
    return this.github;
}
getRole () {
    return this.role;
}
}

module.exports = engineer;