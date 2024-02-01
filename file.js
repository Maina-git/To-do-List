
const input=document.getElementById("text");
const addTask=document.getElementById("btn");
const box=document.getElementById("box");

addTask.addEventListener("click",()=>{

if(input.value==""){
    alert("add task");
    li.style.dispaly="none";
    addBtn.style.display="none";
    deletebtn.style.display="none";
}


let li=document.createElement("li");
li.innerHTML=`${input.value}`;
li.classList.add("li");
box.appendChild(li);

let addBtn=document.createElement("button");
addBtn.classList.add("ADD");
addBtn.innerText="O";
box.appendChild(addBtn);

let deletebtn=document.createElement("button");
deletebtn.classList.add("delete");
deletebtn.innerText="DEL";
box.appendChild(deletebtn);

input.value="";


addBtn.addEventListener("click",()=>{
li.innerText="COMPLETED";
});

deletebtn.addEventListener("click",()=>{
li.style.display="none";
deletebtn.style.display="none";
addBtn.style.display="none";
});

});








