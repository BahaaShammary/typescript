/**
 * Defining a metatype using generics
 */
// A generic type is metatype that represents any other type that we might want to substitute in
// So if we want to make a function generic, that means it can take in any type "generic" (instead of defining a specific one)
// and return the same generic type that was passed in.
interface MyContact {
    id: number;
    name: string;
    clone?(name: string): Contact
}
// we make this function generic by appending <T> to it and removing the defined types
function cloneContact<T>(source: T): T {
    return Object.apply({}, source);
}

const myContact: MyContact = { id: 1, name: "Bahaulddin" }
// When we hover over the following function call, you can see typescript still knows that 
// since we passed in a type MyContact, that the returned object will be of type MyContact as well
const w = cloneContact(myContact);

// if we just define a variable and pass it to the function
// when we hover over the variable dateRangeCopy, we can see that typescript is able to know that the returned
// type will contain the correct structure matching the object we passed in, even though we don't have
// an interface for it.
const dateRange = {startDate: Date.now(), endDate: Date.now()}
const dateRangeCopy = cloneContact(dateRange);

// We can also provide more than one generic object: 
function cloneContactWithTwoGenerics<T1, T2>(source: T1): T2 {
    return Object.apply({}, source);
}
// When we have a function like "cloneContactWithTwoGenerics" where typescript is unable to 
// infer the types then we have to declare the types explicity when calling the function: 
const twoGenerics = cloneContactWithTwoGenerics<MyContact, MyContact>(w);

// There is something called generics constraints. This is where we for example, provide two generics T1 and T2,
// and even though T2 object can be of a differnet type that T1 when passed in
// if we want to make sure that we always get back an object of the same type as T1
// Then we add the keyword "extends T1" to T2 so that even if it is a differnet type
// it would at least have to match the properties of T1
// Example:
interface UserContact {
    id: number;
    name: string;
    username: string;
}
function cloneContactWithGenericConstraints<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}
const myContact2: MyContact = { id: 1, name: "Bahaulddin" }
// Here we call our generic contraint function and provide two types 
const myContact2Copy = cloneContactWithGenericConstraints<MyContact, UserContact>(myContact);

// Generics are not only meant for functions, we can apply them on interfaces as well
interface UserContactWithGeneric<TExternalID> {
    id: number;
    name: string;
    tExternalId: TExternalID;
}