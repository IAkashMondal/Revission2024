// Declaring a variable `num` and assigning it a value of type number
let num: number = 1;

// Declaring a variable `str` and assigning it a value of type string
let str = "string";

// Declaring a variable `bool` and assigning it a value of type boolean
let bool: boolean = true;

// Declaring arrays with specific element types
let numarr: number[] = [1, 2, 3, 4, 5]; // `numarr` is an array of numbers.
let strArr: string[] = ["string", "str"]; // `strArr` is an array of strings.
let numOfArr: Array<number> = [1, 2, 3, 4, 5]; // `numOfArr` is an array of numbers, using generic syntax.

// Defining a blueprint for objects with properties `id`, `name`, and optional `address`
type objblueprint = {
  id: number;
  name: string;
  address?: string; // `address` property is optional.
};
let obj: objblueprint = {
  id: 1,
  name: "ram",
};
// Array of objects

// Defining a type for companies with properties `name`, `age`, and `city`
type company = { name: string; age: number; city: string };
let companies: company[] = [
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
let union: (number | string | boolean)[] = ["aksh", 2, true]; // `union` is an array with elements of types number, string, or boolean.
let uniongenaric: Array<number | string | boolean> = ["aksh", 2, true]; // `uniongenaric` is an array with elements of types number, string, or boolean, using generic syntax.

// Defining types for developers and locations
type devs = { devname: string; workexp: number; iswORKING: boolean };
type locations = { city: string; country: string };

// Defining an intersection type `intersections` combining `devs` and `locations`
let intersections: devs & locations = {
  devname: "aksh",
  city: "slg",
  country: "In",
  iswORKING: true,
  workexp: 3,
};
// Array of objects

// Defining a type `produtsdeatils` for product details
type produtsdeatils = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Defining a type `CartItems` for items in a cart
type CartItems = {
  id: number;
  product: produtsdeatils[];
  total: number;
};

// Declaring an array `CartItems` containing items conforming to the `CartItems` type
let CartItems: CartItems[] = [
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
const sum = (a: number, b: number): number => {
  return a + b;
};
// Calling the function `sum` with arguments 5 and 10 and assigning the result to `call`
let call = sum(5, 10);
console.log(call); // Output: 15

// Defining a function `strs` to log information about companies
const strs = (companies: company[]): void => {
  companies.forEach(({ name, age, city }) => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  });
};
strs(companies); // Output: Information about each company logged

// Defining a function `Printdevs` to log information about developers
const Printdevs = ({ devname, workexp, iswORKING }: devs): void => {
  console.log(
    `Name: ${devname}, work exp: ${workexp}, is working: ${iswORKING}`
  );
};
Printdevs(intersections); // Output: Information about the intersection of devs and locations logged

// Enum declaration for gender
enum gender {
  male = "male",
  female = "Female",
  "trans" = "trans",
}
const malegenders: gender = gender.male;
console.log(malegenders); // Output: male

// Defining a generic function `Genaricidentity` that returns its argument unchanged
const Genaricidentity = <T>(arg: T): T => {
  return arg;
};
let a: string = "genaric function";
let b: number = 69;
let c: boolean = true;
Genaricidentity<string>(a);
Genaricidentity<number>(b);
Genaricidentity<boolean>(c);

// Defining a generic function `GenaricArr` that returns the element at index 3 of an array
const GenaricArr = <T>(arg: T[]) => {
  return arg[3];
};
let Ga: string[] = ["jan", "feb", "mar", "april"];
let Gb: number[] = [1, 2, 3, 4, 5];
const resultA: string = GenaricArr<string>(Ga);
const resultB: number = GenaricArr<number>(Gb);
console.log(resultA); // Output: april
console.log(resultB); // Output: 4

// Defining a generic function `GenaricArrElm` that returns the entire array
const GenaricArrElm = <T>(arg: T[]): T[] => {
  return arg;
};
let GaElm: string[] = ["jan", "feb", "mar", "april"];
const resultAElm: string[] = GenaricArrElm<string>(GaElm);
console.log(resultAElm); // Output: ["jan", "feb", "mar", "april"]

// Defining a generic function `useState` that returns a tuple containing a value and a setter function
const useState = <T>(arg: T): [T, (value: T) => void] => {
  let v: typeof arg = arg;
  const setV = (newValue: T): void => {
    v = newValue;
  };
  return [v, setV];
};
const [count, SetCount] = useState<number>(7);
const [strings, Setstrings] = useState<string>("i'm string");
const [arrays, setArrays] = useState<Array<number | string>>([
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
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Defining union types for car factory locations, safari car tyre sizes, and safari car fuel types
type carfactory = "gujrat" | "karnataka";
type Safaricartyre = 22 | 24;
type SafaricarFule = "Petrol" | "disel";
type Nexoncartyre = 16 | 17;

// Defining a class `safari` extending `car` class
class safari extends car {
  fule: SafaricarFule;
  location: carfactory;
  tyresize: Safaricartyre;
  cc: 1500 | 2000;
  constructor(
    fule: SafaricarFule,
    location: carfactory,
    tyresize: Safaricartyre,
    cc: 1500 | 2000
  ) {
    super("safari");
    this.fule = fule;
    this.location = location;
    this.tyresize = tyresize;
    this.cc = cc;
  }
}

// Defining a class `nexon` extending `car` class
class nexon extends car {
  fule: string;
  tyresize: Nexoncartyre;
  location: carfactory;
  battery: string;
  constructor(
    fule: string,
    tyresize: Nexoncartyre,
    battery: string,
    location: carfactory
  ) {
    super("nexon");
    this.fule = fule;
    this.tyresize = tyresize;
    this.battery = battery;
    this.location = location;
  }
  // Defining a method `GetNexondata` to retrieve data specific to Nexon
  GetNexondata(): string | number {
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
