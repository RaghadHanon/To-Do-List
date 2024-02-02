

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






