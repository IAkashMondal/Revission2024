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
