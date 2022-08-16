// Extracting metadata from existin types

// Use mapped type definition
// Using the previous example of ContactQuery
// Instead of using this way: 
// type ContactQuery = Partial<Record<keyof Contact, Query>>

// We use the mapped syntax to do the same thing
// It is like a loop that maps the properties of Contact to this new type
// The question mark makes all properties optional
type MappedContactQuery = {
    [TProp in keyof Contact]?: Query
}