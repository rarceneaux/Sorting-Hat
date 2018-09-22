// // console.log('Sorting Hat');
// const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'];

let getStartedButton = document.getElementById('getStarted');
// console.log(getStartedButton);

document.getElementById('getStarted').addEventListener ('click' , (event) => {
 getForm();
});

const printToDom = (stringToPrint, whereToPrint) => {
document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// printToDom('hey' ,'form');

const getForm = () => {
    let nameForm = `<form class="form-inline">
    <div class="form-group mb-2">
      <label for="" class="sr-only">Email</label>
      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="" class="sr-only">Password</label>
      <input type="text" class="form-control" id="inputPassword2" placeholder="">
    </div>
    <button type="submit" class="btn btn-primary mb-2">SORT!</button>
  </form>`;
  printToDom(nameForm, 'form');
}
