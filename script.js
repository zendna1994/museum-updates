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
function loadAdmin() {

  fetch(`${API}?action=adminData&key=${KEY}`)
    .then(res => res.json())
    .then(res => {

      if (res.status !== "success") return;

      document.getElementById("a_users").innerText = res.users;
      document.getElementById("a_specimens").innerText = res.specimens;
      document.getElementById("a_logs").innerText = res.logs;

    });
}
// load on start
loadHistory();
