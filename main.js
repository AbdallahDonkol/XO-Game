let box = document.querySelectorAll("li");

let tic = "X"
// click on boxes
function game(id){
    let element = document.getElementById(id);
    if(tic === "X" && element.innerHTML === ""){
        element.innerHTML = tic; //X
        tic = "O";
    }else if(tic === "O" && element.innerHTML === "" ){
        element.innerHTML = tic; //O
        tic = "X";
    }
    check();
}
// check boxes function
function check(){
    if(box[0].innerHTML === box[1].innerHTML && box[1].innerHTML === box[2].innerHTML && box[0].innerHTML !== ""){
        box[0].style.backgroundColor = "black";
        box[1].style.backgroundColor = "black";
        box[2].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[0].innerHTML}`;
    }else if(box[0].innerHTML === box[3].innerHTML && box[3].innerHTML === box[6].innerHTML && box[0].innerHTML !== ""){
        box[0].style.backgroundColor = "black";
        box[3].style.backgroundColor = "black";
        box[6].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[0].innerHTML}`;
    }else if(box[0].innerHTML === box[4].innerHTML && box[4].innerHTML === box[8].innerHTML && box[0].innerHTML !== ""){
        box[0].style.backgroundColor = "black";
        box[4].style.backgroundColor = "black";
        box[8].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[0].innerHTML}`;
    }else if(box[1].innerHTML === box[4].innerHTML && box[4].innerHTML === box[7].innerHTML && box[1].innerHTML !== ""){
        box[1].style.backgroundColor = "black";
        box[4].style.backgroundColor = "black";
        box[7].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[1].innerHTML}`;
    }else if(box[2].innerHTML === box[5].innerHTML && box[5].innerHTML === box[8].innerHTML && box[2].innerHTML !== ""){
        box[2].style.backgroundColor = "black";
        box[5].style.backgroundColor = "black";
        box[8].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[2].innerHTML}`;
    }else if(box[2].innerHTML === box[4].innerHTML && box[4].innerHTML === box[6].innerHTML && box[2].innerHTML !== ""){
        box[2].style.backgroundColor = "black";
        box[4].style.backgroundColor = "black";
        box[6].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[2].innerHTML}`;
    }else if(box[3].innerHTML === box[4].innerHTML && box[4].innerHTML === box[5].innerHTML && box[3].innerHTML !== ""){
        box[3].style.backgroundColor = "black";
        box[4].style.backgroundColor = "black";
        box[5].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[3].innerHTML}`;
    }else if(box[6].innerHTML === box[7].innerHTML && box[7].innerHTML === box[8].innerHTML && box[6].innerHTML !== ""){
        box[6].style.backgroundColor = "black";
        box[7].style.backgroundColor = "black";
        box[8].style.backgroundColor = "black";
        document.querySelector(".winner").innerHTML = `winner is ${box[6].innerHTML}`;
    }
    
}

document.querySelector("button").onclick = () =>{
    document.querySelector(".winner").innerHTML = "";
    box.forEach(function(ele){
        ele.style.backgroundColor = "#d1c2ce";
        ele.innerHTML = "";
    })
    tic = "X";
    
}
