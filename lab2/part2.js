var Implementer = /** @class */ (function () {
    function Implementer() {
        this.Tasks2 = [];
        this.addTask("Work");
        this.addTask("Eat");
        this.addTask("Shower");
        this.listAllTasks();
        this.deleteTask("Shower");
        this.listAllTasks();
        this.deleteTask("WorK"); //wrong
        this.listAllTasks();
    }
    Implementer.prototype.addTask = function (task) {
        var ret = this.Tasks2.push(task);
        console.log("Added " + task + " at index " + (ret - 1));
    };
    Implementer.prototype.listAllTasks = function () {
        var _this = this;
        this.Tasks2.forEach(function (el) {
            console.log("Index " + _this.Tasks2.indexOf(el) + ": " + el);
        });
    };
    Implementer.prototype.deleteTask = function (task) {
        var index = this.Tasks2.indexOf(task);
        if (index == -1) {
            console.log("No elements deleted.");
        }
        else {
            console.log("Deleted " + task + " from Tasks at index " + index);
            this.Tasks2.splice(index, 1);
        }
        console.log("New length of Tasks: " + this.Tasks2.length);
        return this.Tasks2.length;
    };
    return Implementer;
}());
var TC = new Implementer();
