document.addEventListener("DOMContentLoaded", function() {
  fetch("http://localhost:5000/getAll")
    .then(response => response.json())
    .then(data => console.log(data));
  loadData([]);
});

function loadData(data) {
  const table = document.querySelector("table tbody");
  let tableData = "";
  data.length == 0
    ? (table.innerHTML =
        "<tr><td class='empty' colspan = '5'>No Data</td></tr>")
    : 0;
}
