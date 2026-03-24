function loadHistory() {
  let h = JSON.parse(localStorage.getItem("history")) || [];
  let list = document.getElementById("historyList");

  list.innerHTML = "";

  h.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// load on start
loadHistory();
