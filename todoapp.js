const todolist = []

        function add() {
            const taskitem = document.getElementById("task-input")
            if (taskitem.value == "") {
                alert("Please enter a task")
                return
            }
            else{
                todolist.push(taskitem.value)
            }
            taskitem.value = ""
            show()
        }
        function show() {
            const listcontainer = document.getElementById("list-container")
            listcontainer.innerHTML = ""

            for (const item of todolist) {
                listcontainer.innerHTML += `<div class="todo-item"> <input type="checkbox" > ${item}</div>`
            }
        }