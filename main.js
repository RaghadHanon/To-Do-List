
add();
const tasksArray = localStorage.getItem('tasks')? localStorage.getItem('tasks').split(','): [];
const addTask=document.querySelector(".addTask");
addTask.onsubmit = getValue;

function getValue(e){
  e.preventDefault();
  const task=e.target.elements['Task'].value.trim();
  if(task!=""){
    
    e.target.elements['Task'].value="";
    if( tasksArray.includes(task)){
      alert("task already exists");
    }else{
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









/*
const addTask=document.querySelector(".addTask");
addTask.onsubmit = getValue;

function getValue(e){
  e.preventDefault();
  const task=e.target.elements['Task'].value;
  if(task!=""){
    e.target.elements['Task'].value="";
    add(task);
  }
  else alert("Empty input");

}

function add(task) {
  
  const tasksList = document.querySelector('.tasks');

  const checkDiv = document.createElement('div');
  checkDiv.innerHTML= `
      <input type="checkbox" name="check" class="checkBoxInput" />
      <span>${task}</span>
  `;

  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.appendChild(checkDiv);
  listItem.innerHTML += `
      <i class="delete fa-solid fa-minus" style="color: #e09996;"></i>
  `;

  tasksList.appendChild(listItem);

  listItem.addEventListener('change', function (e) {
   if (e.target.classList.contains('checkBoxInput')) {
      taskDone(e);
    }
  });
  
  tasksList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      deleteTask(e);
    }
  });

}
function taskDone(e){
  e.preventDefault();
  e.target.nextElementSibling.classList.toggle("done");
};
function deleteTask(e){
    e.preventDefault();
    console.log(  e.target);
    e.target.parentElement.remove(); 
}

*/









