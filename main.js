function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event, el) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  el.appendChild(document.getElementById(data));
}

// const nodes = x.getElementsByTagName("img");
// for (let i = 0; i < nodes.length; i++) {
//   nodes[i].setAttribute("draggable", "true");
// }
