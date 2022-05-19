document.getElementById("enviar").onclick = function () {
  let taskList = document.createElement("li");

  let taskDescription = document.createTextNode(
    document.getElementById("input").value
  );

  taskList.appendChild(taskDescription);

  if (document.getElementById("input").value.length == 0) {
    alert("Escreva uma tarefa");
  } else {
    document.getElementById("mylist").appendChild(taskList);
  }

  document.getElementById("input").value = "";
  let span = document.createElement("span");
  let icon = document.createElement("i");
  span.className = "delete";
  icon.className = "bi bi-trash";
  icon.style.color = "red";
  span.appendChild(icon);
  taskList.appendChild(span);

  let deleteTask = document.getElementsByClassName("delete");
  for (i = 0; i < deleteTask.length; i++) {
    deleteTask[i].onclick = function () {
      let div = this.parentElement;
      this.parentElement.remove();
    };
  }
};

let taskItem = document.querySelector("ul");
taskItem.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
