/**
 * Creating custom types with interfaces
 */

// a custom type is called an interface in typescript
// an interface may look like a js class but the main difference is that it is only used at compile time
// It does not show while the app is running 
interface Contact extends Address {
    id: number;
    name: string;
    birthdate?: Date;
}

let primaryContact : Contact = {
    id: 123,
    name: "Bahaulddin",
    // birthdate: new Date("09-04-2022"), Because it's an optional field, we have the option to not provide it
    line1: "00 Greenwod House",
    // line2: "longway street",  Because it's an optional field, we have the option to not provide it
    city: "Cork",
    county: "Co.Cork",
    postCode: "T23H234",
}

/**If we don't require one of the Contact fields, then during definition of the interface
 * we can place a "?" to make it an optional field
 * Without the question mark, if we remove one of the fields from primaryContact then we get an error
 * So, not every contact has to have a birthdate, but if an object does have one, then it must be a Date type
*/

// typescript allows two interfaces to combine to produce another interface
interface Address {
    line1: string;
    line2?: string;
    city: string;
    county: string;
    postCode: string;
}
// Then we can merge Address with Contact to create one big interface using the "extends" keyword
// See Contact object primarContact as merged interfaces
