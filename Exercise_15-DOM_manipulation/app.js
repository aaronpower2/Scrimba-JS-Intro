function addItem() {
    let ulNode = document.getElementById("para");
    let inputText = document.querySelector('.input').value;
    let liNode = document.createElement('li');
    let liText = document.createTextNode(inputText);
    liNode.appendChild(liText);
    ulNode.appendChild(liNode);
}

