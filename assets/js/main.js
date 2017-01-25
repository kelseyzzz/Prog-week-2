

function createToDoItem(toDoList, toDoValue) {
	var toDoItem = document.createElement("li"); 

	toDoItem.innerHTML = toDoValue;
	toDoItem.classList.add("todo-item");

	toDoList.appendChild(toDoItem);

	var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = 1;
            checkbox.name = "todo[]";
        
        toDoItem.appendChild(checkbox);

	checkbox.addEventListener("click", done);

}


function done() {
	if (this.checked) {
		addClass(this.parentElement, "done");
	} else{
		removeClass(this.parentElement, "done");
	}
}


function toggleListVisibility(toDoList) {
	var listArea = document.querySelector(".list-area");

	if(toDoList.children.length >= 1) {
		listArea.classList.remove("hidden");
	} else{
		listArea.classList.add("hidden");
	}
}





window.onload = function () {
	var form = document.querySelector("form");
	form.addEventListener("submit", function(e) {
		e.preventDefault();

		var toDoList = document.querySelector(".todo-list");
		var formInput = document.querySelector("#item-input");
		var inputValue = formInput.value;

		createToDoItem(toDoList, inputValue);
		toggleListVisibility(toDoList);

		formInput.value = "";
	});
}