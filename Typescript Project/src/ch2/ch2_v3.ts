/**
 * Defining types using type aliases
 */

 interface Contact1 {
    id: number;
    name: ContactName;
    birthdate?: Date;
}

let primaryContact1 : Contact1 = {
    id: 123,
    name: "Bahaulddin",
    birthdate: new Date("09-04-2022"),
}

// Another way of referring to types and defining your own custom type
// An alias means providing a different name to an already existing type
// You define an alias type using the "type" keyword followed by the name 
// of the alias
type ContactName = String;
// the point of these aliases is to give more meaning to types of fields in objects.  
// type aliases can also be useful if we want to change the type of ContactName to another 
// primitive type, then we only need to update it once at line 21