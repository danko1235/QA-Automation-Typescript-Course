const complexObject = {
    name: 'Danko',
    details: {
        age: 21,
        skills: ['JavaScript', 'TypeScript?', 'UX/UI design']
    },
    isActive: true,
    logDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.details.age}, Skills: ${this.details.skills.join(', ')}`);
    }
};

complexObject.logDetails();
