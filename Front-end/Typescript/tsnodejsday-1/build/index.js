// number
let num = 1;
// string
let str = "string";
// bool(true/false"
let bool = true;
// arrays
let numarr = [1, 2, 3, 4, 5];
let strArr = ["string", "str"];
let numOfArr = [1, 2, 3, 4, 5]; // Generic function
let obj = {
    id: 1,
    name: "ram",
};
let companies = [
    {
        name: "micro",
        age: 20,
        city: "hD",
    },
    {
        name: "AMAZON",
        age: 24,
        city: "bangalore",
    },
    {
        name: "smasung",
        age: 53,
        city: "up",
    },
];
//union || or => |
let union = ["aksh", 2, true];
let uniongenaric = ["aksh", 2, true];
//itersection || and => &
let intersections = {
    devname: "aksh",
    city: "slg",
    country: "In",
    iswORKING: true,
    workexp: 3,
};
let CartItems = [
    {
        id: 1,
        product: [
            {
                id: 1,
                name: "jacket",
                price: 300,
                quantity: 2,
            },
        ],
        total: 600,
    },
    {
        id: 2,
        product: [
            {
                id: 1,
                name: "pant",
                price: 500,
                quantity: 2,
            },
        ],
        total: 1000,
    },
];
// Functions
const sum = (a, b) => {
    return a + b;
};
let call = sum(5, 10);
console.log(call);
const strs = (companies) => {
    companies.forEach(({ name, age, city }) => {
        console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    });
};
strs(companies);
const Printdevs = ({ devname, workexp, iswORKING }) => {
    console.log(`Name: ${devname}, work exp: ${workexp}, is working: ${iswORKING}`);
};
Printdevs(intersections);
//# sourceMappingURL=index.js.map