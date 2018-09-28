const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'];

const getStartedButton = document.getElementById('getStarted');

document.getElementById('getStarted').addEventListener ('click' , (event) => {
  getForm();
})

const printToDom = (stringToPrint, whereToPrint) => {
document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// add delete functions

// const activateDeletes = () => {
//   const deleteButtons = document.getElementsById('expel');

//   for (let i = 0; i < deleteButtons.length; i++) {
//       const element = deleteButtons[i];
//       element.addEventListener("click", (e) => {
//           const buttonIClicked = e.target;
//           const cardToDelete = buttonIClicked.parentNode.parentNode;
//           cardToDelete.remove();
//       })
//   }
// }

// form
const getForm = () => {
    let nameForm = `<form class="form-inline">
    <div  id='form' class="form-group mb-2">
      <label for="studentName" id="studentName">Enter First Year's Name</label>
      </div>
      <div id="studentSection>
      <label for="Name" id="Name">Student:</label>
      </div>
      <div>
      <input type="text" id="studentNameInput"> 
      </div>
    </div>
    <div>
    <button type="submit" id="sort">Sort</button>
    </div>
  </form>`;
  printToDom(nameForm, 'form');  
  makeSortWork();

}
// // // sort button  2 Event Listener functionality 

const addStudent = () => {
  const studentInfo = studentNameInput.value;
  let housePicks = houses[Math.floor(Math.random() *houses.length)];
  let studentCard = `<div class="card" style="width: 18rem;">
      <h1 class="studentName">${studentInfo}</h1>
      <h3 class="houseName">${housePicks}</h3>
      <div class="card-body">
      <button type="submit" class="expel">Expel</button>
      </div>
    </div>`;
  printToDom(studentCard,'card');
  removeStudent();
}

const makeSortWork = () =>{
  document.getElementById('sort').addEventListener ('click' , (event) => {
  event.preventDefault()
  addStudent();
})
}

const removeStudent = () => {
  const expelButton = document.getElementsByClassName('expel');

  for (let i =0; i <expelButton.length;i++){
    const element =expelButton[i];
     element.addEventListener('click', (e) =>{
      const buttonIClicked = e.target;
      const cardToDelete = buttonIClicked.parentNode.parentNode;
      cardToDelete.remove();
    })
  }
}
