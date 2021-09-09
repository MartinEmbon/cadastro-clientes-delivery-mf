var search = document.getElementById("search")
const rows = document.querySelectorAll("tbody tr")
//console.log(rows)



search.addEventListener("keyup",(e)=>{
    const q = e.target.value.toLowerCase();
        rows.forEach((row) => {
          row.querySelector("td:nth-of-type(2)").textContent.toLowerCase().includes(q) ?
          row.style.display = "table-row"
          //row.classList.toggle("active")

           :
           (row.style.display="none")
        });
});



/*
row.querySelector("td").textContent.toLowerCase().startsWith(q)
            ? (row.style.display = "table-row")
            : (row.style.display = "none");
const searchInput = document.getElementById("search");
      const rows = document.querySelectorAll("tbody tr");
      console.log(rows);
      searchInput.addEventListener("keyup", function (event) {
        const q = event.target.value.toLowerCase();
        rows.forEach((row) => {
          row.querySelector("td").textContent.toLowerCase().startsWith(q)
            ? (row.style.display = "table-row")
            : (row.style.display = "none");
        });
      });
*/ 