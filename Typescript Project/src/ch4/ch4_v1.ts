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
