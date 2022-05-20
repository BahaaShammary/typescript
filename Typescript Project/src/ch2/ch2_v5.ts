/**
 * Typing functions
 */
// we can also define a method as part of an interface
interface SimpleContact {
    id: number;
    name: string;
    clone?(name: string): Contact
}
// We can give the parameter passed in a type
function clone(source: SimpleContact): SimpleContact {
    // return true;  // typescript is able to pick up the type of the object being returned from function
    return Object.apply({}, source);
}

const simpleContact: SimpleContact = {
    id: 1,
    name: "Bahaulddin"
}
// This way the returned type is "any"
// This can be fixed if we provide the type of the return object after the function brackets above
const c = clone(simpleContact);