
add();
const tasksArray = localStorage.getItem('tasks')? localStorage.getItem('tasks').split(','): [];
const addTask=document.querySelector(".addTask");
addTask.onsubmit = getValue;

function getValue(e){
  e.preventDefault();
  const task=e.target.elements['Task'].value;
  if(task!=""){
    if( tasksArray.includes(task)){
      alert("task already exists");
    }else{
      e.target.elements['Task'].value="";
      tasksArray.push(task);
      localStorage.setItem("tasks",tasksArray);
      add();
    }

  }
  else alert("Empty input");

}
function add() {
  const localTasks=localStorage.getItem('tasks')? localStorage.getItem('tasks').split(','): [];
  const tasksList = document.querySelector('.tasks');
  
  let items = localTasks.map((t)=>{
    return `
      <li class='item'>
        <div>
         <input type="checkbox" name="check" onchange="taskDone(this)" />
         <span>${t}</span>
        </div>
        <i class="delete fa-solid fa-minus" style="color: #e09996;" onclick='deleteTask(this)'></i>
      </li>
      `;
  }).join('');
  tasksList.innerHTML=items;
}
function taskDone(element){
  console.log(element);
  element.parentElement.classList.toggle("done");
};
function deleteTask(element){
  console.log(element.parentElement );

  const removedTask = element.parentElement.querySelector('span').textContent ;
  tasksArray.splice(tasksArray.indexOf(removedTask), 1);
  localStorage.setItem("tasks", tasksArray);
    
  element.parentElement.remove(); 

}













