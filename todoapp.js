const toDoList = []

        function add() {
            const taskitem = document.getElementById("task-input")
            if (taskitem.value == "") {
                alert("Please enter a task")
                return
            }
            else{
                toDoList.push(taskitem.value)
            }
            taskitem.value = ""
            localStorage.setItem("toDoList", JSON.stringify(toDoList))
            show()
            show()
        }
        function clearTask(){
            localStorage.removeItem("toDoList")
            toDoList.length = 0
            show()
        }
        function show() {
            const listcontainer = document.getElementById("list-container")
            listcontainer.innerHTML = ""

            for (const item of toDoList) {
                listcontainer.innerHTML += `<div class="todo-item"> <input type="checkbox" > ${item}</div>`
            }
        }