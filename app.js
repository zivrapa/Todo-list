let quit = false;
const toDo = ['clean mess', 'but stuff'];
let input = prompt("What do you want to do?");

while (!quit) {
    let input = prompt("What do you want to do?");

    if (input === "new") {
        let newTodo = prompt("Enter the new Todo:");
        toDo.push(newTodo);
        console.log(`Ok, ${newTodo} added to the list`)
    }
    if (input === "list") {
        console.log("***************")
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("***************")
    }

    if (input === "delete") {
        const deletTodo = parseInt(prompt("choose the Todo no. to delete"));
        if (!Number.isNaN(deletTodo)) {
            toDo.splice(deletTodo, 1);
            console.log(`Ok you deleted ${deletTodo}`)
        } else {
            prompt("Enter a valid no.");
        }
    }
    if (input === "quit") {
        quit = true;
    }
}