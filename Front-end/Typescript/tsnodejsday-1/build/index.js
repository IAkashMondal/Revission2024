// Declaring a variable `num` and assigning it a value of type number
let num = 1;
// Declaring a variable `str` and assigning it a value of type string
let str = "string";
// Declaring a variable `bool` and assigning it a value of type boolean
let bool = true;
// Declaring arrays with specific element types
let numarr = [1, 2, 3, 4, 5]; // `numarr` is an array of numbers.
let strArr = ["string", "str"]; // `strArr` is an array of strings.
let numOfArr = [1, 2, 3, 4, 5]; // `numOfArr` is an array of numbers, using generic syntax.
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
// Declaring arrays with union types
let union = ["aksh", 2, true]; // `union` is an array with elements of types number, string, or boolean.
let uniongenaric = ["aksh", 2, true]; // `uniongenaric` is an array with elements of types number, string, or boolean, using generic syntax.
// Defining an intersection type `intersections` combining `devs` and `locations`
let intersections = {
    devname: "aksh",
    city: "slg",
    country: "In",
    iswORKING: true,
    workexp: 3,
};
// Declaring an array `CartItems` containing items conforming to the `CartItems` type
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
// Defining a function `sum` to add two numbers
const sum = (a, b) => {
    return a + b;
};
// Calling the function `sum` with arguments 5 and 10 and assigning the result to `call`
let call = sum(5, 10);
console.log(call); // Output: 15
// Defining a function `strs` to log information about companies
const strs = (companies) => {
    companies.forEach(({ name, age, city }) => {
        console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    });
};
strs(companies); // Output: Information about each company logged
// Defining a function `Printdevs` to log information about developers
const Printdevs = ({ devname, workexp, iswORKING }) => {
    console.log(`Name: ${devname}, work exp: ${workexp}, is working: ${iswORKING}`);
};
Printdevs(intersections); // Output: Information about the intersection of devs and locations logged
// Enum declaration for gender
var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "Female";
    gender["trans"] = "trans";
})(gender || (gender = {}));
const malegenders = gender.male;
console.log(malegenders); // Output: male
// Defining a generic function `Genaricidentity` that returns its argument unchanged
const Genaricidentity = (arg) => {
    return arg;
};
let a = "genaric function";
let b = 69;
let c = true;
Genaricidentity(a);
Genaricidentity(b);
Genaricidentity(c);
// Defining a generic function `GenaricArr` that returns the element at index 3 of an array
const GenaricArr = (arg) => {
    return arg[3];
};
let Ga = ["jan", "feb", "mar", "april"];
let Gb = [1, 2, 3, 4, 5];
const resultA = GenaricArr(Ga);
const resultB = GenaricArr(Gb);
console.log(resultA); // Output: april
console.log(resultB); // Output: 4
// Defining a generic function `GenaricArrElm` that returns the entire array
const GenaricArrElm = (arg) => {
    return arg;
};
let GaElm = ["jan", "feb", "mar", "april"];
const resultAElm = GenaricArrElm(GaElm);
console.log(resultAElm); // Output: ["jan", "feb", "mar", "april"]
// Defining a generic function `useState` that returns a tuple containing a value and a setter function
const useState = (arg) => {
    let v = arg;
    const setV = (newValue) => {
        v = newValue;
    };
    return [v, setV];
};
const [count, SetCount] = useState(7);
const [strings, Setstrings] = useState("i'm string");
const [arrays, setArrays] = useState([
    "aksh",
    2,
    3,
    4,
    "mondal",
]);
console.log(count, strings, arrays);
// inter face same as type but it only use for objects and can rewrite to add something as variable
// clases
// Defining a class `car` representing a generic car
class car {
    constructor(name) {
        this.name = name;
    }
}
// Defining a class `safari` extending `car` class
class safari extends car {
    constructor(fule, location, tyresize, cc) {
        super("safari");
        this.fule = fule;
        this.location = location;
        this.tyresize = tyresize;
        this.cc = cc;
    }
}
// Defining a class `nexon` extending `car` class
class nexon extends car {
    constructor(fule, tyresize, battery, location) {
        super("nexon");
        this.fule = fule;
        this.tyresize = tyresize;
        this.battery = battery;
        this.location = location;
    }
    // Defining a method `GetNexondata` to retrieve data specific to Nexon
    GetNexondata() {
        return this.name; // Return the name of the car
        // The following lines are unreachable due to the previous return statement
        // this.fule;
        // this.tyresize;
        // this.location;
        // this.battery;
    }
}
// Creating instances of `safari` and `nexon` classes
const safari_details = new safari("disel", "gujrat", 22, 2000);
const nexon_details = new nexon("ev", 17, "80kw", "karnataka");
// Logging the details of `safari` and `nexon` cars along with Nexon specific data
console.log(safari_details, nexon_details.GetNexondata());
// This code defines two classes, `car`, `safari`, and `nexon`, demonstrating inheritance and encapsulation in TypeScript.
// 1. **`car` class**: 
//    - It represents a generic car with a `name` property.
//    - The constructor initializes the `name` property.
// 2. **Inheritance**:
//    - Both `safari` and `nexon` classes extend the `car` class, inheriting its properties and methods.
//    - `super("safari")` and `super("nexon")` are used in the constructors of `safari` and `nexon` respectively to call the constructor of the superclass (`car`) and initialize the `name` property inherited from it.
// 3. **`safari` class**:
//    - It extends the `car` class and adds additional properties specific to a safari car such as `fule`, `location`, `tyresize`, and `cc`.
//    - The constructor initializes these properties along with calling the superclass constructor using `super()`.
// 4. **`nexon` class**:
//    - Similar to `safari` class, it extends the `car` class and introduces its own properties like `fule`, `tyresize`, `battery`, and `location`.
//    - The constructor initializes these properties and calls the superclass constructor using `super()`.
// 5. **Method `GetNexondata`**:
//    - It is defined only in the `nexon` class.
//    - This method returns the `name` property of the `nexon` instance.
//    - Currently, the other lines in this method are commented out and not executed due to the `return` statement preceding them.
// 6. **Instances**:
//    - `safari_details` and `nexon_details` are instances of the `safari` and `nexon` classes respectively, created using the `new` keyword and passing appropriate arguments to their constructors.
// 7. **Logging**:
//    - Finally, the details of both `safari` and `nexon` instances along with Nexon specific data (name) are logged to the console using `console.log()`.
// Inheritance allows `safari` and `nexon` classes to inherit common properties and behavior from the `car` class, reducing code duplication and promoting code reusability. The `GetNexondata` method demonstrates how subclasses can extend the functionality of the superclass by adding their own methods.
//# sourceMappingURL=index.js.map