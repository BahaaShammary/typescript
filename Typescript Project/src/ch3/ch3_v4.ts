// Indexed access types
// How to determine the type of a certain property/s of a target object with Indexed access type
// Example 
type someContact = {
    id: number;
    name: string;
    birthdate?: Date;
    address: Address;
}
// access the type of someContact property id
type singleAccessType = someContact["id"]
// access the type of someContact property address and then get the type of city property in Address
type doubleAccessType = someContact["address"]["city"]

interface ContactEvent {
    contactId: UnadressableContact["id"]; // we can put number as the type or actually link it to the Contact type
}

interface ContactDeletedEvent extends ContactEvent {}
// We can reference the type of properties that belong to another object
interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: UnadressableContact["status"],
    newStatus: UnadressableContact["status"]
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
}

function handleEvent<T extends keyof ContactEvents>(
    eventName: T, 
    handler : (evt: ContactEvents[T]) => void
    ) {
        if (eventName === "statusChanged") {
            handler({contactId: 1, oldStatus: "active", newStatus: "inactive"})
        }
}

handleEvent("statusChanged", evt => evt);