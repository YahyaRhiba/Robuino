let addTaskInputElement = document.querySelector(".add-task input");
let tasksDivParent = document.querySelector(".tasks");


updateTasks();


let addTaskElement = document.querySelector(".add-task button").addEventListener("click", () => {

    let newTaskValue = addTaskInputElement.value;

    if (!localStorage.getItem("tasks")) {
        let tasks = new Array();
        tasks[0] = newTaskValue;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[tasks.length] = newTaskValue;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    console.log(JSON.parse(localStorage.getItem("tasks")));

    updateTasks();

    addTaskInputElement.value = "";
});


function updateTasks() {
    let tasksDiv = document.querySelectorAll(".task");
    tasksDiv.forEach(element => {
        element.remove();
    });

    if (localStorage.getItem("tasks")) {

        let tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.forEach(element => {

            let divTaskElement = document.createElement("div");
            divTaskElement.className = "task";

            let pTaskElement = document.createElement("p");
            pTaskElement.className = "task-title";

            let btnTaskElement = document.createElement("button");
            let TextBtn = document.createTextNode('delete');
            btnTaskElement.appendChild(TextBtn);

            let TextValue = document.createTextNode(element);
            pTaskElement.appendChild(TextValue);

            divTaskElement.appendChild(pTaskElement);
            divTaskElement.appendChild(btnTaskElement);

            tasksDivParent.appendChild(divTaskElement);

        });


        let tasksDiv = document.querySelectorAll(".task");

        tasksDiv.forEach(element => {
            element.querySelector("button").addEventListener('click', function () {
                let task = element.querySelector(".task-title").textContent;
                let tasks = JSON.parse(localStorage.getItem("tasks"));
                tasks.splice(tasks.indexOf(task), 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));

                location.reload();
            });
        });


    }
}