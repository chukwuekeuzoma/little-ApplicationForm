var body = document.getElementsByTagName("BODY")[0];
var Ul = document.getElementById("ul-items");
var FirstInput = document.getElementById("First-input");
var SecondInput = document.getElementById("Second-input");
var button = document.getElementById("button");
var mousepointer = document.getElementById("mouse-pointer");
var mainInput = document.querySelector('input[type="submit"]');
var form =document.getElementById("form");
var divhello = document.getElementById("headerthreetag");
var hello = document.createElement("h3");
var helloYes = document.createTextNode("Hello hover here to change background color");
var fliter = document.getElementById("fliter");

body.style.backgroundColor ="lightergrey";

button.addEventListener("click",textcreated);

function textcreated (){ 
if(inputvalue() > 0){
var Li = document.createElement("li");
var newLi = document.createTextNode(FirstInput.value);
Li.appendChild(newLi);
Ul.appendChild(Li);
FirstInput.value="";}
}

function inputvalue(){
    return FirstInput.value.length;
};

hello.appendChild(helloYes);
divhello.appendChild(hello);
divhello.style.height="200px";
divhello.style.width="400px";
divhello.style.backgroundColor="lightgrey";

divhello.addEventListener("mousemove",RunEvent);
function RunEvent(e){
    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
};
 
// Another section of function that you can add Element 
form.addEventListener("submit",RealTextCreated);
 function RealTextCreated(e){
   e.preventDefault();
   var Li = document.createElement("li");
   Li.className = "list-group-item";
   Li.appendChild(document.createTextNode(FirstInput.value));
   
   //to crate the delete button 
   var deleteButton = document.createElement("button");
   deleteButton.className ="btn btn-danger btn-sm float-right delete";
   deleteButton.appendChild(document.createTextNode("X"))
   Li.appendChild(deleteButton);
   Ul.appendChild(Li);
   FirstInput.value = "";

}

// section Delete 
Ul.addEventListener("click",Deletedelete)

function Deletedelete (e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure")){
            let li = e.target.parentElement;
            Ul.removeChild(li);
        }
    }
}

fliter.addEventListener("keyup",fliterItems)
function fliterItems(e){
 var text = e.target.value.toLowerCase();
 var li = document.getElementsByTagName("li");
 Array.from(li).forEach(function (items){
    var arrayItems = items.firstChild.textContent; 
    if(arrayItems.toLowerCase().indexOf(text) != -1){
        items.style.display ="block";}
    else {
            items.style.display ="none"
        }
 })
 
}
