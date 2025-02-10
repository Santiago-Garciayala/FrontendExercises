class Implementer implements ITasks {
  Tasks2: string[] = [];

  constructor() {
    this.addTask("Work");
    this.addTask("Eat");
    this.addTask("Shower");
    this.listAllTasks();
    this.deleteTask("Shower");
    this.listAllTasks();
    this.deleteTask("WorK"); //wrong
    this.listAllTasks();
  }

  addTask(task: string): void {
    let ret: number = this.Tasks2.push(task);
    console.log("Added " + task + " at index " + (ret - 1));
  }

  listAllTasks(): void {
    this.Tasks2.forEach((el) => {
      console.log("Index " + this.Tasks2.indexOf(el) + ": " + el);
    })
  }

  deleteTask(task: string): number {
    let index: number = this.Tasks2.indexOf(task);

    if (index == -1) {
      console.log("No elements deleted.");
    } else {
      console.log("Deleted " + task + " from Tasks at index " + index);
      this.Tasks2.splice(index, 1);
    }

    console.log("New length of Tasks: " + this.Tasks2.length);
    return this.Tasks2.length;
  }
}

interface ITasks {
  Tasks2: string[];

  addTask(task: string): void;
  listAllTasks(): void;
  deleteTask(task: string): number;
}

let TC: Implementer = new Implementer();
