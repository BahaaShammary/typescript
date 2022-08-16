// Defining dynamic but limited types with Records

let anyObj : any = { name: "Bahaa"}
anyObj.id = 1234 // This will give us the error: Property 'id' does not exist on type anyObj
                    // To avoid it we can define anyObj as any
                    // But that means we can do anything with this object and that's not great
anyObj = 5 // This means instead of an object, we give it a single value
// We can use Record to pass in generic types that are expected and limit the ones we are not expecting
// It allows us to add new properties to it within the types we expect
let recordObj : Record<string, string | number | Function> = {name: "Bahawi"}
recordObj.id = 1234
recordObj.log = () => console.log("sup")

interface Query {
    sort?: 'asc' | 'desc';
    matches(val) : boolean;
}

// Extending and modifying types using utility types:

// We use the Record utility type to set the expected type of ContactQuery
// Use Partial utility type to make the fields of Contact as optional
// Using the Omit utility type, we can omit certain fields from the type definition 
// I can use a union type to omit several fields
type ContactQuery = Omit<Partial<Record<keyof Contact, Query>>, 'line1' | 'birthdate'>

// if I want to a type that is always only two fields of another type, I can use Pick
// Whatever fields are added to the Contact type in the future, this type will always only
// contain the chosen fields
type PickContactQuery = Pick<Partial<Record<keyof Contact, Query>>, 'line1' | 'birthdate'>

// Required utility type is the opposite of Partial
// Turns all properties of a type to required properties instead of optional
// ContactQuery type's fields are all optional, with Required, they turn to required
type RequiredContactQuery = Required<ContactQuery>

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            //get the query object for this property
            const propertyQuery = query[property];
            //check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }
        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: {matches: (id) => id === 123},
        name: {matches: (name) => name === 'Bahaa Shammary'}
    }
);