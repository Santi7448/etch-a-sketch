
  function resetGrid() {
    
       while(main.firstChild) main.removeChild( main.firstChild);

       actualGrid(20) 

  }


  function customPrompt() {
    let value = prompt('Enter grid size');

    while(main.firstChild) main.removeChild( main.firstChild);

    actualGrid(value);
  }

   let custom = document.querySelector('#custom')

   let reset = document.querySelector('#reset');

   custom.addEventListener('click', customPrompt)


   reset.addEventListener('click', resetGrid);
   
   
   function actualGrid(input) {
 
for (let i = 0; i < input; i++) {

    let row = createRow();

for(let k = 0; k < input; k++)

    createElement(row);
};

   }


function createRow() {

let main = document.querySelector("#main");

let row = document.createElement("div");

row.className = "row";

main.appendChild(row);
return row;

}

function createElement(main) {
    let elem = document.createElement('div');

    elem.className = "elem";
    main.appendChild(elem);
    elem.addEventListener('mouseenter', () => elem.style.backgroundColor = 'black');
    let reset = document.querySelector('#reset');
    reset.addEventListener('click', () => elem.style.backgroundColor = 'white');
    

}


actualGrid(20);
 

















