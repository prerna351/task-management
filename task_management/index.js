const taskContainer = document.querySelector(".task_container")
let globalTaskData = [];

const addNewCard = () =>{

    //get task data
    const taskData = {
        id: `${Date.now()}`,
        title: document.getElementById("taskTitle").value,
        image: document.getElementById("imageUrl").value,
        task: document.getElementById("taskType").value,
        discription: document.getElementById("taskDescription").value
    };
    console.log(taskData);

    globalTaskData.push(taskData);

    //update the local Storage
    localStorage.setItem("tasky", JSON.stringify({card: globalTaskData})); //we cannot directly write globalTaskDAta inside the () beacause GTD is an array and JASON requires you to provide an object
    
    //generate HTML code
    const newCard = `<div id=${taskData.id} class=" col-md-6 col-lg-4 my-4">
    <div class="card ">
        <div class="card-header d-flex justify-content-end gap-1">
          <button class="btn btn-outline-info"> 
            <i class="fa-solid fa-pencil"></i>
          </button>

          <button class="btn btn-outline-danger"> 
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div class="card-body">
            <img src=${taskData.image} alt="landscape" class="card-img">
          <h5 class="card-title mt-4">${taskData.title}</h5>
          <p class="card-text">${taskData.discription}</p>
          <span class="badge bg-primary">${taskData.type}</span>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-primary">Open Task</button>
        </div>
      </div>
</div>`;

    //inject it to DOM
    taskContainer.insertAdjacentHTML("beforeend", newCard)

    //clear form
    document.getElementById("taskTitle").value="";
    document.getElementById("imageUrl").value="";
    document.getElementById("taskType").value="";
    document.getElementById("taskDescription").value="";

    return;
};

const loadExistingCards = () =>{

  //check local storage
  const getData = localStorage.getItem("tasky");

  //parse JSON data, if exists
  if(!getData) return;
  
  const taskCards = JSON.parse(getData);
  globalTaskData = taskCards.card;
  globalTaskData.map((task)) =>{
    
  }
  //generate HTMl code for those data


  //inject it to the DOM
}