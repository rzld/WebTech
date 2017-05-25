addEventListener('load', start);
function start() {
  var button = document.querySelector("#x");
  button.onclick = fetchData;
  console.log("start");
}

function fetchData() {
  var q = new XMLHttpRequest();
  q.onreadystatechange = receive;
  q.open("GET", "/data", true);
  q.send();
  console.log("fetch");
}

function receive() {
  if (this.readyState != XMLHttpRequest.DONE) return;
  var list = JSON.parse(this.responseText);
  var html = "<li>" + list.title + "</li>" ;
  var ul = document.querySelector("#movielist");
  ul.innerHTML = html;
  console.log("receive");
}
