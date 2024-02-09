declare let num: number;
declare let str: string;
declare let bool: boolean;
declare let numarr: number[];
declare let strArr: string[];
declare let numOfArr: Array<number>;
type objblueprint = {
    id: number;
    name: string;
    address?: string;
};
declare let obj: objblueprint;
type company = {
    name: string;
    age: number;
    city: string;
};
declare let companies: company[];
declare let union: (number | string | boolean)[];
declare let uniongenaric: Array<number | string | boolean>;
type devs = {
    devname: string;
    workexp: number;
    iswORKING: boolean;
};
type locations = {
    city: string;
    country: string;
};
declare let intersections: devs & locations;
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
declare let CartItems: CartItems[];
declare const sum: (a: number, b: number) => number;
declare let call: number;
declare const strs: (companies: company[]) => void;
declare const Printdevs: ({ devname, workexp, iswORKING }: devs) => void;
declare enum gender {
    male = "male",
    female = "Female",
    "trans" = "trans"
}
declare const malegenders: gender;
declare const Genaricidentity: <T>(arg: T) => T;
declare let a: string;
declare let b: number;
declare let c: boolean;
declare const GenaricArr: <T>(arg: T[]) => T;
declare let Ga: string[];
declare let Gb: number[];
declare const resultA: string;
declare const resultB: number;
declare const GenaricArrElm: <T>(arg: T[]) => T[];
declare let GaElm: string[];
declare const resultAElm: string[];
declare const useState: <T>(arg: T) => [T, (value: T) => void];
declare const count: number, SetCount: (value: number) => void;
declare const strings: string, Setstrings: (value: string) => void;
declare const arrays: (string | number)[], setArrays: (value: (string | number)[]) => void;
declare class car {
    name: string;
    constructor(name: string);
}
type carfactory = "gujrat" | "karnataka";
type Safaricartyre = 22 | 24;
type SafaricarFule = "Petrol" | "disel";
type Nexoncartyre = 16 | 17;
declare class safari extends car {
    fule: SafaricarFule;
    location: carfactory;
    tyresize: Safaricartyre;
    cc: 1500 | 2000;
    constructor(fule: SafaricarFule, location: carfactory, tyresize: Safaricartyre, cc: 1500 | 2000);
}
declare class nexon extends car {
    fule: string;
    tyresize: Nexoncartyre;
    location: carfactory;
    battery: string;
    constructor(fule: string, tyresize: Nexoncartyre, battery: string, location: carfactory);
    GetNexondata(): string | number;
}
declare const safari_details: safari;
declare const nexon_details: nexon;
