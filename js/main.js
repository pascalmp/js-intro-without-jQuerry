var listItems = document.getElementById("our-list").getElementsByTagName("li")

for (i = 0; i < listItems.length; i++){
    listItems[i].innerHTML = "Hello There";
}