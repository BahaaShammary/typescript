/**
 * Combining multiple types with union types
 */

// We can use aliases to combine multiple 

type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

// We can create an alias as a replacement for enum values:
// this means we don't have to reference the enum value and instead have it written out directly
type ContactStatusType = "active" | "inactive" | "new";

// instead of piping several types inside an interface for a field
// we can create a custom type (alias) to represent the type of a field
type ContactBirthDate = Date | number | string;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate; // we can support other types for this field
    status?: ContactStatusType;
}

interface Address {
    line1: string;
    line2: string;
    town: string;
    city: string;
    postalCode: string;
}

// We can create a new type that can combine two types (having all of both types' fields)
// this is done by using the "&" operator
type AddressableContact = Contact & Address;

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate)
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate;
    }
}

// So, we can define a new object using enums and a new object using our new alias type replacement for enums
// let contactUsingEnums: Contact = {
//     id: 1,
//     name: "Bahaulddin",
//     birthDate: "05/02/1994",
//     status: ContactStatus.Active,
// }
// Or we can use our alias type:
let contactUsingAlias: Contact = {
    id: 1,
    name: "Bahaulddin",
    birthDate: "05/02/1994",
    status: "active",
}