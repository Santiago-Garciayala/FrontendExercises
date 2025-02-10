var Tasks = [];
function addTask(task) {
    var ret = Tasks.push(task);
    console.log("Added " + task + " at index " + (ret - 1));
}
function listAllTasks() {
    Tasks.forEach(function (el) {
        console.log("Index " + Tasks.indexOf(el) + ": " + el);
    });
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index == -1) {
        console.log("No elements deleted.");
    }
    else {
        console.log("Deleted " + task + " from Tasks at index " + index);
        Tasks.splice(index, 1);
    }
    console.log("New length of Tasks: " + Tasks.length);
    return Tasks.length;
}
addTask("Work");
addTask("Eat");
addTask("Shower");
listAllTasks();
deleteTask("Shower");
listAllTasks();
deleteTask("WorK"); //wrong
listAllTasks();
