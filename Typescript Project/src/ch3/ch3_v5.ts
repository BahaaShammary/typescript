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
