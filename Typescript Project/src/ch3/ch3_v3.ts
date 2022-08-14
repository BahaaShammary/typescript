// type of operator

const x1 = "string";
const y1 = true;
console.log(typeof x1);  // = "string"
console.log(typeof y1);  // = boolean


// function toContact(nameOrContact) : Contact {
//     if (typeof nameOrContact === "object") {
//         return {
//             id: nameOrContact.id,
//             name: nameOrContact.name,
//             status: nameOrContact.status
//         }
//     }
//     else {
//         return {
//             id: 0,
//             name: nameOrContact,
//             status: "active"
//         }
//     }
// }

const sizeType = {min : 1, max: 100};
// This way we know anytime someone calls this function
// The parameter they pass must match the same structure as what was defined in "sizeType"
// This is helpful when you don't have a type in advance and only able to know it during run time
// then define the variable as the same type of whatever that const is
const save = (source: typeof sizeType) => (
    source.max
)