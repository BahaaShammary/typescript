interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}
 
/* 
    authorize(): A method decorator which applies to a method
    target: this is the object the decorator being applied to 
            In the case of a method decorator, it is the instance of the object that
            the method belongs to
    property: The name of the property that the decorator is applied to
    descriptor: An object containing the current metadata about the property
*/
function authorize(role: string) {
    return function authorizeDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
        const wrapped = descriptor.value
        descriptor.value = () => {
            if (!currentUser.isInRole(role)) {
                throw Error("User is not authenticated")
            }
            try {
                return wrapped.apply(this, arguments);
            } catch (ex) {
                // TODO: some fancy logging logic here
                throw ex;
            }
        }
    }    
}

class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        console.trace(`ContactRepository.getContactById: BEGIN`);

        if (!currentUser.isInRole("ContactViewer")) {
            throw Error("User not authorized to execute this action");
        }

        const contact = this.contacts.find(x => x.id === id);

        console.debug(`ContactRepository.getContactById: END`);

        return contact;
    }

    save(contact: Contact): void {
        console.trace(`ContactRepository.save: BEGIN`);

        if (!currentUser.isInRole("ContactEditor")) {
            throw Error("User not authorized to execute this action");
        }

        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }

        console.debug(`ContactRepository.save: END`);
    }
}