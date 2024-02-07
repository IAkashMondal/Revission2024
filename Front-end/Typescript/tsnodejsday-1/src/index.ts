// number
let num: number = 1;

// string
let str = "string";

// bool(true/false"
let bool: boolean = true;

// arrays
let numarr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["string", "str"];
let numOfArr: Array<number> = [1, 2, 3, 4, 5]; // Generic function

// Interface --> type [declearing blue print for bojects]
type objblueprint = {
  id: number;
  name: string;
  address?: string; // adress is optional maybe available or maynotbe
};
let obj: objblueprint = {
  id: 1,
  name: "ram",
};
//arr of the objs
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
//union || or => |
let union: (number | string | boolean)[] = ["aksh", 2, true];
let uniongenaric: Array<number | string | boolean> = ["aksh", 2, true];

type devs = { devname: string; workexp: number; iswORKING: boolean };
type locations = { city: string; country: string };

//itersection || and => &
let intersections: devs & locations = {
  devname: "aksh",
  city: "slg",
  country: "In",
  iswORKING: true,
  workexp: 3,
};
// array of thr obj
type produtsdeatils = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type CartItems = {
  id: number;
  product: produtsdeatils[];
  total: number;
};

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
// Functions

const sum = (a: number, b: number): number => {
  return a + b;
};
let call = sum(5, 10);
console.log(call);

const strs = (companies: company[]): void => {
  companies.forEach(({ name, age, city }) => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  });
};

strs(companies);
const Printdevs = ({ devname, workexp, iswORKING }: devs): void => {
  console.log(
    `Name: ${devname}, work exp: ${workexp}, is working: ${iswORKING}`
  );
};
Printdevs(intersections);