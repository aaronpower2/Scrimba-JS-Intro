let listItems = [];
let listHistory = [];

function addItems() {

    // create and append new list item element into the shopping list
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    let list = document.getElementById("shoppingList");
    let item = document.getElementById("itemInput").value;
    let liText = document.createTextNode(item);
    li.appendChild(liText);
    list.appendChild(li);

    // check if the input item exists in history, and if not - add it to the history
    if (listHistory.includes(item) === false) {
       listHistory.push(item);
       updateHistory(listHistory[listHistory.length - 1]);
    }

    
    function updateHistory(item) {
        
        console.log(listHistory);
        let test = document.getElementById("listHistory").innerHTML;
        console.log(test);                                                          // check if there are any items in the list already
        let hList = document.getElementById("listHistory");                         // get the list element from document
        let hLi = document.createElement("li");                                     // create an empty list item
        hLi.classList.add("list-group-item");                                       // style the new element
        let hliText = document.createTextNode(item);   // get the text for the list item from the last position of the history array (updated on each click)
        hLi.append(hliText);                                                        // append the text from array to the list item element
        
        if (document.getElementById("listHistory").hasChildNodes() === false) { 
            console.log("Has child nodes");                                             // if there aren't log to console
            hList.appendChild(hLi);                                                     // append the populated list item element to the list element
        } else {
            console.log("list is not empty");
            hList.prepend(hLi);
        }
    }                                                                            // console.log(listHistory.includes(item));
}

function clearList() {
    let list = document.getElementById("shoppingList");
    list.innerHTML = "";
    
}


document.getElementById("btnAddItem").addEventListener("click", addItems);
document.getElementById("itemInput").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        console.log("enter was pressed");
        addItems();
        document.getElementById("itemInput").value ="";
    }
})
document.getElementById("btnClearList").addEventListener("click", clearList);