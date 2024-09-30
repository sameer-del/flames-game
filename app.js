 let lover1 = document.getElementById("love1");
let lover2 = document.getElementById("love2");
let result = document.getElementById("result");
let heading = document.getElementById("head");
let modal = document.getElementById("modal");
let modalMessage = document.getElementById("modalMessage");


function getname() {
  let firstName = lover1.value;
  let secondName = lover2.value;

  flames(firstName, secondName);
  let restart = document.createElement("button");
  restart.className = "button-restart";
  restart.textContent = "Restart";
  restart.style.display = "block";
  restart.style.marginTop = "20px";

  // Append the restart button to the body or another container
  result.appendChild(restart);

  // Add click event listener to reset the game
  restart.addEventListener("click", function () {
    // Clear the inputs and result
    lover1.value = "";
    lover2.value = "";
    result.innerHTML = "";
    heading.innerHTML = "FLAMES"; // Reset the heading text
    heading.style.fontSize = "30px"; // Reset font size if changed

    // Optionally, remove the restart button after it's clicked
    restart.remove();
  });
}

function flames(firstName, secondName) {
    let firstLength = firstName.length;
    let secondLength = secondName.length;
    let final = firstLength + secondLength;
    let text = heading.innerHTML.split('');
    let interval =setInterval(function removeElement(){
        if (text.length === 1) {
            clearInterval(interval); 
            celebrations();        
            return;     
        }
        let indexToRemove = (final - 1) % text.length;
        text.splice(indexToRemove, 1);
         heading.innerHTML = text.join('');
         text = [...text.slice(indexToRemove), ...text.slice(0, indexToRemove)]; 
    },1000)
} 
function celebrations(){
    
    let originalText = heading.innerHTML.toLowerCase();
    
    if (originalText.includes("m")) {
        heading.innerHTML = "marriage";
    } else if (originalText.includes("f")) {
        heading.innerHTML = "friends";
    } else if (originalText.includes("l")) {
        heading.innerHTML = "lovers";
    } else if (originalText.includes("e")) {
        heading.innerHTML = "enemy";
    } else if (originalText.includes("a")) {
        heading.innerHTML = "arranged";
    } else if (originalText.includes("s")) {
        heading.innerHTML = "sister";
    }
    heading.style.fontSize = "45px";
    heading.style.margin="0px 15px"
   
    
}



 
    





