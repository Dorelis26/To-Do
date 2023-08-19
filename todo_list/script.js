const add = document.querySelector("button");
const usersinput = document.querySelector(".task");

add.addEventListener("click", function() {
    if(usersinput.value.length > 0){
        const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "settings";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(usersinput.value));
    
    document.querySelector("ul").appendChild(li);
    usersinput.value="";
    }
    
});

usersinput.addEventListener("keypress", function() {
    if(usersinput.value.length > 0 && event.keyCode===13){
        const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "settings";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(usersinput.value));
    
    document.querySelector("ul").appendChild(li);
    usersinput.value="";
    }
    
});

  
