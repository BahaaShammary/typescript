/**
 * Q1. Create an interface to describe the items that are in the array of todoItems
 * Q2. Write strongly written values using enum to represing the status in newTodo
 * Q3. Apply types to the parameters and return values of the functions addTodoItem & getNextId
 * Q4. Use a generic parameter to define the parameter type of getNextId
 */

interface ToDoItem {
    id: number;
    title: string;
    status: string;
    completedOn?: Date;
}

enum ToDoItemStatus {
    Done = "done",
    InProgress = "in-progress",
    ToDo = "todo"
}
const todoItems: ToDoItem[] = [
    { id: 1, title: "Learn HTML", status: ToDoItemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ToDoItemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: ToDoItemStatus.ToDo },
]

function addTodoItem(todo: string): ToDoItem {
    const id = getNextId(todoItems)

    const newTodo: ToDoItem = {
        id,
        title: todo,
        status: "todo",
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number; }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))