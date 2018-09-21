// // console.log('Sorting Hat');
// const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'];

let getStartedButton = document.getElementById('getStarted');
// console.log(getStartedButton);

document.getElementById('getStarted').addEventListener ('click' , function (event) {
//  console.log("event",event)
});

const printToDom = (stringToPrint, whereToPrint) => {
document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// printToDom('hey' ,'form');



// stoped here thursday night
// const getForm = () => {
// let nameForm = `<form class="form-inline">
// <div class="form-group mb-2">
//   <label for="staticEmail2" class="sr-only">Email</label>
//   <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
// </div>
// <div class="form-group mx-sm-3 mb-2">
//   <label for="inputPassword2" class="sr-only">Password</label>
//   <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
// </div>
// <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
// </form>`;

//      printToDom(nameForm, 'form');
// };

