var search = document.getElementById("search")
const rows = document.querySelectorAll("tbody tr")
//console.log(rows)



search.addEventListener("keyup",(e)=>{
    const q = e.target.value.toLowerCase();
        rows.forEach((row) => {
          row.querySelector("td:nth-of-type(2)").textContent.toLowerCase().startsWith(q) ?
          row.style.display = "table-row"
          //row.classList.toggle("active")

           :
           (row.style.display="none")
        });
});


let adminLogin = document.getElementById("adminLogin")
let adminForm = document.getElementById("adminForm")
let adminPwd = document.getElementById("adminPwd")
let adminBtn = document.getElementById("adminBtn")

adminForm.addEventListener("submit",(e)=>{
  if (adminLogin.value!== "admin" || adminLogin.value==null || adminPwd.value!=="admin" || adminPwd.value==null){  
    e.preventDefault()
  }   
})


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