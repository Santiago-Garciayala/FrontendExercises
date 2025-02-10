let Tasks: string[] = [];

function addTask(task: string): void {
  let ret: number = Tasks.push(task);
  console.log("Added " + task + " at index " + (ret - 1));
}

function listAllTasks(): void {
  Tasks.forEach((el) => {
    console.log("Index " + Tasks.indexOf(el) + ": " + el);
  })
}

function deleteTask(task: string): number {
  let index: number = Tasks.indexOf(task);

  if (index == -1) {
    console.log("No elements deleted.");
  } else {
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

