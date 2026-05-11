class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} logged in`);
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    logIn() {
        console.log(`${this.name} logged in as ${this.role}`);
    }
}

const user1 = new User('Alice');
const admin1 = new Admin('Bob', 'Administrator');

user1.logIn();
admin1.logIn();