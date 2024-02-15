 // Get a reference to the grid container
function buildGrid (g) {

 var gridContainer = document.getElementById('gridContainer');

 // Loop to create 64 div elements (8x8 grid)
 for (var i = 0; i < g; i++) {
     var div = document.createElement('div');
     div.classList.add('div-container');
     //div.textContent = i + 1; // Optionally, set content
     
//  for (var i = 0; i < g; i++){
//     var div2 = document.createElement('div');
//     div2.classList.add('grid-item-2');
//     div.appendChild(div2);
//  }
gridContainer.appendChild(div);
 
for (let i = 0; i < g; i++){
 var div2 = document.createElement('div');
 div2.classList.add('grid-item');
 div.appendChild(div2);

 div2.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#ff9999'; // Change background color on hover
});

 div2.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#ccc'; // Revert back to default background color on mouse leave
});
}


 }
 
}

var question
//buildGrid(question * question)

var mainButton = document.getElementById('main-button')
mainButton.addEventListener('click', function(){
    question = prompt('what?')
    buildGrid(question)
})
mainButton.appendChild(body)

