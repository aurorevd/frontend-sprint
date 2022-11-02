let Tasks = [{
        name: "",
        description:"",
        status:"",
        date: "",
        dueDate: ''
      }];

const List = document.querySelector('#List');

const taskName = document.createElement('p');

let selectedTask = null;

if(localStorage.getItem('tasks')){
  Tasks = JSON.parse(localStorage.getItem('tasks'));
  show();
}

function addTask(){
  const taskName = document.querySelector('#name') ;
  const taskDescription = document.querySelector('#description');
  const taskStatus = document.querySelector('#status'); 
  const taskDate = document.querySelector('#date');

  if(taskName !== '' && taskDescription !== ''&& taskStatus !== ''&& taskDate !== ''){
        Tasks.push({
        name: taskName.value,
        description: taskDescription.value,
        status: taskStatus.value,
        date: taskDate.value,
        dueDate: Math.ceil((new Date(taskDate.value).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
      });

      localStorage.setItem('tasks', JSON.stringify(Tasks));
      taskName.value = '';
      taskDescription.value = '';
      taskDate.value = '';
  }
  show();
}

document.querySelector('#Add').addEventListener('click', addTask);

function show(){
List.innerHTML = '';
  
  for (let i=0; i<Tasks.length; i++) {

    const task = Tasks[i];

    const newDiv = document.createElement('div');
    newDiv.classList ='task';

    const taskName = document.createElement('p');
    taskName.innerText = task.name;
    newDiv.appendChild(taskName);
    taskName.classList='task';

    const taskDescription = document.createElement('p');
    taskDescription.innerText = task.description;
    newDiv.appendChild(taskDescription);


    const taskDate = document.createElement('p');
    taskDate.innerText = task.dueDate + ' days';
    newDiv.appendChild(taskDate);

    const buttons= document.createElement('div');
    buttons.classList='flex';
    newDiv.appendChild(buttons);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'DELETE';
    deleteButton.className = 'delete-button';

    buttons.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
    Tasks.splice(i, 1);
    show();
    localStorage.setItem('tasks', JSON.stringify(Tasks));
    });
    
    const editButton = document.createElement('button');
    editButton.innerText = 'EDIT';
    editButton.className = 'editButton';

    editButton.addEventListener('click', () => {
      document.querySelector('.edit').style.display = 'flex';
      selectedTask = i;
      document.querySelector('#editName').value = task.name;
      document.querySelector('#editDescription').value = task.description;
      document.querySelector('#editStatus').value = task.status;
      document.querySelector('#editDate').value = task.date;
    });
    buttons.appendChild(editButton);  
    List.appendChild(newDiv);
  }
}

document.querySelector('#Ok').addEventListener('click', () => {
    Tasks[selectedTask] = {
    name: document.querySelector('#editName').value,
    description: document.querySelector('#editDescription').value,
    status: document.querySelector('#editStatus').value,
    date: document.querySelector('#editDate').value,
    dueDate: Math.ceil((new Date(document.querySelector('#editDate').value).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  };

  show();
  localStorage.setItem('tasks', JSON.stringify(Tasks));
  document.querySelector('.edit').style.display = 'none';
});

const organize= document.querySelector("#organize");
organize.addEventListener("change", () => 
{
 if (organize.value == "a"){
    Tasks.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
      return -1;
      }
      if (nameA > nameB) {
      return 1;
      }
    return 0;
    });
  } 

else {
    Tasks.sort(function (a, b) {
    return a.dueDate - b.dueDate;
    });
    }
    show();
});

const filterStatus= document.querySelector("#filterStatus");

filterStatus.addEventListener("change", () => 
{ 
  if (filterStatus.value == "c"){
    show();
  }
  else if (filterStatus.value =="d"){
    let x=Tasks;
    const result = Tasks.filter(Task => Task.status==="0" );
    Tasks= result;
    show();
    Tasks=x;
  }
  else if (filterStatus.value =="e"){
    let x=Tasks;
     result = Tasks.filter(Task => Task.status==="1" );
     Tasks= result;
    show();
    Tasks=x;

  }
  else {
     let x=Tasks;
    const result = Tasks.filter(Task => Task.status==="2" );
    Tasks= result;
    show();
    Tasks=x;
  }
});


