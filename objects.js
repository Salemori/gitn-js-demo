// 1. Modeling a circle
const circle = {
    pie: 3.14159,
    
    setRadius(inputedRadius)
    {
        this.radius = parseFloat(inputedRadius);
    },

    circumference()
    {
        return 2 * this.pie * this.radius;
    },

    area()
    {
        return this.pie * (this.radius * this.radius);
    }
};

const radius = parseInt(prompt("Enter the circle radius:"));
console.log("================ object ================");
circle.setRadius(radius);
console.log(`Its circunference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// 2. Modeling a bank account
const account = {
    name: "Alex",
    balance: 0,

    credit(value = 0)
    {
        return this.balance += parseFloat(value);
    },

    describe()
    {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}

console.log(account.credit());
console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());

