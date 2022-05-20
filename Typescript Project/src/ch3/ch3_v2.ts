type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact {
    id : number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Bahaulddin",
    status: "active"
}

// THis defines a type alias consisting of all of the properties on the contact type
// A variable of this type (ContactFields) may only contain values matching the properties on the Contact
type ContactFields = keyof Contact

// This kind of types helps us restrict passing wrong property names
// Ex: The following function makes use of JS dynamic typing. But if we were to pass a missspelled
// property name, then an error would occur. 
//const getValue = (source, propertyName) => {
//    return source[propertyName];
//}
// const value = getValue(primaryContact, "sttatus")
// To avoid this issue, we can specify that when passing 
// propertyName, we only get ones belonging to the object we passed in. 
// const getValue = (source: Contact, propertyName: keyof Contact) => {
//     return source[propertyName];
// }
//Now if we change the above function to use generics then it will be more powerful
// because then typescript adjusts the propretyName to match a property in the type T 
// whatever T is:
function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName];
}
const value = getValue(primaryContact, "status")