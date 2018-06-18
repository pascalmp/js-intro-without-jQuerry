var newItemcounter = 1
var ourList = document.getElementById("our-list")
var ourButton = document.getElementById("our-button")
var ourHeadline = document.getElementById("our-headline")
var listItems = document.getElementById("our-list").getElementsByTagName("li")

for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}
function activateItem(){
    ourHeadline.innerHTML = this.innerHTML;
}
ourButton.addEventListener("click", addItem);

function addItem(){
    ourList.innerHTML += "<li>item " + newItemcounter + "</li>";
    newItemcounter++;
    
}

//
for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}
function activateItem(){
    ourHeadline.innerHTML = this.innerHTML;
    for (i = 0; i < listItems.length; i++){
        listItems[i].classList.remove("active");
    }    
    this.classList.add("active");
}

ourButton.addEventListener("click", addItem);

function addItem(){
    ourList.innerHTML += "<li> item " + newItemcounter + "</li>";
    newItemcounter++;
    
}

//
ourList.addEventListener("click", activateItem);

function activateItem(e){
    if(e.target.nodeName == "LI"){
        ourHeadline.innerHTML = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++){
        e.target.parentNode.children[i].classList.remove("active");
    }    
    e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", addItem);

function addItem(){
    ourList.innerHTML += "<li> item " + newItemcounter + "</li>";
    newItemcounter++;
    
}
