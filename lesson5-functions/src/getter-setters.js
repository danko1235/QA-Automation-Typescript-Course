const person = {
    _name: "Petro",
    _age: 31,
    address: {
        _city: "Kyiv",
        _country: "Ukraine",
        get city() {
            return this._city;
        },
        set city(newCity) {
            this._city = newCity;
        }
    },
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    },
    get age() {
        return this._age > 0 ? this._age : 'unknown';
    },
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            this._age = 'unknown';
            console.log('The person gave false information about the age');
        }
    },
    getPersonInfo() {
        return `${this.name}, ${this.age} age, city ${this.address.city}, ${this.address._country}`;
    }
};

console.log(person.getPersonInfo());

console.log('----------------------');

person.age = -1;
person.name = 'Vika';
person.address.city = "Lviv";
console.log(person.getPersonInfo());

console.log('----------------------');

person.age = 21;
person.name = 'Danko';
person.address.city = "Radyvyliv";
console.log(person.getPersonInfo());
