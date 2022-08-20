// we can extend the class definition by defining an interface
// Typescript has declaration merging which allows extending an existing interface
interface Customer {
    /** saves the customer */
    save(): void
}
class Customer {}

const customer = new Customer()
// we are adding .save even though it is not defined in the class
customer.save = function(){}