/**
 * Defining enumerable types
 */
// Let's say we want to add a field that reflects the status of the contact
// This status can indicate the different states a contact can be in
// i.e. active, Inactive, new...
// we can do this using enum
// enum is a special type that has a hardcoded list of values
// we can leave the enum values just declared or we can define them with values
// we can assign them a string or a number, as long as all the values are of the same type
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
// enums do get compiled with the rest of the code 
// This allows us to refer to these types at run time

interface PersonalContact {
    id: number;
    name: PersonalContactName;
    birthDate?: Date;
    status: ContactStatus;
}

const primaryPersonalContact: PersonalContact = {
    id: 1234,
    name: "Bahaulddin",
    status: ContactStatus.Active,
}
type PersonalContactName = string;

