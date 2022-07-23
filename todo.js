var data =[];

function ShowAll() {
    var h1 = document.querySelector("h1");
    h1.innerText = "ToDo List - All";

   const para = document.querySelectorAll("p");
   for(let i=0; i<para.length;i++){
       var ptag = para[i];
       document.body.removeChild(ptag);
   } 
   for (let i=0; i<data.length; i++) {
       var obj = data[i];
       var p = document.createElement("p");
       if(obj.completed){
           p.style.color = "green";
       } else {
           p.style.color = "red";
       }
       p.innerText = obj.title;
       document.body.appendChild(p);
   }
}

function showCompleted() {
    var h1 = document.querySelector("h1");
    h1.innerText = "ToDo List - Completed";

    const para = document.querySelectorAll("p");
    for(let i=0; i<para.length;i++){
        var ptag = para[i];
        document.body.removeChild(ptag);
    } 
    for (let i=0; i<data.length; i++) {
        var obj = data[i];
        if(obj.completed){
            var p = document.createElement("p");
            p.style.color = "green";
            p.innerText = obj.title;
            document.body.appendChild(p);
        }
    }
}
function Pending(){
    var h1 = document.querySelector("h1");
    h1.innerText = "ToDo List - Pending";

    const para = document.querySelectorAll("p");
    for(let i=0; i<para.length;i++){
        var ptag = para[i];
        document.body.removeChild(ptag);
    } 
    for (let i=0; i<data.length; i++) {
        var obj = data[i];
        if(!obj.completed){
            var p = document.createElement("p");
            p.style.color = "red";
            p.innerText = obj.title;
            document.body.appendChild(p);
        }
    }
}

window.onload = async () => {
    var response = await fetch('https://jsonplaceholder.typicode.com/todos', {method : "GET"});

    data = await response.json();
    ShowAll();
}